<template>
 <div>
    <add-grades></add-grades>
 </div>
</template>

<script>
import AddGrades from "./AddGrades"

export default {
  name: "MultiStepForm",

  components: {
    AddGrades
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
       e1: 0,
       checkbox: [],
       isOkay: false,
       screens: [
       'Sağlam',
       'Kırık',
       'Çizik'
    ],
     cases: [
       'Sağlam',
       'Kırık',
       'Çizik'
    ],
       switch1: false,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
