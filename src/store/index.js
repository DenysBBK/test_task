
import { createStore } from 'vuex'

export default createStore({
  state: {
    page:1,
    users:[],
    availablePositions:[]
  },

  getters: {
    mainUsers(state){
      return state.users.sort((a,b) => b.registration_timestamp - a.registration_timestamp)
    },
    getPositions(state){
      return state.availablePositions
    }
  },

  mutations: {
    theUsers(state, payload){
      payload.forEach(one => state.users.push(one))
    },
    thePositions(state, payload){
      state.availablePositions = payload
    }
  },

  actions: {
   async getUsers(context){
      const responce = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.state.page}&count=6`,{
        method:"GET"
      })
      const data = await responce.json();
      
      if(!data.success){
        const error = new Error(data.message);
        throw error
      }
      this.state.page++
      context.commit('theUsers', data.users)
    },


    async getPosition(context){
      const responce = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions', {
        method:'GET'
      })
      const data = await responce.json();
      if(!data.success){
        const error = new Error(data.message);
        throw error
      }
      context.commit('thePositions', data.positions)
    },


    async getUserToken(){
      const responce = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token',{
        method:'GET'
      })
      const data = await responce.json();
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        localStorage.removeItem('token')
      }, 40 * 60 * 1000)
    },


    async postUser(context, payload){
      const userToken = localStorage.getItem('token')
      const responce = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, {
        method:'POST',
        body:payload,
        headers:{
          'Token':userToken
        }
      })
      const data = await responce.json();
      if(!data.success){
        const error = new Error(data.message);
        error.details = {
          message:data.message,
          fails:data.fails
        }
        throw error
      }
      if(!responce){
        const error = new Error('Fill the form, please');
        throw error
      }
      this.state.users = []
      this.state.page = 1;
      context.dispatch('getUsers')
    }
  }
})
