import Controller from "./Controller";
import {
    _uploadBarStatus
} from '../Helpers/Constant';
import {
    fileValidator,
    _optionsTemp,
    successUpload,
    failurUpload,
    finalUpload
} from '../Helpers/Helper';

class EventController extends Controller {
    constructor() {
        super();

        this._fileOptions = {
            mounted: false,
            file: null,
            target: null,
            info: {
                name: null,
                size: null,
                type: null,
                lastModified: null,
            }
        };

        this.fileInputChangeHandler = this.fileInputChangeHandler.bind(this);

        // upload event handlers
        this.uploadLoadStartHandler = this.uploadLoadStartHandler.bind(this);
        this.uploadProgressHandler = this.uploadProgressHandler.bind(this);
        this.uploadAbortHandler = this.uploadAbortHandler.bind(this);
        this.uploadErrorHandler = this.uploadErrorHandler.bind(this);
        this.uploadLoadendHandler = this.uploadLoadendHandler.bind(this);

        // response event handlers
        this.responseReadyStateChangeHandler = this.responseReadyStateChangeHandler.bind(this);
    }

    initEventListeners() {
        // get UploadBar from DOMController
        const _fileInput = this._controllerManager.getDOM().getUploadBar().getFileInput().getElement();

        // add change eventListener to file input
        _fileInput.addEventListener('change', this.fileInputChangeHandler);
    }

    // event handlers
    fileInputChangeHandler(event) {
        const _file = event.target.files[0];

        // now we have to validate file
        const _validatedFile = fileValidator(_file);

        if (_validatedFile.error) {

            if (_validatedFile.useAlert)
                alert(_validatedFile.message);

            return false;
        }

        this._fileOptions = {
            moundet: true,
            file: _file,
            target: _validatedFile.target,
            info: {
                name: _file.name,
                size: _file.size,
                type: _file.type,
                lastModified: _file.lastModified
            }
        };

        this.setupHttpRequest();
    }

    setupHttpRequest() {
        const _request = this._controllerManager.getRequest();

        // append file to the form data
        _request.addFileToFormData(this._fileOptions);

        // open a request
        _request.open(this._fileOptions.target);

        this._httpRequest = _request.getHttpRequest();

        // set upload progress event listeners
        this.initUploadEventsHandler();
    }

    initUploadEventsHandler() {
        const _upload = this._httpRequest.upload;
        _upload.addEventListener('loadstart', this.uploadLoadStartHandler);
        _upload.addEventListener('progress', this.uploadProgressHandler);
        _upload.addEventListener('abort', this.uploadAbortHandler);
        _upload.addEventListener('error', this.uploadErrorHandler);
        _upload.addEventListener('loadend', this.uploadLoadendHandler);

        // set response state event listeners
        this.initResponseEventHandlers();
    }

    initResponseEventHandlers() {
        this._httpRequest.addEventListener('readystatechange', this.responseReadyStateChangeHandler);

        // send request and get response
        this._httpResponse = this._controllerManager.getRequest().send();
    }

    // upload event handlers...
    uploadLoadStartHandler() {
        const _DOM = this._controllerManager.getDOM();

        _DOM.initProgressBar();

        _DOM.setUploadBarStatus(
            _uploadBarStatus.uploading,
            (_optionsTemp.msg && _optionsTemp.msg.uploadingStatusText) ? _optionsTemp.msg.uploadingStatusText : null
        );
        _DOM.disableUploadBar();
    }

    uploadProgressHandler(event) {
        const _DOM = this._controllerManager.getDOM();
        const _uploadPercent = Math.round((event.loaded / event.total) * 100);

        _DOM.changePercentValue(_uploadPercent);
        _DOM.changeNavigatorValue(_uploadPercent);

    }

    uploadAbortHandler() {
        const _DOM = this._controllerManager.getDOM();

        _DOM.normalizeUploadBar();
        _DOM.removeProgressBar();
        failurUpload();
    }

    uploadErrorHandler() {
        const _DOM = this._controllerManager.getDOM();

        _DOM.normalizeUploadBar();
        _DOM.removeProgressBar();
        failurUpload();
    }

    uploadLoadendHandler() {
        finalUpload();
    }

    // response event handlers..
    responseReadyStateChangeHandler(event) {
        const _DOM = this._controllerManager.getDOM();

        if (event.currentTarget.readyState == 4) {
            if (event.currentTarget.status == 200) {
                // if response is failed
                if (event.currentTarget.responseText === _optionsTemp.failResponse) {
                    _DOM.clearFileInput();

                    _DOM.normalizeUploadBar();
                    _DOM.removeProgressBar();

                    failurUpload(event.currentTarget.responseText);

                    return false;
                }

                _DOM.setUploadBarStatus(
                    _uploadBarStatus.successful,
                    (_optionsTemp.msg && _optionsTemp.msg.successfulStatusText) ? _optionsTemp.msg.successfulStatusText : null
                );
                _DOM.disableUploadBar();
                _DOM.removeProgressBar();

                successUpload(event.currentTarget.responseText);
            } else {
                _DOM.clearFileInput();

                _DOM.normalizeUploadBar();
                _DOM.removeProgressBar();

                failurUpload(event.currentTarget.responseText);

                return false;
            }
        }
    }
}

export default EventController;