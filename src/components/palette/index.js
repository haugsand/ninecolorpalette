import { h } from 'preact';
import './style.css';


import PaletteRow from './paletterow';




function Palette({colors}) {

    const copyPalette = () => {

        const value = `<svg
      width="360"
      height="40"
    >
<rect width="40" height="40" x="0" y="0" fill="${colors[900].hex}" /> 
<rect width="40" height="40" x="40" y="0" fill="${colors[800].hex}" /> 
<rect width="40" height="40" x="80" y="0" fill="${colors[700].hex}" /> 
<rect width="40" height="40" x="120" y="0" fill="${colors[600].hex}" /> 
<rect width="40" height="40" x="160" y="0" fill="${colors[500].hex}" /> 
<rect width="40" height="40" x="200" y="0" fill="${colors[400].hex}" /> 
<rect width="40" height="40" x="240" y="0" fill="${colors[300].hex}" /> 
<rect width="40" height="40" x="280" y="0" fill="${colors[200].hex}" /> 
<rect width="40" height="40" x="320" y="0" fill="${colors[100].hex}" />
  </svg>`;

        navigator.clipboard.writeText(value);
    }



    return (
        <>
            <div class="bg__left palette__left-bg">
                {Object.keys(colors).reverse().map((value, index) => {
                    return <div class="palette__left-bg-color" style={{backgroundColor: `var(--color-${value})`}}></div>
                })}
            </div>
            <div class="design-section palette">
                <h2>Color palette</h2>

                <table class="palette__table">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Contrast (white)</th>
                            <th>Contrast (black)</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.keys(colors).reverse().map((value, index) => {
                            return <PaletteRow key={index} color={colors[value]} />
                        })}

                    </tbody>
                </table>

                <button onClick={copyPalette}>
                    Copy to Figma
                </button>

            </div>
        </>
    );

} 

export default Palette;



