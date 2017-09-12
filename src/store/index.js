import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
Vue.use(vuex);

export default new vuex.Store({
    state:{
        show: false,
        username: 'root',
        url: process.env.BASE_API
    },
    actions: {
        // submit (context) {
        //     axios({
        //         method: 'post',
        //         url: context.state.url+'/login',
        //         data: {
        //             username: context.state.username
        //         }
        //     })
        // }
    }
})