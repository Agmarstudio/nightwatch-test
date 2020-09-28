module.exports = {
  "@tags": ["google"],
  "Google advanced search: Elon Musk"(browser) {

    const page = browser.page.googleAdvancedSearch();

    const resultsPageQuerySelector =
      "#searchform input[name='q'][value='Elon Musk']";
    const resultsPageLanguageSelector = "[aria-label='Tylko język polski']";
    const resultsPageLastUpdateSelector = "[aria-label=' Ostatni miesiąc']";

    page
      .navigate()
      .setQuery("Elon Musk")
      .selectFilter('@languageRegionDropdown', 'lang_pl')
      .selectFilter('@lastUpdateDropdown', 'm')
      .clickSubmitButton()

    browser  
      .assert.urlContains("as_q=Elon+Musk", "Param: Query is Elon Musk")
      .assert.urlContains("lr=lang_pl", "Param: Language is PL")
      .assert.urlContains("as_qdr=m", "Param: Time period is last month");

    browser.assert.visible(
      resultsPageQuerySelector,
      "UI: Elon Mask is set in the query input"
    );
    browser.assert.containsText(
      resultsPageLanguageSelector,
      "Tylko język polski",
      "UI: Langaue is set to PL"
    );
    browser.assert.containsText(
      resultsPageLastUpdateSelector,
      "Ostatni miesiąc",
      "UI: Last update is set to last month"
    );
  },
};
