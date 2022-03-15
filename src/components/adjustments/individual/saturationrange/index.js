import { h } from 'preact';
import './style.css';

function SaturationRange({colors, updateColors, step}) {
    
    const onInput = e => {

        if (Number.isNaN(colors[step].h)) {
            if (step == 900) {
                colors[900].hex = colors[800].hex;
            } else if (step == 500) {
                colors[500].hex = colors[600].hex;
            } else if (step == 100) {
                colors[100].hex = colors[200].hex;
            }
        }
        colors[step].s = e.target.value;

        updateColors(colors, step);
    }

    const style = {
        "--color": colors[step].hex,
    };

    return (
        <div class="saturationrange" style={style}>
            <input 
                type="range" 
                min="0" 
                max="100" 
                step="1" 
                value={colors[step].s} 
                onInput={onInput}
                class="saturationrange__input"
            /> 
        </div>
    );
}

export default SaturationRange;
