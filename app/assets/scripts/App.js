import { Dropdown } from './modules/Dropdown';
import { Slider } from './modules/Slider';
import { ChrLimits } from './modules/ChrLimits';

import $ from 'jquery';

$(function(){
  $('.primary-nav .primary-nav__onglet').each(function(){
    new Dropdown($(this));
  });
  $('.slider, .slider-main').each(function(){
    new Slider($(this));
  });
  $('[data-chrLimit]').each(function(){
    new ChrLimits($(this));
  });
});
