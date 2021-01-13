import UElement from '../UElement';
import FileInput from './Components/FileInput';
import FileLabel from './Components/FileLabel';
import SpinnerLoading from './Components/SpinnerLoading';

import './UploadBar.css';

class UploadBar extends UElement {
    constructor(_optionsName, _optionsText) {
        super('fieldset');

        this._fileInput = new FileInput();
        this._fileLabel = new FileLabel();
        this._spinnerLoading = new SpinnerLoading();

        // File Input attributes
        this._fileInput.addClass('uploader_file-input');
        this._fileInput.addAttribute('type', 'file');
        this._fileInput.addAttribute('id', 'Uploader_FileInput');
        this._fileInput.addAttribute('name', _optionsName);

        // File Label attributes
        this._fileLabel.addClass('uploader_file-label');
        this._fileLabel.addAttribute('for', 'Uploader_FileInput');
        this._fileLabel.text(_optionsText);

        this.addChild(this._fileLabel);
        this.addChild(this._fileInput);

        // upload bar attributes
        this.addClass('uploader_upload-bar');
    }

    // methods
    addSpinnerLoading() {
        this.getFileLabel().addChild(this._spinnerLoading);
    }

    // getters
    getFileInput() {
        return this._fileInput;
    }

    getFileLabel() {
        return this._fileLabel;
    }
}

export default UploadBar;