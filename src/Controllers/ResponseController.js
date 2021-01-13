import Controller from "./Controller";

class ResponseController extends Controller {
    constructor() {
        super();
    }

    setHttp(_httpRequest) {
        this._httpRequest = _httpRequest;
    }

    getHttp() {
        return this._httpRequest;
    }
}

export default ResponseController;