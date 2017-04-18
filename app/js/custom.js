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
  // Cloning for Orthodontist modal
  var $od_problem_list = $('#collapse_problem_list .panel-body').clone();
  var $od_treatment_objectives = $('#collapse_treatment_objectives .panel-body').clone();
  var $od_treatment_options = $('#collapse_treatment_options .panel-body').clone();
  var $od_limitation = $('#collapse_limitation .panel-body').clone();
  var $od_treatment_plan = $('#collapse_treatment_plan .panel-body').clone();
  $('#collapse_pl .panel-body').html($od_problem_list);
  $('#collapse_tob .panel-body').html($od_treatment_objectives);
  $('#collapse_top .panel-body').html($od_treatment_options);
  $('#collapse_lim .panel-body').html($od_limitation);
  $('#collapse_tp .panel-body').html($od_treatment_plan);
  // Cloning for Dentist modal
  var $yo_problem_list = $('#collapse_your_problem_list .panel-body').clone();
  var $yo_treatment_objectives = $('#collapse_your_treatment_objectives .panel-body').clone();
  var $yo_treatment_options = $('#collapse_your_treatment_options .panel-body').clone();
  var $yo_limitation = $('#collapse_your_limitation .panel-body').clone();
  var $yo_treatment_plan = $('#collapse_your_treatment_plan .panel-body').clone();
  $('#collapse_yto .panel-body').html($yo_problem_list);
  $('#collapse_ytob .panel-body').html($yo_treatment_objectives);
  $('#collapse_ytop .panel-body').html($yo_treatment_options);
  $('#collapse_yl .panel-body').html($yo_limitation);
  $('#collapse_ytp .panel-body').html($yo_treatment_plan);

  // Cloning Registration fields for Dentist
  var $d_sc_zero = $(".case .first_column .form-group").clone();
  var $d_sc_first = $(".sc_first .form-group").clone();
  var $d_sc_second = $(".sc_second .form-group").clone();
  var $d_sc_third = $(".sc_third .form-group").clone();
  var $d_sc_fourth = $(".sc_fourth .form-group").clone();
  var $d_sc_fifth = $(".sc_fifth .form-group").clone();
  var $d_sc_sixth = $(".sc_sixth .form-group").clone();
  $("#modal_dentist_registration .modal-body").append($d_sc_zero);
  $("#modal_dentist_registration .modal-body").append($d_sc_first);
  $("#modal_dentist_registration .modal-body").find(".register_fields").remove();
  $("#modal_dentist_registration .modal-body").append($d_sc_second);
  $("#modal_dentist_registration .modal-body").append($d_sc_third);
  $("#modal_dentist_registration .modal-body").append($d_sc_fourth);
  $("#modal_dentist_registration .modal-body").append($d_sc_fifth);
  $("#modal_dentist_registration .modal-body").append($d_sc_sixth);
  // Cloning Registration fields for Orthodontist
  var $od_zero = $(".case-orthodontist .patient_credentials h1").clone();
  $("#modal_orthodontist_registration .modal-body").append($od_zero);
  var $od_first = $(".case-orthodontist .patient_photo").clone();
  $("#modal_orthodontist_registration .modal-body").append($od_first);
  var $od_second = $(".case-orthodontist .patient_summary .form-group").clone();
  $("#modal_orthodontist_registration .modal-body").append($od_second);

  // Expand/Collapse panels
  $(".toggle_od_notes .expand_all").click(function(){
    $('#accordion_orthodontist .panel-collapse').collapse('show');
  });
  $(".toggle_od_notes .collapse_all").click(function(){
    $('#accordion_orthodontist .panel-collapse.in').collapse('hide');
  });
  $(".toggle_yo_notes .expand_all").click(function(){
    $('#accordion_user .panel-collapse').collapse('show');
  });
  $(".toggle_yo_notes .collapse_all").click(function(){
    $('#accordion_user .panel-collapse.in').collapse('hide');
  });
  // Modals
  $(".modal_toggle_od_notes .expand_all").click(function(){
    $('#modal_accordion_orthodontist .panel-collapse').collapse('show');
  });
  $(".modal_toggle_od_notes .collapse_all").click(function(){
    $('#modal_accordion_orthodontist .panel-collapse.in').collapse('hide');
  });
  $(".modal_toggle_yo_notes .expand_all").click(function(){
    $('#modal_accordion_user .panel-collapse').collapse('show');
  });
  $(".modal_toggle_yo_notes .collapse_all").click(function(){
    $('#modal_accordion_user .panel-collapse.in').collapse('hide');
  });

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
  var patientNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
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
    name: 'patientNames',
    source: substringMatcher(patientNames)
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

  // 4. Autogrow Textareas
  $('.auto_grow').autogrow({vertical: true, horizontal: false, flickering: false});

  // 5. Popovers
  $('.modal_popover').popover({
    placement: 'top'
  });

  // 6. Dismiss Upload modal below 768
  if($(window).width() < 768) {
    $('#upload_files').modal('hide');
	}
  $(window).on("load resize", function() {
    if($(window).width() < 768) {
      $('#upload_files').modal('hide');
    }
  });

  // 7. Nav tabs to Select on Case page
  $('#media_type_select').on('change', function (e) {
    $('.media_tab li a').eq($(this).val()).tab('show');
  });

  // 8. Crop Image in Edit Media Modal window
  $('.image-editor').cropit();
  // Handle rotation
  $('.rotate-cw').click(function() {
    $(this).closest('.image-editor').cropit('rotateCW');
  });
  $('.rotate-ccw').click(function() {
    $(this).closest('.image-editor').cropit('rotateCCW');
  });

  // 9. Use Hash to link to Active tab
  var hash = document.location.hash;
  if (hash) {
    $('.parent-tab a[href='+hash+']').tab('show');
  }
  // Change hash for page-reload
  $('.parent-tab a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
  });

});
