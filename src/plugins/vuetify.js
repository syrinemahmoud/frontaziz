import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.lighten4, // #E53935
            secondary: colors.lightBlue.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },
});
