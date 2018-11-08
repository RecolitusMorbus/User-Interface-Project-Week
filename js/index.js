// JS goes here

// Navigation Menu
const navButtons = document.querySelector('.hidden-menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerOpen = document.querySelector('#open-hamburger');
const hamburgerClose = document.querySelector('#closed-hamburger');

hamburger.addEventListener('click', function() {
    navButtons.classList.toggle('hidden');
    hamburgerOpen.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
})

// Services Tab Selector
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    };

    select() {
        const links = document.querySelectorAll('.tab-link');
        links.forEach(link => link.classList.remove('tab-link-selected'));
        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tab-item');
        Array.from(items).forEach(items => items.classList.remove('tab-item-selected'));
        this.element.classList.add('tab-item-selected');
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(element => new TabLink(element));
links[0].select();