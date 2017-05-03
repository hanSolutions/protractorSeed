exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/SuperCalculatorSpecs.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
