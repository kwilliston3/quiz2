
var firstname = $("#first_name").value;
var lastname  = $("#last_name").value;
var emailname = $("#email_name").value;
var valid = true;
$('#join_list').click(function(e) {
  e.preventDefault();
  if ($("#first_name").val() === '') {
    $('#first_name_error').text('First name is required').css('color', 'red');
    valid = false;
  } else {
    $('#first_name_error').text('');
    valid = true;
  }
  if ($("#last_name").val() === '') {
    $('#last_name_error').text('Last name is required').css('color', 'red');
    valid = false;
  } else {
    $('#last_name_error').text('');
    valid = true;
  }
  if ($("#email_name").val() === '') {
    $('#email_name_error').text('Email is required').css('color', 'red');
    valid = false;
  } else {
    $('#email_name_error').text('');
    valid = true;
  }
  if (valid) {
    $('#email_form').submit();
  }
});
