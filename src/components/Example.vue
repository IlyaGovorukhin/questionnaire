<template>
  <div>
    <h1 style="margin:0 auto;text-align:center">
      Анкета
    </h1>
      <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'CreateExpressPoll',
    components: {
    
    },
    data() {
    return {

    };
  },
  methods: {
  }
  };

</script>

<style lang='css'>

  .express-poll__title{
    margin-top: 16px;
  }

  .express-poll__field{
    margin-top: 8px;
  }

  .express-poll__block{
    margin-top:24px
  }
  
</style>