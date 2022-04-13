 
 
 <template>
  <v-app id="inspire">
    <v-main>
      <v-card class="mx-auto elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field name="Name" label="Name" type="text"></v-text-field>
            <v-text-field name="Lastname" label="Lastname" type="text"></v-text-field>
            <v-text-field name="Email" label="Email" type="email"></v-text-field>
            <v-text-field name="Date of birth" label="Date of birth" type="date"></v-text-field>
            <v-text-field id="password" name="password" label="Password" type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" to="/">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",
  props: {
    source: String,
  },
};
</script>

<style scoped>

</style>