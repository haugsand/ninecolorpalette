import { h } from 'preact';
import style from './style.css';




function SaturationRangeGlobal({colors, updateColors}) {


    const onInput = e => {

        if (Number.isNaN(colors[500].h)) {
            colors[500].hex = colors[600].hex;
        }
        colors[500].s = e.target.value;

        updateColors(colors, 500);
    }


    return (
        <div class="saturationrangeglobal">
            <div class="saturationrangeglobal__title">
                Saturation: {colors[500].s}
            </div>
            <div class="saturationrangeglobal__input-container">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1" 
                    value={colors[500].s} 
                    onInput={onInput}
                    class="saturationrangeglobal__input"
                /> 
            </div>
        </div>
    );
}


export default SaturationRangeGlobal;
