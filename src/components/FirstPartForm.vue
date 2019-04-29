<template>
  <div>
    <div>
      <div class="express-poll__title">
        <div>
          <label>Фамилия</label>
        </div>
        <p class="express-poll__field">
          <input v-model="surname.value" />
        </p>

      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <div>
          <label>Имя</label>
        </div>
        <p class="express-poll__field">
          <input v-model="name.value" />
        </p>
      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
       <label>Отчество</label>
        <p class="express-poll__field">
          <input v-model="patronymic.value" />
        </p>
      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <label>мобильный телефон</label>
        <p class="express-poll__field">
          <input @keypress="validTel($event)" placeholder="+7(###)###-##-##" v-mask="'+7(###)###-##-##'" v-model="phonMob.value" />
        </p>
      </div>
    </div>

    <div class="express-poll__block">
      <div class="express-poll__title">
        <label>email</label>
        <p class="express-poll__field">
          <input v-model="email.value" />
        </p>
      </div>
    </div>
<router-link :to="{ name: IsActive }" >
  <Button @click="PollFist" >
  Далее
   </Button> 
 </router-link>
 <ul v-for="element in errorsList">
          <li style="color: red">{{ element }}</li>
        </ul>
   
  </div>
</template>

<script>


import globalDataForForm from './globalDataForForm.js';

export default {
  name: 'FirstPartForm',
  props: {
    
  },
  data() {
    return {
      errorsList: [],
      IsActive: 'SecondPartForm',
      name: globalDataForForm.name,
      surname: globalDataForForm.surname,
      patronymic: globalDataForForm.patronymic,
      phonMob: globalDataForForm.phonMob,
      email: globalDataForForm.email,
    };
  },
  methods: {
    PollFist(){
      globalDataForForm.errors.list = [];
     let valid = this.validationPollFist(globalDataForForm);
    if(valid){
      this.IsActive = 'SecondPartForm';
    } else{
       this.errorsList = [];
       this.errorsList =  globalDataForForm.errors.list;
       this.IsActive = false;
    }
  
    },
    validTel(evt){
      
   const regex = new RegExp("^[0-9]+$");
      const key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    },
    
   validationPollFist(globalDataForForm){   
   let valid = true;  
      Object.keys(globalDataForForm).forEach(key => {
        if (key == 'name' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите ваше имя');
        valid = false;
  }
   if (key == 'surname' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите вашу фамилию');
        valid = false;
  }
   if (key == 'patronymic' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите ваше отчество');
        valid = false;
  }
  
  if (key == 'phonMob' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите ваше мобильный телефон');
        valid = false;
  }
   if (key == 'phonMob' && globalDataForForm[key].value.length < 16){
        globalDataForForm.errors.list.push('В вашем номере не хватает цифр');
        valid = false;

  }
     if (key == 'email' && !globalDataForForm[key].value){
        globalDataForForm.errors.list.push('Введите email');
        valid = false;
  }
   if (key == 'email' && globalDataForForm[key].value){
       const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!re.test(String(globalDataForForm[key].value).toLowerCase())){
        globalDataForForm.errors.list.push('Введите email корректно');
         valid = false;
       }
           
  }
   })
   return valid;
  }
}
};

</script>

<style lang='css' scoped>
</style>