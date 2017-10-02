var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');


describe('Controls', () => {
  it('should exist', ()=> {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        //checks for the a button with text of Pause
        var $pauseButton = $el.find('button:contains(Pause)');

        expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        //checks for the a button with text of Start
        var $startButton = $el.find('button:contains(Start)');

        expect($startButton.length).toBe(1);
    });
  });
});
