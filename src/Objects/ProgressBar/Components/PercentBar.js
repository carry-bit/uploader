import UElement from "../../UElement";
import {
    percentValueNotValid
} from "../../../Helpers/Errors/Errors.en";

class PercentBar extends UElement {
    constructor() {
        super('span')
    }

    changeValue(_value) {
        if (_value < 0)
            throw Error(percentValueNotValid);
        else if (_value > 100)
            _value = 100;

        this.text(_value + '%');
        this.getElement().style = `right: ${_value}%`;
    }
}

export default PercentBar;