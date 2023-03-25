import { createStore } from 'vuex';
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
import axios from 'axios';
import router from "../router/index";
const raifuruURL='http://localhost:3500/'; //from render.com
export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product:null,
    showSpinner:true,
    message:null,
    singleProduct:null,
    userProfile:null,
  },
  getters: {
  },

  mutations: {
    setUsers(state, users){
      state.users=users
    },
    setUser(state, user){
      state.user = user
    },
    setUserProfile(state, userProfile){
      state.userProfile = userProfile
    }, 
    setProducts(state,values){
      state.products=values
    },
    setMessage(state,message){
      state.message=message
    },
    setSingleProduct(state, product){
      state.singleProduct = product;
    },
    setSpinner(state,showSpinner){
      state.showSpinner = showSpinner;
    }
    
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get (`${raifuruURL}users`);
      if (res.data){
        context.commit('setUsers', res.data)
      } else {
        context.commit('setMessage', 'An error occurred')
      }
  },
    async fetchProducts (context){
      const res= await axios.get(`${raifuruURL}products`);
      const {result,err}= await res.data;
      if (result){
        context.commit('setProducts',result)
      } else {
        context.commit('setMessage',err)
      }
  },

  async register(context, payload){
    const res = await axios.post(`${raifuruURL}register`, payload);
    const {msg, err} = await res.data;
    if(msg){
      context.commit('setMessage', msg)
    } else {
      context.commit('setMessage', err)
    }
  },

  async login (context, payload){
    console.log(payload)
    const res = await axios.post(`${raifuruURL}login`, payload);
    console.log(res, "Response: ");
    const { jwToken, result, msg, err } = await res.data;
    if (result) {
      console.log(result);
      context.commit('setUser', result);
      context.commit('setMessage', msg);
      context.commit('setSpinner', false);
      cookies.set("LegitUser", jwToken);
      router.push("/");
    } else {
      context.commit("setMessage", err);
    }
  },

  async deleteProduct (content) {
    const res = await axios.delete(`${raifuruURL}products`);
    const {result,err}= await res.data;
    if (result){
      context.commit('setProducts',result)
    } else {
      context.commit('setMessage',err)

}
},
async addProduct (context, payload ) {
  const res = await axios.post(`${raifuruURL}products`, payload);
  const {result,err}= await res.data;
  console.log(res.data);
  if (result){
    context.commit('setProducts',result)
  } else {
    context.commit('setMessage',err)
  }
},
async singleProduct(context, id){
  const res = await axios.get(`${raifuruURL}products/${id}`,)
  const {data,err} = await res;
  console.log(res.data)
  if(data){
    console.log(data)
    context.commit('setSingleProduct', data)
  }else {
    console.log(err)
    context.commit('setMessage', err)
  }
},
async userProfile(context, id){
  const res = await axios.get(`${raifuruURL}users/${id}`,);
  console.log(res.data[0])
  const {data,err} = await res;
  // console.log(data)
  if(data){
    // console.log(data)
    context.commit('setUserProfile', data)
  }else {
    // console.log(err)
    context.commit('setMessage', err)
  }
},
  },

modules: {
}

})
