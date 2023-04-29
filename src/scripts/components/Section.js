export default class Section {
    constructor({ renderer }, selector) {
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }

    rendererItems(items) {
        items.forEach((item) => {
            return this._renderer(item);
        })
    }

    addItem = (item) => {
        // console.log(this._selector);
        this._selector.prepend(item);
    }
}