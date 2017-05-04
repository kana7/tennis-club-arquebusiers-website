import $ from 'jquery';

class BottomSlider {
  constructor(element, trigger, index) {
    this.element = element;
    this.trigger = (typeof trigger !== "undefined")?trigger:this.element.children(":first");
    this.content = this.trigger.next();
    this.bindEvents();
    if(index<1){ //open first element
      this.toggleOpen();
    }
  }
  bindEvents(){
    const that = this;
    this.trigger.on('click', this.toggleOpen.bind(that));
  }

  toggleOpen(){
    if (this.content[0].style.maxHeight){
      this.content[0].style.maxHeight = null;
      this.element.removeClass('extend--is-open');
    }
    else {
      this.content[0].style.maxHeight = this.content.prop('scrollHeight') + 'px'
      this.element.addClass('extend--is-open');
    }
  }
}

export default BottomSlider;
