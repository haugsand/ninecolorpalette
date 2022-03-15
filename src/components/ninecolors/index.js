import { h } from 'preact';
import style from './style.css';


function Ninecolors() {

    return (
        <div class="design-ninecolors design-section">
          <h2>Hvorfor består paletten av 9 farger?</h2>

          <p>
            I mange sammenhenger, blant annet hos <a href="https://www.colourlovers.com/palettes" target="_blank" rel="noopener">Colourlovers</a>, består en fargepalett av fem farger i flere fargetoner.
          </p>

          <div class="design-ninecolors__colors">
            <div class="design-ninecolors__color design-ninecolors__color--1"></div>
            <div class="design-ninecolors__color design-ninecolors__color--2"></div>
            <div class="design-ninecolors__color design-ninecolors__color--3"></div>
            <div class="design-ninecolors__color design-ninecolors__color--4"></div>
            <div class="design-ninecolors__color design-ninecolors__color--5"></div>
          </div>

          <p>
            For å bygge et omfattende brukergrensesnitt, behøver du i praksis et fargeskjema med et rikt utvalg farger innenfor hver fargetone, noe som er godt demonstrert hos <a href="https://refactoringui.com/previews/building-your-color-palette/" target="_blank" rel="noopener">Refactoring UI</a>. 
          </p>

          <p>
            Det er ikke sikkert at du kommer til å bruke hver eneste farge i et slikt fargeskjema, men det kan likevel være nyttig å lage fleksible paletter fra starten av. Da unngår du at fargeskjemaet utvides klattvis og usystematisk etter hvert som tiden går. 
          </p>
        </div>
    );

} 

export default Ninecolors;
