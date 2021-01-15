import UElement from "../../UElement";
import PercentBar from './PercentBar';
import { navigatorValueNotValid } from '../../../Helpers/Errors/Errors.en';

class NavigatorBar extends UElement {
    constructor() {
        super('div');

        this._percentBar = new PercentBar();


        // percent bar attributes
        this._percentBar.addClass('uploader_percent-bar');
        this._percentBar.addAttribute('id', 'Uploader_percent-bar');
        this._percentBar.text('0%');

        this.addChild(this._percentBar);

    }

    changeValue(_value) {
        if (_value < 0)
            throw Error(navigatorValueNotValid);
        else if (_value > 100)
            _value = 100;

        this.getElement().style = `width: ${_value}%`;
    }
}

export default NavigatorBar;