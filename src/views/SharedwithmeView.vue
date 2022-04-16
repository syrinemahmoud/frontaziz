<template>
  <v-data-table
    :headers="headers"
   
   
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Shared with me</v-toolbar-title>
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
        
          <v-card>
            

           
          </v-card>
        </v-dialog>
     
      </v-toolbar>
    </template>


   
    
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      
      
      headers: [
        {
          text: 'Data number',
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

        
      ],
      
     
    }),

  
  }
</script>