import { h } from 'preact';
import './style.css';


function PaletteRow({color}) {

    const colorVariable = 'var(--color-' + color.step + ')'; 

    let contrastWhiteLevel = '';
    if (color.contrastWhite >= 7.1) {
        contrastWhiteLevel = 'AAA';
    } else if (color.contrastWhite >= 4.5) {
        contrastWhiteLevel = 'AA';
    }

    let contrastBlackLevel = '';
    if (color.contrastBlack >= 7.1) {
        contrastBlackLevel = 'AAA';
    } else if (color.contrastBlack >= 4.5) {
        contrastBlackLevel = 'AA';
    }


    return (
        <tr>
            <td class="palette__td">{color.hex}</td>
            <td class="palette__td">{color.contrastWhite} {contrastWhiteLevel}</td>
            <td class="palette__td">{color.contrastBlack} {contrastBlackLevel}</td>
        </tr>
    );

} 

export default PaletteRow;
