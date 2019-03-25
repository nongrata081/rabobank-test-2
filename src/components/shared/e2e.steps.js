
const { expect } = require('chai');
const { Given, Then } = require('cucumber');

Given('a valid postcode value', function() {
  $('.postcode-input').waitForVisible();
  $('.postcode-input').setValue('1234ab');
  return;
});

Then('class .valid is attached to postcode input container', function() {
  return expect($('.postcode-input-container').getAttribute('class')).includes('valid');
});


Given('a valid money amount value', function() {
  $('.money-input').waitForVisible();
  $('.money-input').setValue('123');
  $('body').click();
  return;
});

Then('class .valid is attached to money input container', function() {
  return expect($('.money-input-container').getAttribute('class')).includes('valid');
});

Given('a valid license plate value', function() {
  $('#license-input').waitForVisible();
  $('#license-input').setValue('XX99XX');
  return;
});

Then('class .valid is attached to license plate input container', function() {
  return expect($('.license-plate-input-container').getAttribute('class')).includes('valid');
});

Given('a valid input of multiple input component', function() {

  $('.postcode-input').waitForVisible();
  $('#license-input').waitForVisible();
  $('.money-input').waitForVisible();

  $('.postcode-input').setValue('1234ab');
  $('#license-input').setValue('XX99XX');
  $('.money-input').setValue('123');
  $('body').click();
  return;
});

Then('remove attribute disabled from submit button', function() {
  return expect($('.form-submit').getAttribute('disabled')).equal(null);
});
