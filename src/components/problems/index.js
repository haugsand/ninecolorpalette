import { h } from 'preact';
import style from './style.css';


function Problems() {

    return (
        <>
<div class="bg__left design-problems__bg"></div>
<div class="design-problems design-problems__bg design-section">
  <h2>Hva er ulempene med HSL?</h2>

  <p>
    RGB-fargerommet er utarbeidet med utgangspunkt i hvordan skjermer viser farger, i motsetning til å hensynta hvordan vi mennesker oppfatter farger. Dette fører til at endringer i metning og valør ikke er lineære, og er avhengig av fargetone. 
  </p>

  <p>
    En gul fargetone med 90% metning og 60% valør er vesentlig mer lyssterk enn en blå fargetone med tilsvarende verdier. 
  </p>

  <div class="design-problems__swatches">
    <p class="design-problems__swatch design-problems__swatch--yellow">
      <span class="design-problems__swatch-hue">hue</span> 
      <span class="design-problems__swatch-value">60</span>
    </p>      
    <p class="design-problems__swatch design-problems__swatch--blue">
      <span class="design-problems__swatch-hue">hue</span> 
      <span class="design-problems__swatch-value">240</span>
    </p>
  </div>

  <p>
    Selv om valøren i en fargepalett øker endres lineært, så vil ikke lysstyrken øke lineært. I eksempelet nedenfor er metningen 90%, mens valør minker jevnt fra 90% til 10%, for henholdsvis en gul og en blå fargetone. 
  </p>

  <div class="design-problems__colorscales-container">

    <div class="design-problems__colorscales">
      <div class="design-problems__colorscale">
        <div class="design-problems__colorscale-color" style="background-color: #303003;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #616105;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #919108;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #C2C20A;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #F2F20D;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #F5F53D;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #F7F76E;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #FAFA9E;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #FCFCCF;"></div>
      </div>     
      <div class="design-problems__colorscale">
        <div class="design-problems__colorscale-color" style="background-color: #2B2B2B;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #575757;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #828282;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #AEAEAE;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #D9D9D9;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #E1E1E1;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #E8E8E8;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #F0F0F0;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #F7F7F7;"></div>
      </div>           
    </div>

    <div class="design-problems__colorscales">
      <div class="design-problems__colorscale">
        <div class="design-problems__colorscale-color" style="background-color: #030330;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #050561;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #080891;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #0A0AC2;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #0D0DF2;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #3D3DF5;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #6E6EF7;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #9E9EFA;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #CFCFFC;"></div>
      </div>     
      <div class="design-problems__colorscale">
        <div class="design-problems__colorscale-color" style="background-color: #080808;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #0F0F0F;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #171717;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #1E1E1E;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #262626;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #515151;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #7D7D7D;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #A8A8A8;"></div>
        <div class="design-problems__colorscale-color" style="background-color: #D4D4D4;"></div>
      </div>      

    </div>
  </div>



  <p>
    Dette verktøyet tar hensyn til dette, og bruker <a href="https://en.wikipedia.org/wiki/CIELAB_color_space" target="_blank" rel="noopener">CIELAB-fargerommet</a> til å generere paletter med jevne avstandar mellom hver farge.
  </p>
</div>
<div class="bg__right design-problems__bg"></div>
        </>
    );

} 

export default Problems;
