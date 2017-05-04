import $ from 'jquery';

/*
Dropdown.js
--------------------------------------------------------------------------------
Prend un élément jquery parent contenant un bouton (<a> ou <button>) suivi d'une
liste (<ul> ou <ol>).
Ajoute une classe 'is-active' sur le bouton et 'is-open' sur le dropdown.

HTML MARKUP:
<li>
  <a data-menu href="#">Onglet</a>
  <ul>
    <li><a href="/link.html">link</a></li>
  </ul>
</li>
--------------------------------------------------------------------------------
*/
export class Dropdown {
  constructor($element) {
      this.element = $element;
      this.trigger = this.element.find('a[data-menu]');
      this.dropdown = this.trigger.next();
      this.bindEvents();
  }
  bindEvents(){
    this.element.on({
      'mouseenter': this.openDropdown.bind(this),
      'mouseleave': this.closeDropdown.bind(this)
    });
  }
  openDropdown(event){
    event.preventDefault();
    this.trigger.addClass('is-active');
    this.dropdown.addClass('is-open');
  }
  closeDropdown(){
    this.trigger.removeClass('is-active');
    this.dropdown.removeClass('is-open');
  }
}
