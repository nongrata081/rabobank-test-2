
const { expect } = require('chai');
const { Given, Then, When, setWorldConstructor } = require('cucumber');

Given('a running stencil app', function() {
	return browser.url(`/`);
});

Then('I see the {string} header', function(title) {
	return expect($('h1').getText()).to.equal(title);
});