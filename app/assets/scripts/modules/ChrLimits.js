/* Limit a paragraph to 100 characters and add an ellipsis plus a span element containing read more */
export class ChrLimits {
  constructor($element) {
    this.paragraph = $element;
    this.limitChr();
    this.events();
  }
  events() {
    this.paragraph.on('change', this.limitChr.bind(this));
  }
  limitChr(event) {
    this.paragraph.html(this.paragraph.text().substring(0, 98) + '... <span>+ Lire plus</span>');
  }
}
