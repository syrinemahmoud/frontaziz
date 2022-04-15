<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        Upload
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">
        Selection
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="submitted">
        Submit
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <UploadGrades @completed="onUploaded" />

        
      </v-stepper-content>

      <v-stepper-content step="2">
        <ColumnSelection :fileId="fileId" @cancel="step = 1" @next="step=3" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <GradeSubmission/>

        <v-btn color="primary" @click="submitted = true">Submission</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import UploadGrades from "./UploadGrades"
import ColumnSelection from "./ColumnSelection"
import GradeSubmission from "./GradeSubmission"

export default {
  name: "AddGrades",

  components: {
      UploadGrades,
      ColumnSelection,
      GradeSubmission
  },

  data: () => ({
    step: 1,
    submitted: false,
    fileId: undefined,
  }),

  methods: {
    onUploaded(fileId) {
      this.fileId = fileId
      this.step = 2
    }
  }
};
</script>