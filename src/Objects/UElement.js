import * as err from '../Helpers/Errors/Errors.en';

class UElement {
    constructor(_elementTagName) {
        this._elementTagName = _elementTagName;

        this._element = this.createElement();
    }

    createElement() {
        if (this._elementTagName === undefined)
            throw Error(err.elementTagNameFalse);

        const _element = document.createElement(this._elementTagName);
        return _element;
    }

    addClass(_className) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        this._element.classList.add(_className);
    }

    removeClass(_className) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        this._element.classList.remove(_className);
    }

    addAttribute(_attributeName, _attributeValue) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        this._element.setAttribute(_attributeName, _attributeValue);
    }

    removeAttribute(_attributeName) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        this._element.removeAttribute(_attributeName);
    }

    addChild(_childUElement) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);
        
        this._element.appendChild(_childUElement.getElement());
    }

    text(_text) {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        this._element.innerText = _text;
    }

    getElement() {
        if (this._element === undefined)
            throw Error(err.elementNotFound);

        return this._element;
    }
}

export default UElement;