<template>
  <div>
    <div class="express-poll__block">
      <div class="express-poll__title">
        <label>месяц день год родения</label>
      </div>
      <div class="express-poll__field">
        <input v-model="birthday.value" placeholder="##.##.##" v-mask="'##.##.##'" />
      </div>
    </div>


 <div v-if="!image">
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" width="250px" height="250px" />
    <button @click="removeImage">удалить фото</button>
  </div>
<router-link :to="{ name: IsActive }" >
  <Button @click="PollSec" >
  Далее
   </Button> 
 </router-link>
 <router-link :to="{ name: 'FirstPartForm' }">
    <Button >
  Назад
   </Button> 
 </router-link>

 <ul v-for="element in errorsList">
          <li style="color: red">{{ element }}</li>
        </ul>
   
  </div>

  </div>
</template>

<script>

import globalDataForForm from './globalDataForForm.js';
export default {
  name: 'SecondPartForm',
  data() {
    return { 
    errorsList: [],
    IsActive: 'ShowResultAfterCreatePoll',
    birthday: globalDataForForm.birthday,
    image: ''
    
    };
  },
  beforeMount() {

  },
  methods: {
    PollSec(){
      globalDataForForm.errors.list = [];
     let valid = this.validationPollsec(globalDataForForm);
     console.log(valid)
    if(valid){
      this.IsActive = 'ShowResultAfterCreatePoll';
    } else{
       this.errorsList = [];
       this.errorsList =  globalDataForForm.errors.list;
       this.IsActive = false;
    }
  
    },

    
   validationPollsec(globalDataForForm){   
   let valid = true;  
      Object.keys(globalDataForForm).forEach(key => {
        if (key == 'birthday' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите дату рождения');
        valid = false;
  }
   if (key == 'birthday' && globalDataForForm[key].value){
      const date1 = new Date(),
            date2 = new Date(globalDataForForm[key].value);
        let colculat= date1 - date2,
         milliseconds = colculat,
         seconds = milliseconds / 1000,
         minutes = seconds / 60,
         hours = minutes / 60,
         days = hours / 24;
         if(Math.ceil(days) < 6570){
          globalDataForForm.errors.list.push('только 18+');
          valid = false;
         } else {valid =true}
  }
   })
   return valid;
  },
   onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
};

</script>

<style lang='css' scoped>

</style>