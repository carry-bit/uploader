import { _uploadBarStatus } from "../Helpers/Constant";
import Controller from "./Controller";

class RequestController extends Controller {
    constructor() {
        super();

        this._formData = this.createFormDate();
        this._httpRequest = this.createHttpRequest();
    }

    createFormDate() {
        const _formData = new FormData();

        return _formData;
    }

    addFileToFormData(_fileOptions) {
        const _inputFileNameAttribute = this._controllerManager.getDOM().getUploadBar().getFileInput().getAttribute('name');

        this._formData.append(_inputFileNameAttribute, _fileOptions.file, _fileOptions.info.name);
    }

    // create xhr
    createHttpRequest() {
        const _httpRequest = new XMLHttpRequest();

        return _httpRequest;
    }

    getHttpRequest() {
        return this._httpRequest;
    }

    open(_target) {
        this._httpRequest.open('post', _target);
    }

    send() {
        this._httpRequest.send(this._formData);
        
        this._controllerManager.getResponse().setHttp(this._httpRequest);
        return this._controllerManager.getResponse();
    }
}

export default RequestController;