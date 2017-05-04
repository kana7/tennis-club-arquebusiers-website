import $ from 'jquery';

/*ES6 MODULE DECLARATION EXEMPLE !DO NOT EDIT!*/
export class Module {
  constructor() {
    this.variable;
    this.events();
  }
  events() {
    this.variable.click(this.open.bind(this));
  }
  open(event) {
  }
}
