import UElement from "../../UElement";
import SpinnerLoadingSvg from '../../../Assets/SpinnerLoading.svg';

class SpinnerLoading extends UElement {
    constructor() {
        super('span');

        this.getElement().innerHTML = SpinnerLoadingSvg;

        this.addClass('uploader_spinner-loading');
    }
}

export default SpinnerLoading;