import Controller from "./Controller";
import {
    _uploadBarStatus
} from '../Helpers/Constant';
import {
    rootElementNotFound
} from "../Helpers/Errors/Errors.en";

class DOMController extends Controller {
    constructor(_rootElementSelector, _UploadBar, _ProgressBar) {
        super();

        this._rootElementSelector = _rootElementSelector;

        this._UploadBar = _UploadBar;
        this._ProgressBar = _ProgressBar;

        this._UploadBarInputId = this._UploadBar._fileInput.getAttribute('id');
        this._UploadBarNormalText = this._UploadBar.getText();

        this._rootElement = this.getRootElement();

        this.renderToRoot(this._UploadBar.getElement());
    }


    // root methods
    getRootElement() {
        const _rootElement = document.querySelector(this._rootElementSelector);

        if (_rootElement === null)
            throw Error(rootElementNotFound(this._rootElementSelector));

        return _rootElement;
    }

    renderToRoot(_element) {
        this._rootElement.appendChild(_element);
    }

    removeFromRoot(_element) {
        try {
            this._rootElement.removeChild(_element);
        } catch (e) {
            return false;
        }
    }

    // upload bar methods
    setUploadBarStatus(_status, _text = null) {
        const _fileLabel = this._UploadBar._fileLabel.getElement();

        if (_fileLabel.classList.contains(_status.name))
            return false;

        this.normalizeUploadBar();

        this._UploadBar._fileLabel.addClass(_status.name);

        if (_text !== null)
            this._UploadBar._fileLabel.text(_text);
        else
            this._UploadBar._fileLabel.text(_status.text);

        if (_status === _uploadBarStatus.uploading)
            this.getUploadBar().addSpinnerLoading();
    }

    normalizeUploadBar() {
        this._UploadBar._fileLabel.removeClass('warning');
        this._UploadBar._fileLabel.removeClass('success');
        this._UploadBar._fileLabel.removeClass('disabled');

        this._UploadBar._fileLabel.addAttribute('for', this._UploadBarInputId);
        this._UploadBar._fileLabel.text(this._UploadBarNormalText);
    }

    disableUploadBar() {
        this._UploadBar._fileLabel.addClass('disabled');
        this._UploadBar._fileLabel.removeAttribute('for');
    }

    clearFileInput() {
        this._UploadBar._fileInput.getElement().value = null;
    }

    getUploadBar() {
        return this._UploadBar;
    }

    // progress bar methods
    initProgressBar() {
        this.renderToRoot(this._ProgressBar.getElement());
    }

    changeNavigatorValue(_value) {
        this._ProgressBar.changeNavigatorValue(_value);
    }

    changePercentValue(_value) {
        this._ProgressBar.changePercentBarValue(_value);
    }

    removeProgressBar() {
        this._ProgressBar.changeNavigatorValue(0);
        this._ProgressBar.changePercentBarValue(0);
        this.removeFromRoot(this._ProgressBar.getElement());
    }
}

export default DOMController;