import driverGlobalDataForForm from './driverGlobalDataForForm.js';

export default {
  // ===== form part 1 =====
  name: {
    value: '',
  },
  additionalText: {
    value: '',
  },
  textForUnderEachPage: {
    value: '',
  },
  textForGratitude: {
    value: '',
  },
  textForPollCompleted: {
    value: '',
  },
  limitRegistation: {
    value: null, // default unlimited
  },
  textForCloseRegistration: {
    value: '',
  },
  autonumber: {
    value: true,
  },
  // ===== end =====


  // ===== form part 2=====
  passOnlyOne: {
    value: false,
  },
  textConsentProccessPersonalData: {
    value: '',
  },
  notifyAfterAnswer: {
    value: false, // default, no
  },
  textForNotifyAfterAnswer: {
    value: '',
  },
  // ===== end =====

  // ===== form part 3 =====
  linkForTestShowPoll: {
    value: ''
  },
  gotoUrlAfterSave: {
    value: ''
  },
  beginAndEndTime: {
    list: [ new Date(), new Date().setDate(new Date().getDate() + 7) ] // next 7 days
  },
  scheme: {
    value: 'onePage', // default: 'onePage' –– 'Все вопросы на одной странице', 'tableOnOnePage' –– 'Таблица на одной странице'
  },
  hideResults: {
    value: true, // default, yes
  },
  language: {
    value: '20591', // default, Russia
  },
  sendReportToEmail: {
    value: '',
  },
  captcha: {
    value: false, // default, no
  },
  status: {
    value: '0', // default, disable
  },
  // ===== end =====


  // ===== blocksQuestions =====
  blocksQuestions: {
    list: [ driverGlobalDataForForm.createNewQuestionBlock() ],
    // list: [ ],
  },
  errors: {
    list: [],
  },
  // ===== end =====
};