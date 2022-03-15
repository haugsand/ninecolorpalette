import { h } from 'preact';
import './style.css';

import HueRange from './huerange';
import SaturationRange from './saturationrange';
import LightnessRange from './lightnessrange';



function ColorLock({colors, toggleLock, step}) {
    const onClick = e => {

        toggleLock(colors, step);

    }

    let modifier = "unlocked";
    if (colors[step].isLocked) {
        modifier = "locked";
    }

    // disabled={colors[step].isLocked ? true: false} 

    return (
        <button class={modifier} disabled={["900", "500", "100"].includes(step) ? true : false} onClick={onClick}>{step}</button>
    );
}


function Individual({colors, updateColors, toggleLock}) {

    return (
        <div class="individual">

            <p>Hue</p>
            <div class="individual__controls">
                {Object.keys(colors).reverse().map((value, index) => {
                    return <HueRange colors={colors} updateColors={updateColors} step={value} />
                })}
            </div>

            <p>Saturation</p>
            <div class="individual__controls">
                {Object.keys(colors).reverse().map((value, index) => {
                    return <SaturationRange colors={colors} updateColors={updateColors} step={value} />
                })}
            </div>


            <p>Lightness</p>
            <div class="individual__controls">
                {Object.keys(colors).reverse().map((value, index) => {
                    return <LightnessRange colors={colors} updateColors={updateColors} step={value} />
                })}
            </div>

            {Object.keys(colors).reverse().map((value, index) => {
                return <ColorLock colors={colors} toggleLock={toggleLock} step={value} />
            })}
        </div>
    );

} 

export default Individual;
