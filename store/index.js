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

      const  hikingTrails  = await axios.get('https://api.stockamollan.guide/wp-json/wp/v2/vandringslederna?per_page=100&orderby=title&order=asc')
      const  landmarks  = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/sevardheter?per_page=100&orderby=title&order=asc`)
      const stories  = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/sagner?per_page=100&orderby=title&order=asc`)

      commit('setHikingTrails', hikingTrails.data.sort( (a, b) => b.acf.position.localeCompare(a.acf.position) ));
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
