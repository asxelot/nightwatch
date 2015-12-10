var start = new Date();
var end = new Date();
start.setDate(start.getDate() + 1);
end.setDate(end.getDate() + 2);

var competitionName = 'Competition' + Date.now();

module.exports = {
  url: 'http://admin-dev.compomatic.com/',
  email: '',
  password: '',
  t: 1000,

  competitionName,
  startDay: start.getDate(),
  endDay: end.getDate(),

  submit: 'button[type=submit]',
  companyEnter: '.company-panel-footer.collapse.in .btn-success',
  competitionEdit: '.draft-competitions .competition-footer.collapse.in a.btn-primary',
  newCompetitionTitle: '.draft-competitions .competition .title'
}