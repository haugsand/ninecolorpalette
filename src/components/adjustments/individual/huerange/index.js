import { h } from 'preact';
import './style.css';



function HueRange({colors, updateColors, step}) {

    const onInput = e => {
        colors[step].h = e.target.value;

        updateColors(colors, step);
    }

    const style = {
        "--color": colors[step].hex,
    };

    return (
        <div class="huerange" style={style}>
            <input 
                type="range" 
                min="0" 
                max="359" 
                step="1" 
                value={colors[step].h} 
                onInput={onInput}
                class="huerange__input"
            /> 
        </div>
    );
}


export default HueRange;
