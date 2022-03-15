import { h } from 'preact';
import './style.css';

function LightnessRange({colors, updateColors, step}) {
    
    const onInput = e => {
        colors[step].l = e.target.value;

        updateColors(colors, step);
    }

    const style = {
        "--color": colors[step].hex,
    };

    return (
        <div class="lightnessrange" style={style}>
            <input 
                type="range" 
                min="0" 
                max="100" 
                step="1" 
                value={colors[step].l} 
                onInput={onInput}
                class="lightnessrange__input"
            /> 
        </div>
    );
}


export default LightnessRange;
