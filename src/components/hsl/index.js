import { h } from 'preact';
import style from './style.css';


function Hsl() {

    return (
        <>
            <div class="bg__left design-hsl__bg"></div>
            <div class="design-hsl design-hsl__bg design-section">
              <h2>Hva er hue, saturation og lightness?</h2>

              <p>
                Hue, saturation og lightness er engelske begrep for henholdsvis fargetone, metning og valør. <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank" rel="noopener">HSL</a> er en måte å representere en farge på innenfor <a href="https://en.wikipedia.org/wiki/RGB_color_model" target="_blank" rel="noopener">RGB-fargemodellen</a>. I stedet for å angi hvor store mengder med rød, grønn og blå en farge består av, velger du en fargetone fra fargesirkelen, og angir metning og valør. 
              </p>

              <figure class="design-hsl__figure">
                <div class="design-hsl__images">
                  <img src="/assets/rgb-cube_336.jpg" srcset="/assets/rgb-cube_672.jpg 2x" width="336" height="241" alt="" class="design-hsl__image" />
                  <img src="/assets/hsl-cylinder_336.jpg" srcset="/assets/hsl-cylinder_672.jpg 2x" width="336" height="241" alt="" class="design-hsl__image" />
                </div>
                <figcapton class="design-hsl__figcaption">
                  Tradisjonell RGB-angivelse kan representeres som en likesidet kube, mens HSL kan representeres som en sylinder
                </figcapton>
              </figure>

              <p>
                Når du har lært deg å bruke HSL, vil du nok oppleve at denne representasjonen er mer intuitiv og lettere å jobbe med enn HEX-koder og RGB-angivelser.
              </p>
            </div>
            <div class="bg__right design-hsl__bg"></div>
        </>
    );

} 

export default Hsl;
