import UElement from '../UElement';
import FileInput from './Components/FileInput';
import FileLabel from './Components/FileLabel';
import './UploadBar.css';

class UploadBar extends UElement {
    constructor(_optionsText) {
        super('fieldset');

        this._fileInput = new FileInput();
        this._fileLabel = new FileLabel();

        // File Input attributes
        this._fileInput.addClass('uploader_file-input');
        this._fileInput.addAttribute('type', 'file');
        this._fileInput.addAttribute('id', 'Uploader_FileInput');
        this._fileInput.addClass('uploader_file-input');

        // File Label attributes
        this._fileLabel.addClass('uploader_file-label');
        this._fileLabel.addAttribute('for', 'Uploader_FileInput');
        this._fileLabel.text(_optionsText);

        this.addChild(this._fileLabel);
        this.addChild(this._fileInput);

        // upload bar attributes
        this.addClass('uploader_upload-bar');
    }
}

export default UploadBar;