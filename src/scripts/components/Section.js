export default class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    rendererItems(items) {
        items.forEach((item) => {
            return this._renderer(item);
        })
    }

    addItem = (item) => {
        this._container.prepend(item);
    }
}