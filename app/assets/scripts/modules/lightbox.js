import $ from 'jquery';

export class Lightbox {
  /*
  Ce dont j'ai besoin:
  Référence au body.
  La référence à ma liste d'images.
  Un attribut commun pour récuperer les images d'un même groupe.
  Un tableau avec le source de mes images.
  */
  constructor($element) {
    this.$body = $('body');
    this.$thumbnail = $element;
    this.$imgLinks = $element.find('a');
    This.$imgHrefArray = [];
    this.events();
  }
  events() {}

}
