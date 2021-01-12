import UElement from "../../UElement";
import { navigatorValueNotValid } from '../../../Helpers/Errors/Errors.en';

class NavigatorBar extends UElement {
    constructor() {
        super('div');
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