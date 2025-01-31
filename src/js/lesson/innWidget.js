import { isValidInn } from "./validators";

export class InnWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;

        this.onSubmit = this.onSubmit.bind(this);
    }

    static get markup() {
        return `
        <form class="innogrn-form-widget">
            <div class="control">
                <label for="innogrn-input">Введите ИНН/ОГРН</label>
                <input type="text" id="innogrn-input" class="input">
            </div>
            <button class="submit">Далее</button>
        </form>
        `;
    }

    static get submitSelector() {
        return '.submit';
    }

    static get inputSelector() {
        return '.input';
    }

    static get selector() {
        return '.innogrn-form-widget';
    }

    bindToDOM() {
        this.parentEl.innerHTML = InnWidget.markup;

        this.element = this.parentEl.querySelector(InnWidget.selector);
        this.submit = this.element.querySelector(InnWidget.submitSelector);
        this.input = this.element.querySelector(InnWidget.inputSelector);

        this.element.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;

        if(isValidInn(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        }
    }
}