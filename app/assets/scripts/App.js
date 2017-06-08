import {
  Dropdown
} from './modules/Dropdown';
import {
  Slider
} from './modules/Slider';
import {
  ChrLimits
} from './modules/ChrLimits';
import {
  Collapse
} from './modules/Collapse';
import MobileMenu from './modules/MobileMenu';

//import $ from 'jquery';
//import lightGallery from 'lightGallery';

$(function() {
  $('.primary-nav .primary-nav__onglet').each(function() {
    new Dropdown($(this));
  });
  $('.slider, .slider-main:not(.slider-main--static)').each(function() {
    new Slider($(this));
  });
  $('[data-chrLimit]').each(function() {
    new ChrLimits($(this));
  });
  $('[data-collapse]').each(function() {
    new Collapse($(this));
  });
  var mobileMenu = new MobileMenu();
  //$('#lightgallery').lightGallery();

});
