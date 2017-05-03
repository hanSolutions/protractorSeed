var CommonConstant = require('../constant/CommonConstant');
var SuperCalculatorPage = require('../pages/SuperCalculatorPage');
var JsonDataService = require('../service/JsonDataService');

describe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get(CommonConstant.BASE_URL);
  });

  it('should have a history', function() {
    var input = JsonDataService.getJsonFromFile(CommonConstant.ROOT_DIR
                          + '/resources/json/protractor.json');

    SuperCalculatorPage.addTwoNumbers(input[0]['firstNumber'], input[0]['secondNumber']);
    SuperCalculatorPage.addTwoNumbers(input[1]['firstNumber'], input[1]['secondNumber']);

    expect(SuperCalculatorPage.history.count()).toEqual(2);

    SuperCalculatorPage.addTwoNumbers(input[2]['firstNumber'], input[2]['secondNumber']);

    expect(SuperCalculatorPage.history.count()).toEqual(3);
  });

});
