import globalDataForForm from './globalDataForForm.js';

const driverGlobalDataForForm = {};
export default driverGlobalDataForForm;


/**
 * set: set in store
 * @param {object} data
 */
driverGlobalDataForForm.set = function (data) {
  Object.keys(data).forEach(key => {
    if (!globalDataForForm[key]) {
      return;
    } else if ('value' in globalDataForForm[key]) {
      globalDataForForm[key].value = data[key].value;
    } else if ('list' in globalDataForForm[key]) {
      globalDataForForm[key].list = data[key].list;
    }
  });
};


driverGlobalDataForForm.createNewQuestionBlock = function () {
  return {
    id: null,
    name: '',
    description: '',
    questions: [ driverGlobalDataForForm.createNewQuestion() ]
  };
};

driverGlobalDataForForm.createNewQuestion = function () {
  return {
    id: null,
    name: '',
    nameForDownload: '',
    code: '', // using for replace %%ANSWER_QUESSTION%% in textForNotifyAfterAnswer to answer user
    description: '',

    answerMandatory: false,
    formatAnswer: '', // input || textarea || radioButtons || checkboxes || select || specialAnswer

    limitForMultipleOptions: '',
    // style: '0', // while outdate
    freeAnswerPossible: 'no',
    limitSymbolForText: '',
    textExplanatoryForFreeAnswer: '',
    typeSpecialAnswer: 'no', // no || phone || date || year || file; default, no;
    answerChoice: [], // [{ index: number, value: string }]
  };
};

driverGlobalDataForForm.createNewAnswer = function ({ type = '', label = '', value = '' }) {
  return {
    type, // must be '' || 'freeAnswerInput' || 'freeAnswerTextArea'
    label,
    value
  };
};




driverGlobalDataForForm.cleanIfChangeFormatAnswer = function (question) {
  question.limitForMultipleOptions = '';

  question.freeAnswerPossible = 'no';
  question.limitSymbolForText = '';
  question.textExplanatoryForFreeAnswer = '';

  question.answerChoice = [];
};