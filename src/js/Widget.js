export default class Widget {
  constructor () {
    this._widgets = [];
  }
  
  showWidget(message, element) {
    const widgetElement = document.createElement('div');

    widgetElement.classList.add('popover');
    widgetElement.textContent = message;

    const id = performance.now(); // время от открытия страницы

    this._widgets.push({
      id, 
      element: widgetElement
    });

    document.body.appendChild(widgetElement);

    console.log(element.getBoundingClientRect());

    const {right, top, bottom, left } = element.getBoundingClientRect();

  //  widgetElement.style.left = right + 5 + 'px';
  //  widgetElement.style.top = top + element.offsetHeight / 2 - widgetElement.offsetHeight / 2 + 'px';

   // widgetElement.style.top = bottom + 5 + 'px';
    widgetElement.style.left = left - element.offsetHeight / 2 - widgetElement.offsetHeight / 2 + 'px';
    widgetElement.style.bottom = top + 'px';

    return id;
  }

  removeWidget(id) {
    const widget = this._widgets.find(t => { t.id === id });

    widget.element.remove();

    this._widgets = this._widgets.filter(t => { t.id !== id });
  }
}