<template>
 <div>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" >Test</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="isOkay" >Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        
         <v-text-field
            label="Marka"
          > </v-text-field>
           <v-text-field
            label="Model"
          > </v-text-field>
          <v-text-field
            label="Hafıza"
          > </v-text-field>
          <v-text-field
            label="IMEI"
          > </v-text-field>

          <v-switch
         :label="`Granti Durumu`"
         v-model="switch1"
         ></v-switch>

        <v-select
          :items="screens"
          label="Ekran Durumu"
        ></v-select>

           <v-select
          :items="cases"
          label="Kasa Durumu"
        ></v-select>
         <v-combobox
          v-model="checkbox"
          :items="cases"
          label="Telefon Bileşenleri"
          multiple
          chips
        ></v-combobox>
        
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">

    <v-layout>
      <v-flex sm6 class="pa-2" >
      <v-card  class="elevation-3" >  
         <v-img src="https://picsum.photos/600/800?random" aspect-ratio="1.7"></v-img>
      </v-card>
   
      </v-flex>
       <v-flex  sm6 class="pa-2" >
          <v-card  class="elevation-3" >  
         <v-img src="https://picsum.photos/600/800?random" aspect-ratio="1.7"></v-img>
      </v-card>
       </v-flex>
    </v-layout>
      
        <v-btn   @click="e1 = 1"  color="warning" >Geri Dön</v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Devam Et
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
      <v-alert
      :value="true"
      type="success"
    >
      Cihazınız Başarılı Bir Şekilde Yüklendi.
    </v-alert>
        <v-btn
          color="primary"
          @click="isOkay = true"
        >
          Anasayfa
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
 </div>
</template>

<script>
export default {
  name: "MultiStepForm",
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
