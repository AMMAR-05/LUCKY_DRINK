/*global $, alert, console*/

$(function () {

    'use strict';

    
    // Make The Item Center

    $('.slider').each(function () {

    $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);

    });

    //Trigger The Bx Slider

    $('.slider').bxSlider({

        pager: false

    });
    

});