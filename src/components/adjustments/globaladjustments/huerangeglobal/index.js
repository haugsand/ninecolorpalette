import { h } from 'preact';
import style from './style.css';



function HueRangeGlobal({colors, updateColors}) {



    const onInput = e => {
        colors[900].h = e.target.value;
        colors[800].h = e.target.value;
        colors[700].h = e.target.value;
        colors[600].h = e.target.value;
        colors[500].h = e.target.value;
        colors[400].h = e.target.value;
        colors[300].h = e.target.value;
        colors[200].h = e.target.value;
        colors[100].h = e.target.value;

        updateColors(colors, 500);
    }


    return (
        <div class="huerangeglobal">
            <div class="huerangeglobal__title">
                Hue: {colors[500].h}
            </div>
            <div class="huerangeglobal__input-container">
                <input 
                    type="range" 
                    min="0" 
                    max="359" 
                    step="1" 
                    value={colors[500].h} 
                    onInput={onInput}
                    class="huerangeglobal__input"
                /> 
            </div>
        </div>
    );
}


export default HueRangeGlobal;
