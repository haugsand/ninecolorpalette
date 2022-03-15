import { h } from 'preact';
import style from './style.css';


function Colorscheme() {

    return (
        <>
<div class="bg__left design-colorscheme__bg"></div>
<div class="design-colorscheme design-colorscheme__bg design-section">
  <h2 class="design-colorscheme__title">Hvordan kan jeg finne fargetoner som passer sammen?</h2>

  <p class="design-colorscheme__paragraph">
    I følge <a href="https://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm#color_harmonies" class="design-colorscheme__link" target="_blank" rel="noopener">fargeteorien</a> kan vi lage harmoniske fargeskjema ved å se på fargetonenes posisjon i forhold til hverandre i fargesirkelen.
  </p>

  <div class="design-colorscheme__schemes">
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M64 16v96"/></svg>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--180"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Complementary</p>
    </div>
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M41 23l23-8M64 15l23 8"/></svg>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--30"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--330"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Analogous</p>
    </div>  
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M23 87h82M22 88l41-72M65 16l41 72"/></svg>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--120"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--240"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Triadic</p>
    </div>  
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M41 105h46M40 106l23-90M65 16l23 90"/></svg>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--150"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--210"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Split-Complementary</p>
    </div>  
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M64 113L23 88M22 87l41-71M65 15l41 25M106 42l-41 71"/></svg>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--60"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--180"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--240"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Rectangle</p>
    </div>  
    <div class="design-colorscheme__scheme">
      <div class="design-colorscheme__colorcircle">
        <div class="design-colorscheme__colorcircle-circle"></div>
        <svg class="design-colorscheme__svg-line" viewBox="0 0 128 128"><path d="M63 113L15 65M15 63l48-48M65 15l48 48M113 65l-48 48"/></svg>
        <div class="design-colorscheme__colorcircle-center design-colorscheme__bg"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--0"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--90"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--180"></div>
        <div class="design-colorscheme__colorcircle-pin design-colorscheme__colorcircle-pin--270"></div>
      </div>
      <p class="design-colorscheme__scheme-name">Square</p>
    </div>
  </div>


</div>
<div class="bg__right design-colorscheme__bg"></div>
        </>
    );

} 

export default Colorscheme;
