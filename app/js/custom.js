$(document).ready(function() {

  /*
    Table of content:
    1A. Profile page
    1B. Case Page
    2. Modal Windows
    3. Lightbox
  */

  // 1A. Profile page
  // Toggle password
  $('.toggle_password input').click(function() {
    if ($('#set_password').attr('type') == 'password') {
      $('#set_password').attr('type', 'text');
    } else {
      $('#set_password').attr('type', 'password');
    }
  });

  // 1B. Case page
  // Notes modals for mobile
  var $od_notes = $('.orthodontist_notes').clone(true, true);
  var $yo_notes = $('.your_notes').clone(true, true);
  $('#modal_orthodontist_notes .modal-body').html($od_notes);
  $('#modal_your_notes .modal-body').html($yo_notes);

  // 2. Modal Windows
  $('.select-date').datetimepicker({
    defaultDate: '04/04/2017',
    format: 'DD/MM/YYYY',
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-arrow-up',
      down: 'fa fa-arrow-down'
    }
  });

  // 3. Lightbox
  $('.swipebox').swipebox();

});
