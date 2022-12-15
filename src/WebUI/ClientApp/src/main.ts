import 'vuetify/styles' // Global CSS has to be imported
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './routes/router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})


app.use(vuetify)
app.use(router)

app.mount('#app')
