import { createApp } from "vue"
import { store, key } from './store'

import App from "./App.vue"
import "@fortawesome/fontawesome-free/css/all.css"
import "bulma/css/bulma.css"

const app = createApp(App)
app.use(store, key)
app.mount("#app")
