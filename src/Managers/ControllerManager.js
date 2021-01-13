class ControllerManager {
    constructor(_DOMController, _EventController, _RequestController, _ResponseController) {
        this._DOMController = _DOMController;
        this._EventController = _EventController;
        this._RequestController = _RequestController;
        this._ResponseController = _ResponseController;

        // add controller manager to the controllers
        this.boot();
    }

    boot() {
        this._DOMController.addManager(this);
        this._EventController.addManager(this);
        this._RequestController.addManager(this);
        this._ResponseController.addManager(this);
    }

    // getters
    getDOM() {
        return this._DOMController;
    }

    getEvent() {
        return this._EventController;
    }

    getRequest() {
        return this._RequestController;
    }

    getResponse() {
        return this._ResponseController;
    }
}

export default ControllerManager;