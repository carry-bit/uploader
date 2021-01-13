import * as err from './Errors/Errors.en';
import * as C from './Constant';

// global variables
export let _optionsTemp;

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
    else if (_options.name === undefined || _options.inputNmae == '') // name not found
        throw Error(err.optionsNameNotFound);
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


    if (_options.rules === undefined) // rules not found
        _options.rules = false;

    if (_options.msg === undefined) // msg not found
        _options.msg = false;

    if (_options.useAlert === undefined || _options.useAlert === false) // useAlert not found
        _options.useAlert = false;
    else
        _options.useAlert = true;

    if (_options.final === undefined) // final not found
        _options.final = false;

    _optionsTemp = _options;

    return _options;
}

// validate selected file
export function fileValidator(_file) {
    if (_file === undefined) // do nothing if user did not choose any file
        return {
            error: true,
            useAlert: _optionsTemp.useAlert,
            message: (_optionsTemp.msg && _optionsTemp.msg.noFileSelected) ? _optionsTemp.msg.noFileSelected : err.noFileSelected
        };

    if (!_optionsTemp.rules)
        return {
            error: false,
            useAlert: false,
            target: _optionsTemp.target
        };

    if (_optionsTemp.rules.size !== undefined) {
        if (Math.round(_file.size / Math.pow(1024, 2), 3) > _optionsTemp.rules.size.rule) {
            if (_optionsTemp.rules.callback !== undefined)
                _optionsTemp.rules.callback(_optionsTemp.rules.size.message);

            return {
                error: true,
                useAlert: _optionsTemp.useAlert,
                message: (_optionsTemp.rules.size.message) ? _optionsTemp.rules.size.message : err.fileSizeNotValid
            };
        }
    }

    if (_optionsTemp.rules.type !== undefined) {
        if (_optionsTemp.rules.type.rule.indexOf(_file.type) === -1) {
            if (_optionsTemp.rules.callback !== undefined)
                _optionsTemp.rules.callback(_optionsTemp.rules.type.message);

            return {
                error: true,
                useAlert: _optionsTemp.useAlert,
                message: (_optionsTemp.rules.type.message) ? _optionsTemp.rules.type.message : err.fileTypeNotValid
            };
        }
    }

    return {
        error: false,
        useAlert: false,
        target: _optionsTemp.target
    };
}


// Handle when upload was success nor failur
export function successUpload(_response) {
    if (_optionsTemp.success === false) {
        if (_optionsTemp.useAlert)
            alert(C.defaultSuccessUploadMessage)
    } else {
        if (_optionsTemp.success.callback === false) {
            console.log(_optionsTemp.useAlert)
            if (_optionsTemp.useAlert)
                alert(_optionsTemp.success.message)
        } else {
            _optionsTemp.success.callback(_response, _optionsTemp.success.message);
        }
    }
}

export function failurUpload(_response = null) {
    if (_optionsTemp.failur === false) {
        if (_optionsTemp.useAlert)
            alert(C.defaultFailurUploadMessage)
    } else {
        if (_optionsTemp.failur.callback === false) {
            if (_optionsTemp.useAlert)
                alert(_optionsTemp.failur.message)
        } else {
            _optionsTemp.failur.callback(_response, _optionsTemp.failur.message);
        }
    }
}

export function finalUpload() {
    if (_optionsTemp.final)
        _optionsTemp.final()
}