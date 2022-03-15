import chroma from "chroma-js";
import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';


import Adjustments from './adjustments';
import Colorscheme from './colorscheme';
import Footer from './footer';
import Header from './header';
import Hsl from './hsl';
import Intro from './intro';
import Ninecolors from './ninecolors';
import Palette from './palette';
import Problems from './problems';

class Color {
  constructor(colorInput, step) {
    if (chroma.valid(colorInput)) {
      this.color = chroma(colorInput);
    } else {
      this.color = chroma('red');
    }
    this.step = step;
    this.locked = false;
  }
  
    get hex() { return this.color.hex(); }
    set hex(value) { this.color = chroma(value); }
      
    get rgb() { return this.color.css(); }
       
    get hsl() { return this.color.css('hsl'); }
  
    get h() { return Math.round(this.color.get('hsl.h')); }

  set h(value) { this.color = this.color.set('hsl.h', value); }
   
  get s() { return Math.round(this.color.get('hsl.s') * 100); }
  set s(value) { this.color = this.color.set('hsl.s', value / 100); }
    
  get l() { return Math.round(this.color.get('hsl.l') * 100); }
  set l(value) { this.color = this.color.set('hsl.l', value / 100); }
  
  get contrastWhite() { return this.calculateContrastWhite().toPrecision(3) }
  get contrastBlack() { return this.calculateContrastBlack().toPrecision(3) }
  
  get isLocked() { return this.locked; }
  
  calculateContrastWhite() { return chroma.contrast(this.hex, 'white'); }
  calculateContrastBlack() { return chroma.contrast(this.hex, 'black'); }
  
  toggleLock() { this.locked = !this.locked; }
  lockColor() { this.locked = true; }
  unlockColor() { this.locked = false; }
}

function refreshColors(colors, lockedStep) {
  
  // Ta hensyn til følgende: Om denne refreshen skjer som følge av at jeg justerer en bestemt farge, vil jeg at denne fargen skal være låst. 
  
  const scale = [];
  const domain = [];

  Object.keys(colors).forEach(step => {
    if (colors[step].isLocked || step === lockedStep) {
      scale.push(colors[step].hex);
      domain.push(parseInt(step, 10));
    }
  });
  
  // Legg den justerte fargen til domain og scale, om den ikke finnes

  const newScale = chroma
    .scale(scale)
    .mode("lab")
    .domain(domain)
    .colors(Object.keys(colors).length);
  
  Object.keys(colors).forEach((step, index) => {
    colors[step].hex = newScale[index];
  });

  return colors;  
}


function App() {

    const defaultColors = {
        900: new Color('#300319', 900),
        800: new Color('#570930', 800),
        700: new Color('#811049', 700),
        600: new Color('#af1964', 600),
        500: new Color('#de2180', 500),
        400: new Color('#eb679d', 400),
        300: new Color('#f599bb', 300),
        200: new Color('#fcc8da', 200),
        100: new Color('#fef5fa', 100)
    }

    defaultColors[900].lockColor();
    defaultColors[500].lockColor();
    defaultColors[100].lockColor();

    const [colors, setColors] = useState(defaultColors);

    const style = {
        "--color-900": colors[900].hex,
        "--color-800": colors[800].hex,
        "--color-700": colors[700].hex,
        "--color-600": colors[600].hex,
        "--color-500": colors[500].hex,
        "--color-400": colors[400].hex,
        "--color-300": colors[300].hex,
        "--color-200": colors[200].hex,
        "--color-100": colors[100].hex
    };

    function updateColors(colors, lockedStep) {
        const newColors = refreshColors({...colors}, lockedStep);
        setColors(newColors);
    }

    function toggleLock(colors, step) {
        colors[step].toggleLock();
        const newColors = {...colors};
        setColors(newColors);
    }

    return (

        <main style={style}>
            <Header />
            <Intro />

            <Adjustments colors={colors} updateColors={updateColors} toggleLock={toggleLock} />
            <Palette colors={colors} />

            <Ninecolors />
            <Hsl />
            <Colorscheme />
            <Problems />
            <Footer />
        </main>
    );
}


export default App;
