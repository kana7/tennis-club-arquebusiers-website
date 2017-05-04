import $ from 'jquery';
var Flickity = require('flickity');

export class Slider {
  constructor(selector) {
    this.$element = $(selector);
    this.slider = new Flickity(this.$element[0], {
      // options
      cellAlign: 'center',
      wrapAround: true,
      contain: true,
      pageDots: false,
      imagesLoaded: true
    });
  }
}
