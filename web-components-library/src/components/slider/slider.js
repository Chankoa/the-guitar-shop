class Slider {
    constructor(images, container) {
        this.images = images;
        this.container = container;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.render();
        this.startAutoSlide();
    }

    render() {
        this.container.innerHTML = `
            <div class="slider">
                <div class="slides">
                    ${this.images.map((img, index) => `
                        <div class="slide ${index === this.currentIndex ? 'active' : ''}">
                            <img src="${img}" alt="Slide ${index + 1}">
                        </div>
                    `).join('')}
                </div>
                <button class="prev" onclick="this.slider.prev()">&#10094;</button>
                <button class="next" onclick="this.slider.next()">&#10095;</button>
            </div>
        `;
        this.slider = this.container.querySelector('.slider');
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlides();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateSlides();
    }

    updateSlides() {
        const slides = this.container.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoSlide() {
        setInterval(() => this.next(), 3000);
    }
}

export default Slider;