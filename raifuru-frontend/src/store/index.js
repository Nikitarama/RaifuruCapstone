import { createStore } from 'vuex'
import axios from 'axios';
const raifuruURL='http://localhost:3500/'; //from render.com
export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product:null,
    showSpinner:true,
    message:null,
    singleProduct:null
  },
  getters: {
  },

  mutations: {
    setUsers(state, users){
      state.users=values
    },
    setProducts(state,values){
      state.products=values
    },
    setMessage(state,message){
      state.message=message
    },
    setSingleProduct(state, product){
      state.singleProduct = product;
    }
    
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get (`${raifuruURL}users`);
      if (res.data){
        context.commit('setUsers',res.data)
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

  async deleteProduct (content) {
    const res = await axios.delete(`${raifuruURL}products`);
    const {result,err}= await res.data;
    if (result){
      context.commit('setProducts',result)
    } else {
      context.commit('setMessage',err)

}
},
async addProduct (content) {
  const res = await axios.post(`${raifuruURL}products`);
  const {result,err}= await res.data;
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
  },

modules: {
}

})
