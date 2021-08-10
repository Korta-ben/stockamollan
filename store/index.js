import axios from "axios";

export const state = () => {
    hikingTrails:[]
    landmarks:[]
    stories:[]
    parking:[]
}

export const mutations = {
  setHikingTrails(state, hikingTrails){
    state.hikingTrails = hikingTrails
  },

  setlandmarks(state, landmarks){
    state.landmarks = landmarks;
  },

  setStories(state, stories){
    state.stories = stories;
  }
}

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    try{

      const  hikingTrails  = await axios.get('http://stockamollan.local/wp-json/wp/v2/vandringslederna')
      const  landmarks  = await axios.get(`http://stockamollan.local/wp-json/wp/v2/sevardheter/`)
      const stories  = await axios.get(`http://stockamollan.local/wp-json/wp/v2/sagner`)

      // state.hikingTrails = hikingTrails;
      // state.landmarks = landmarks;
      // state.stories = stories;
      // console.log(landmarks.data)
      commit('setHikingTrails', hikingTrails.data);
      commit('setlandmarks', landmarks.data);
      commit('setStories', stories.data);

    }catch (e) {
      console.error(e);
    }
  }
}

export const getters = {
  getHikingTrails(state){
    return state.hikingTrails
  },
  getLandmarks(state){
    return state.landmarks
  },
  getStories(state){
    return state.stories
  }
}
