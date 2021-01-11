export default class Feedback {
  constructor(widget) {
    this.widget = widget;
    this.popup = this.widget.querySelector('.feedback');
    this.popupBtn = this.widget.querySelector('.feedback__btn');
  }

  init() {
    this.widget.addEventListener('click', (event) => this.showPopup(event));
  }

  showPopup(e) {
    e.preventDefault();
    if (e.target.classList.contains('feedback__btn') || e.target.classList.contains('exit')) {
      this.popup.classList.toggle('active');
      this.popupBtn.classList.toggle('hidden');
    }
  }
}
