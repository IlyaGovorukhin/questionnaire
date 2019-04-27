<template>
  <div>
    <div>
      <div class="express-poll__title">
        <div>
          <label>Название</label>
        </div>
        <p class="express-poll__field">
          <input v-model="name.value" />
        </p>

      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <div>
          <label>Дополнительный текст</label>
        </div>
        <p class="express-poll__field">
          <input v-model="additionalText.value" />
        </p>
      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <div>Текст, выводимый под каждой страницей опроса</div>
        <p class="express-poll__field">
          <input v-model="textForUnderEachPage.value" />
        </p>
      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <label>Текст благодарности</label>
        <p class="express-poll__field">
          <input v-model="textForGratitude.value" />
        </p>
      </div>
    </div>

    <div>
      <div class="express-poll__title">
        <div>Текст про "Опрос уже завершён"?</div>
        <p class="express-poll__field">
          <input v-model="textForPollCompleted.value" />
        </p>
      </div>
    </div>


  </div>
</template>

<script>

//import tinymce from 'tinymce/tinymce'; // eslint-disable-line no-unused-vars
//import 'tinymce/themes/modern/theme';
//import 'tinymce/skins/lightgray/content.min.css';
//import 'tinymce/skins/lightgray/skin.min.css';
//import 'tinymce/plugins/hr/plugin';
//import 'tinymce/plugins/image/plugin';
//import 'tinymce/plugins/imagetools/plugin';
//import 'tinymce/plugins/link/plugin';
//import 'tinymce/plugins/textcolor/plugin';
//import 'tinymce/plugins/colorpicker/plugin';
//import 'tinymce/plugins/lists/plugin';
//import 'tinymce/plugins/advlist/plugin';
//import 'tinymce/plugins/paste/plugin';

import globalDataForForm from './globalDataForForm.js';


export default {
  name: 'FirstPartForm',
  props: {
    
  },
  data() {
    return {
      name: globalDataForForm.name,
      additionalText: globalDataForForm.additionalText,
      textForUnderEachPage: globalDataForForm.textForUnderEachPage,
      textForGratitude: globalDataForForm.textForGratitude,
      textForPollCompleted: globalDataForForm.textForPollCompleted,
      limitRegistation: globalDataForForm.limitRegistation,
      textForCloseRegistration: globalDataForForm.textForCloseRegistration,
      type:  globalDataForForm.type,
      autonumber: globalDataForForm.autonumber,
    };
  },
  methods: {

  }
};

</script>

<style lang='css' scoped>

</style>