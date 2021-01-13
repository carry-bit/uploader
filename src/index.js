import DOMController from './Controllers/DOMController';
import EventController from './Controllers/EventController';
import RequestController from './Controllers/RequestController';
import ResponseController from './Controllers/ResponseController';

import ControllerManager from './Managers/ControllerManager';

import UploadBar from './Objects/UploadBar/UploadBar';
import ProgressBar from './Objects/ProgressBar/ProgressBar';

import * as C from './Helpers/Constant';
import * as Helper from './Helpers/Helper';

// Global Styles
import './index.css';

export function init(_options) {
    // pass _options as a reference to the optionsValidator helper
    Helper.optionsValidator(_options);

    // instances of objects
    const _UploadBar = new UploadBar(_options.name, _options.text);
    const _ProgressBar = new ProgressBar();

    // instnces of controllres
    const _DOMController = new DOMController(
        _options.el,
        _UploadBar,
        _ProgressBar
    );
    const _EventController = new EventController();
    const _RequestController = new RequestController();
    const _ResponseController = new ResponseController();

    // setup controller manager
    const _controllerManger = new ControllerManager(
        _DOMController,
        _EventController,
        _RequestController,
        _ResponseController
    );

    _EventController.initEventListeners();
}