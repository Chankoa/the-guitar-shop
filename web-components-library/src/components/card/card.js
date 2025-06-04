class Card {
    constructor(title, description, imageUrl) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.element = this.createCard();
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = this.description;

        card.appendChild(img);
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);

        return card;
    }

    appendTo(container) {
        container.appendChild(this.element);
    }
}

export default Card;