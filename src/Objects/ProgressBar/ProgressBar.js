import UElement from '../UElement';
import NavigatorBar from './Components/NavigatorBar';
import PercentBar from './Components/PercentBar';

import './ProgressBar.css';

class ProgressBar extends UElement{
    constructor() {
        super('div');

        this._navigatorBar = new NavigatorBar();
        this._percentBar = new PercentBar();

        // navigator bar attributes
        this._navigatorBar.addClass('uploader_navigator-bar');
        this._navigatorBar.addAttribute('id', 'Uploader_NavigatorBar');
        
        // percent bar attributes
        this._percentBar.addClass('uploader_percent-bar');
        this._percentBar.addAttribute('id', 'Uploader_percent-bar');
        this._percentBar.text('0%');


        this.addChild(this._navigatorBar);
        this.addChild(this._percentBar);

        // progress bar attributes
        this.addClass('uploader_progress-bar');
    }

    changeNavigatorValue(_value) {
        this._navigatorBar.changeValue(_value);
    }

    changePercentBarValue(_value) {
        this._percentBar.changeValue(_value);   
    }
}

export default ProgressBar;