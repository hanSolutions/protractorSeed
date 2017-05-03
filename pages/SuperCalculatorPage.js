var SuperCalculatorPage = function() {

  this.firstNumField = element(by.model('first'));
  this.secondNumField = element(by.model('second'));
  this.goButton = element(by.id('gobutton'));
  this.latestResult = element(by.binding('latest'));
  this.history = element.all(by.repeater('result in memory'));

  this.addTwoNumbers = function(a, b) {
    this.firstNumField.sendKeys(a);
    this.secondNumField.sendKeys(b);
    this.goButton.click();
  };

}

module.exports = new SuperCalculatorPage();
