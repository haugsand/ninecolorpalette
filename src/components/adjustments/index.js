import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.css';

import GlobalAdjustments from './globaladjustments';
import Individual from './individual';


function Adjustments({colors, updateColors, toggleLock}) {

    const [activeTab, setActiveTab] = useState('overall');

    return (
        <div class="design-section">
            <h2>Adjustments</h2>
            <p>
              <button onClick={() => {setActiveTab('overall')}}>Overall look and feel</button>&nbsp;
              <button onClick={() => {setActiveTab('individual')}}>Individual color adjustment</button>
            </p>
            {activeTab == 'overall' && (
                <GlobalAdjustments colors={colors} updateColors={updateColors} />
            )}
            {activeTab == 'individual' && (
                <Individual colors={colors} updateColors={updateColors} toggleLock={toggleLock}  />
            )}
        </div>
    );

} 

export default Adjustments;
