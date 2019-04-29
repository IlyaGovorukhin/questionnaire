<template>
  <div class="after-send">
    <Button
      type="success"
      @click="action"
    >
      {{ getButtonText() }}
    </Button>
    <p>{{ msgAfterSave }}</p>
    <p>{{ errorsList }}</p>
      <div v-if="successSend">
        <label style="vertical-align:top">
          Ваша анкета :
        </label>
        <ul v-for="element in dataPol">
          <li>{{ element }}</li>
        </ul>
     
      </div>  
    <router-link :to="{ name: 'SecondPartForm' }">Назад</router-link>
  </div>
</template>

<script>

import globalDataForForm from './globalDataForForm.js';

export default {
  name: 'ShowResultAfterCreatePoll',
  components: {

  },
  props: {
    
  },
  data() {
    return {
      msgAfterSave: '',
      successSend: false,
      errorsList: '',
      dataPol: [],
    };
  },
  methods: {
    getButtonText() {
      let text = 'Создать';
      return text;
    },
    action() {
       this._createPoll();
    },
     
    async _createPoll() {
      this.msgAfterSave = '';  
      try {
        Object.keys(globalDataForForm).forEach(key => {
          if (key != 'errors' ){
            console.log(globalDataForForm[key].value)
           this.dataPol.push(globalDataForForm[key].key + ' : ' + globalDataForForm[key].value)
          }
          
        })
        this.successSend = true;
        this.msgAfterSave = 'Анкета создана создан';
      } catch (err) {
          this.msgAfterSave = '* Произошла ошибка';
      
      }
    },

  }
};

</script>

<style lang='css' scoped>
 
</style>