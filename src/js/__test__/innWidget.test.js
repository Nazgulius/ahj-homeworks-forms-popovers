import { innWidget } from '../lesson/Widget';


test('widget', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new innWidget(container);

  widget.bindToDom();

  expect(container.innerHTML).toEqual(innWidget.markup);
});