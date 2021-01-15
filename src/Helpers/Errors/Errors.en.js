// options validate errors in english
export const optionsObjectNotFound = 'You should pass an option object to the init function.';
export const optionsElementNotFound = 'You should pass (el) property as options object to the init function or it should not be empty.\nNOTE->el is element\'s css selector that upload-bar will locate there.';
export const optionsTargetNotFound = 'You should pass (target) property as options object to the init function or it should not be empty.\nNOTE->target is the url that file will upload there.';
export const optionsTextNotFound = 'You should pass (text) property as options object to the init function or it should not be empty.\nNOTE->text is the upload-box default innerText.';
export const optionsNameNotFound = 'You Should pass (name) property as options object to the init function or it should not be empty.\nNOTE->name is name attribute of file input that you can access it in the serverside.';
export const optionsFailResponseNotFound = 'You should pass (failResponse) property as options object to the init function or it should not be empty.\nNOTE->not be empty. failResponse is the value that returns from the server when file-upload fails.';
export const optionsSuccessMessageNotFound = 'You should pass (message) property as options.success object to the init function or it should not be empty.\nNOTE->message is the value that will be replace with upload-box text when upload is successful.';
export const optionsFailurMessageNotFound = 'You should pass (message) property as options.failur object to the init function or it should not be empty.\nNOTE->message is the value that will be replace with upload-box text when upload is failur.';

// UElement errors
export const elementTagNameFalse = 'UElement->Tag name is not valid.';
export const elementNotFound = 'UElement->Element is undefined.';
export const percentValueNotValid = 'PercentBar->Percent value is invalid. it should not be less than zero.';

// DOMControlle errors
export const rootElementNotFound = _rootElementSelector => `Can not find any element with '${_rootElementSelector}' selector.`;

// file validate errors
export const noFileSelected = 'Please choose a file to upload';
export const fileSizeNotValid = 'File size is invalid';
export const fileTypeNotValid = 'File type is invalid';

// NavigatorBar errors
export const navigatorValueNotValid = "Passed value to the navigator bar is invalid."