// filepath: /web-components-library/web-components-library/src/components/nav/nav.js
class Nav {
    constructor(links) {
        this.links = links;
        this.navElement = this.createNav();
    }

    createNav() {
        const nav = document.createElement('nav');
        nav.classList.add('nav');

        const ul = document.createElement('ul');
        this.links.forEach(link => {
            const li = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            li.appendChild(anchor);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        return nav;
    }

    attachToDOM(container) {
        container.appendChild(this.navElement);
    }
}

export default Nav;