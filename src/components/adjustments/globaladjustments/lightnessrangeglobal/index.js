import { h } from 'preact';
import style from './style.css';



function LightnessRangeGlobal({colors, updateColors}) {

    const onInput = e => {
        colors[500].l = e.target.value;

        updateColors(colors, 500);
    }



    return (
        <div class="lightnessrangeglobal">
            <div class="lightnessrangeglobal__title">
                Lightness: {colors[500].l}
            </div>
            <div class="lightnessrangeglobal__input-container">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1" 
                    value={colors[500].l} 
                    onInput={onInput}
                    class="lightnessrangeglobal__input"
                /> 
            </div>
        </div>
    );
}




export default LightnessRangeGlobal;
