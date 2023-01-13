<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>


<script>

import 'bulma/css/bulma.css';
import axios from 'axios';

import mugs from '@/data-sources/mugs';
import coasters from '@/data-sources/coasters';

export default {
  name: 'App',
  data() {
    return {
      sources: {
        mugs,
        coasters,
      },
    };
  },
  created() {
    console.log('App.vue created is running');
    for (let sourceName of Object.keys(this.sources)) {
      let source = this.sources[sourceName];
      console.log('in App.vue created loop, sourceName:', sourceName, 'source:', source);
      let params = {};
      let store = this.$store;
      axios.get(source.url, { params }).then(function(response, error) {
        if (error) {
          console.log('error');
        } else {
          response.data.key = source.id;
          console.log('no error, source:', source, 'source.id:', source.id, 'response.data:', response.data);
          store.commit('setSourceData', response.data);
        }
      });
    }
  },
};

</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
