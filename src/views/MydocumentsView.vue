<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My documents</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
        <!-- new document button -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="secondary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Document
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- edit item champs -->
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Data "
                      label="Data"
                    ></v-text-field>
                  </v-col>

                 
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  
                    <v-text-field
                      v-model="editedItem.TLP"
                      label="TLP"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     
      </v-toolbar>
    </template>

    <!-- eslint-disable-next-line -->
    <!-- edit/delete -->
  <!-- eslint-disable-next-line -->
    <template v-slot:item.actions="{item}">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Data ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
         {
          text: 'TLP',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Data type',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        Data:'1' ,
        TLP: 'RED',
       
      },
      defaultItem: {
        Ddata:'1' ,
        TLP: 'RED',
       
       
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            Data:' 1 ',
            TLP: 'RED' 
          },
          {
            Data:' 1 ',
            TLP: 'WHITE' 
          },
          {
            Data:' 2 ',
            TLP: 'RED' 
          }
      ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>