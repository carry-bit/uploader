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


    const _uploadBar = new UploadBar(_options.text);

    document.body.appendChild(_uploadBar.getElement())

}