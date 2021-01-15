import UElement from '../UElement';
import NavigatorBar from './Components/NavigatorBar';

import './ProgressBar.css';

class ProgressBar extends UElement{
    constructor() {
        super('div');

        this._navigatorBar = new NavigatorBar();

        // navigator bar attributes
        this._navigatorBar.addClass('uploader_navigator-bar');
        this._navigatorBar.addAttribute('id', 'Uploader_NavigatorBar');


        this.addChild(this._navigatorBar);

        // progress bar attributes
        this.addClass('uploader_progress-bar');
    }

    changeNavigatorValue(_value) {
        this._navigatorBar.changeValue(_value);
    }

    changePercentBarValue(_value) {
        this._navigatorBar._percentBar.changeValue(_value);   
    }
}

export default ProgressBar;