import * as err from './Errors/Errors.en';

// validate _options passed by user
export function optionsValidator(_options) {
    // necessary properties
    if (_options === undefined) // _options is undefined
        throw Error(err.optionsObjectNotFound);
    else if (_options.el === undefined || _options.el == '') // el not found
        throw Error(err.optionsElementNotFound);
    else if (_options.target === undefined || _options.target == '') // target not found
        throw Error(err.optionsTargetNotFound);
    else if (_options.text === undefined || _options.text == '') // text not found
        throw Error(err.optionsTextNotFound);
    else if (_options.failResponse === undefined || _options.failResponse == '') // failResponse not found
        throw Error(err.optionsFailResponseNotFound);

    // optional properties
    if (_options.success === undefined) { // success not found
        _options.success = false;
    } else { // if success is defined
        if (_options.success.message === undefined)
            throw Error(err.optionsSuccessMessageNotFound);
        else if (_options.success.callback === undefined)
            _options.success.callback = false;
    }


    if (_options.failur === undefined) { // failur not found
        _options.failur = false;
    } else { // if failur is defined
        if (_options.failur.message === undefined)
            throw Error(err.optionsFailurMessageNotFound);
        else if (_options.failur.callback === undefined)
            _options.failur.callback = false;
    }


    if (_options.rules === undefined) { // rules not found
        _options.rules = false;
    }

    return _options;
}