<template>
  <div>
    <h1 style="width:10% ;margin:0 auto;text-align:center">
      Название
    </h1>
      <FirstPartForm></FirstPartForm>
      <ShowResultAfterCreatePoll type-action="create"></ShowResultAfterCreatePoll>
      <div style="height:300px"></div>

  </div>
</template>

<script>

  import FirstPartForm from './FirstPartForm.vue';



  export default {
    name: 'CreateExpressPoll',
    components: {
      FirstPartForm

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


</style>