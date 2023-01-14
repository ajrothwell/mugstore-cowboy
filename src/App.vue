<template>
  <div id="app">
    
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">
          Mugstore Cowboy
        </h1>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/Mugs">Mugs</router-link> |
          <router-link to="/Coasters">Coasters</router-link>
        </div>
      </div>
    </section>

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
          // console.log('no error, source:', source, 'source.id:', source.id, 'response.data:', response.data);
          store.commit('setSourceData', response.data);
        }
      });
    }
  },
};

</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  padding: 2rem;
}

.title {
  /* font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
}

.item-title {
  font-size: 1.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
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

.circle {
  border-radius:50%;
}

.rounded-square {
  border-radius: 5%;
}

.columns {
  flex-wrap: wrap;
}

</style>
