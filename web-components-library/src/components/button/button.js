class Button {
    constructor(text, style = {}, onClick = null) {
        this.text = text;
        this.style = style;
        this.onClick = onClick;
        this.buttonElement = this.createButton();
    }

    createButton() {
        const button = document.createElement('button');
        button.textContent = this.text;
        Object.assign(button.style, this.style);

        if (this.onClick) {
            button.addEventListener('click', this.onClick);
        }

        return button;
    }

    render(parentElement) {
        parentElement.appendChild(this.buttonElement);
    }
}

export default Button;