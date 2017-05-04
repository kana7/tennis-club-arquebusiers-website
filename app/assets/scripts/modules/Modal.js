import $ from 'jquery';

class Modal {
  constructor() {
    this.currentModalId;
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close, .closeModal");
    this.events();
  }
  events() {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  openModal(event) {
    this.currentModalId = $(event.target).closest('.open-modal').attr('data-modal-id') || null;
    if(this.currentModalId){
      this.modal.filter('#'+this.currentModalId).addClass("modal--is-visible");
    }else{
      this.modal.filter(':first').addClass("modal--is-visible");
    }
    return false;
  }
  closeModal() {
    if(this.currentModalId){
      this.modal.filter('#'+this.currentModalId).removeClass("modal--is-visible");
    }else{
      this.modal.filter(':first').removeClass("modal--is-visible");
    }
    this.currentModalId = null;
  }
  keyPressHandler(e){
    if (e.keyCode == "27") {
      this.closeModal();
    }
  }
}

export default Modal;
