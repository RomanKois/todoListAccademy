import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import w from './plugins/w/w'
import mocks from './plugins/w/moxios'
import axios from 'axios'
// import { createStore } from 'vuex'


// const store = createStore({
//     state (){

//     }
// })



createApp(App).mount('#app').use(w).use(mocks, {
    routes: {
        'GET comments/project/(id)': true,
        'GET api/items/(id)':true,
        'POST api/items/(id)':true
    }
})