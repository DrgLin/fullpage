$(document).ready(function () {

  $(document).on('click', '#btnGoDown', function () {
    $.fn.fullpage.moveSectionDown();
  });





  $('#myContainer').fullpage({
    anchors: ['About', 'Experience', 'skill', 'contact'],
    menu: '#menu',
    dragAndMove: true,
    offsetSections: false,
    slidesNavigation: true,
    scrollOverflow: false

  });


});