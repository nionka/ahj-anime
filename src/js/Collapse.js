export default class Collapse {
  constructor(container) {
    this.container = container;
    this.btn = this.container.querySelector('.collapse');
  }

  init() {
    this.btn.addEventListener('click', (e) => this.showContent(e));
  }

  showContent(e) {
    e.preventDefault();
    this.container.querySelector('.collapse__content-wrapper').classList.toggle('click');
  }
}
