$(document).ready(function() {

  /*
    Table of content:
    1A. Profile page
    1B. Case Page
    1C. Cases Page
    2. Modal Windows
    3. Lightbox
  */

  // 1A. Profile page
  // Toggle password for Orthodontist
  $('.orthodontist_toggle_password input').click(function() {
    if ($('#orthodontist_set_password').attr('type') == 'password') {
      $('#orthodontist_set_password').attr('type', 'text');
    } else {
      $('#orthodontist_set_password').attr('type', 'password');
    }
  });
  // Toggle password for Dentist
  $('.dentist_toggle_password input').click(function() {
    if ($('#dentist_set_password').attr('type') == 'password') {
      $('#dentist_set_password').attr('type', 'text');
    } else {
      $('#dentist_set_password').attr('type', 'password');
    }
  });

  // 1B. Case page
  // Notes modals for mobile
  var $od_notes = $('.orthodontist_notes').clone(true, true);
  var $yo_notes = $('.your_notes').clone(true, true);
  $('#modal_orthodontist_notes .modal-body').html($od_notes);
  $('#modal_your_notes .modal-body').html($yo_notes);

  // 1C. Cases page
  // Create a Note modals for mobile
  var $create_note = $('.cases .site-widget, .cases-orthodontist .site-widget').clone(true, true);
  $('#modal_create_note .modal-body').html($create_note);
  // Typeahead
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };
  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  $('.cases #input_search, .cases-orthodontist #input_search').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });

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
