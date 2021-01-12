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
    
    const _progressBar = new ProgressBar();

    document.body.appendChild(_progressBar.getElement());
    let i = 0;
    const interval = setInterval(() => {
        _progressBar._percentBar.changeValue(i + 1);
        _progressBar._navigatorBar.changeValue(i + 1);
        if (i > 100)
            clearInterval(interval)
        i += 1;
    }, 10);

}