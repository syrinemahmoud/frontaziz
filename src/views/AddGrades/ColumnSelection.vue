<template>
  <div>
    ColumnSelection {{ fileId }}

    <v-card>
      Select ID Column
      <v-list dense>
        <v-list-item-group v-model="selectedIdColumn" color="primary">
          <v-list-item v-for="(column, i) in columns" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="column"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <div>
      Select Total Column
      <v-list dense>
        <v-list-item-group v-model="selectedTotalColumn" color="primary">
          <v-list-item v-for="(column, i) in columns" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="column"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    
    <v-btn color="primary" @click="cancel">Previous</v-btn>
    <v-btn color="warning" @click="next">Next</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    fileId: Number,
  },

  data: () => ({
    columns: [],
    selectedIdColumn: undefined,
    selectedTotalColumn: undefined,
  }),

  watch: {
    fileId(to) {
      if (typeof to === "number") {
        // Query the server for the list of columns

        this.columns = ["First Name", "Last Name", "ID", "Lab Grade", "Total"];
      }
    },
  },

  methods: {
      cancel() {
          this.$emit('cancel');
      },

      next() {
          this.$emit('next', {
              idColumn: this.selectedIdColumn,
              totalColumn: this.selectedTotalColumn
          });
      }
  }
};
</script>