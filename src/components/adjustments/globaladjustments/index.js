import { h } from 'preact';
import style from './style.css';


import HueRangeGlobal from './huerangeglobal';
import SaturationRangeGlobal from './saturationrangeglobal';
import LightnessRangeGlobal from './lightnessrangeglobal';



function GlobalaAjustments({colors, updateColors}) {



    const style = {
        "--hue": colors[500].h,
        "--saturation": colors[500].s,
        "--lightness": colors[500].l,
    };


    return (
        <div style={style}>
            <HueRangeGlobal colors={colors} updateColors={updateColors} />
            <SaturationRangeGlobal colors={colors} updateColors={updateColors} />
            <LightnessRangeGlobal colors={colors} updateColors={updateColors} />
        </div>
    );

} 

export default GlobalaAjustments;
