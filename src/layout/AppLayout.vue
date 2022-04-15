<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-model="drawer" app>
      <v-list-item>
        <v-expansion-panel>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Transcript generator
          </v-list-item-title>
        </v-list-item-content>
        </v-expansion-panel>
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
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Transcript generator</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn icon value="login">
          <span> sign in</span>
        </v-btn>
      </router-link>
      <v-btn icon>
        <v-icon>fas fa-lock</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

 <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    items: [
      { title: "Courses", icon: "mdi-view-dashboard", to: "/courses" },
      { title: "Term", icon: "mdi-help-box", to: "/terms" },
      { title: "Students", icon: "mdi-help-box", to: "/student" },
      { title: "Users", icon: "mdi-help-box", to: "/user" },
      { title: "Transcript", icon: "mdi-help-box", to: "/transcript" },
      { title: "RequestTranscript", icon: "mdi-help-box", to: "/requesttranscript" }
      ,
    ],
  }),
};
</script>