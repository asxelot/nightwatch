var v = require('../variables');

module.exports = {
  'Create competition': function(client) {
    client
      .url(v.url)
      .waitForElementVisible('body')
      .setValue('#email', v.email)
      .setValue('#password', v.password)
      .click(v.submit)
      .pause(v.t)

      .click('xpath', '//span[text()="NewCompany for AUTOTESTING"]')
      .waitForElementVisible(v.companyEnter)
      .click(v.companyEnter)
      .pause(v.t)

      .click('a[href="/competitions/create"]')
      .pause(v.t)

      .setValue('#title', v.competitionName)
      .setValue('#startDay', v.startDay)
      .setValue('#endDay', v.endDay)
      .setValue('#gaCode', 'UA-123456')
      .setValue('#ownUrl', v.competitionName)
      .click('.glyphicon-refresh')
      .pause(v.t)
      .click(v.submit)
      .pause(v.t)

      .moveToElement('.draft-competitions', 10, 10)
      .assert.containsText(v.newCompetitionTitle, v.competitionName)
  },

  'Edit competition': function(client) {
    client
      .click(v.newCompetitionTitle)
      .waitForElementVisible(v.competitionEdit)
      .click(v.competitionEdit)
      .pause(v.t)
  },

  after: function(client) {
    //client.end();
  }
}