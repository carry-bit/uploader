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
        this._fileInput.addAttribute('type', 'file');
        this._fileInput.addAttribute('id', 'Uploader_FileInput');
        this._fileInput.addClass('uploader_file-input');

        // File Label attributes
        this._fileLabel.addAttribute('for', 'Uploader_FileInput');
        this._fileLabel.addAttribute('id', 'Uploader_FileLabel');
        this._fileLabel.text(_optionsText);

        this.addChild(this._fileLabel);
        this.addChild(this._fileInput);
    }
}

export default UploadBar;