module.exports = {
  url: 'https://www.google.com/advanced_search',
  elements: {
    mainQueryInput: 'input[name="as_q"]',
    languageRegionDropdown: 'div[id="lr_button"]',
    lastUpdateDropdown: 'div[id="as_qdr_button"]',
    submitButton: '.jfk-button[type="submit"]',
  },
  commands: [
    {
      setQuery(value) {
        return this.setValue("@mainQueryInput", value).waitForElementVisible('@mainQueryInput');
      },
      selectFilter(selector, value) {
        return this.click(selector).click(`.goog-menuitem[value="${value}"]`);
      },
      clickSubmitButton() {
        return this.click("@submitButton");
      },
    },
  ],
};
