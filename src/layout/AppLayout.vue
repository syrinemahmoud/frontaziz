<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            SAMA PARTNERS
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
   <v-toolbar-side-icon>
            <v-img class="mr-3" src="@/assets/logo.png" height="20px" width="20px"> 
            </v-img>
     </v-toolbar-side-icon>
     
      <v-toolbar-title>SAMA PARTNERS</v-toolbar-title>
      
      
      
      <v-spacer></v-spacer>

 <v-row justify-content="end">
   
    <v-avatar color="primary">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    </v-row>

      <!--
      <router-link to="/login">
        <v-btn icon value="login">
          <span> Sign up</span>
        </v-btn>
      </router-link>-->
  <!--dropdown button--> 

  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Username
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
          <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item >
          <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item >
          <v-list-item-title>Lagout</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-menu>
  </div>

 
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
 
   
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "My documents", icon: "mdi-view-dashboard", to: "/Mydocuments" },
      { title: "Term", icon: "mdi-help-box", to: "/terms" },
      { title: "Students", icon: "mdi-help-box", to: "/student" },
      { title: "Users", icon: "mdi-help-box", to: "/user" },
      { title: "Transcript", icon: "mdi-help-box", to: "/transcript" },
    ],
     
    
  }),
  
  
  }

            
  

</script>