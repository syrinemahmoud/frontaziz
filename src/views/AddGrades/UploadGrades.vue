<template>
  <div>
    <v-form>
      <v-file-input truncate-length="15"></v-file-input>

      <v-btn color="primary" @click="upload">Next</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    upload() {
      // Upload file

      const fileId = 5500

      this.$emit('completed', fileId)
    }
  }
}
</script>