<template>
  <div class="full-app">
    <div
      class="container is-max-desktop main-app"
    >
    <!-- id="app" -->
      
      <!-- <section class="section"> -->
      <section>
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
  /* padding-left: 2rem;
  padding-right: 2rem; */
  padding: 2rem;
}

.full-app {
  height: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 1.5rem;
}

.main-app {
  background-color: white;
  padding: 2rem;
  /* padding-left: 2rem;
  padding-right: 2rem; */
}

.title {
  /* font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #a068e8;
  -webkit-text-stroke: 0.001rem black;
  /* -webkit-text-stroke: 1px black; */
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  /* text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black; */
  /* text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black; */
  font-size: 7rem;
  line-height: .85;
  text-transform: uppercase;
}

.section-title {
  font-size: 1.5rem;
  padding: 1rem;
}

.item-title {
  font-size: 1.4rem;
  padding: 1rem;
  min-height: 100px;
}

@media (max-width: 600px) {

  .title {
    font-size: 3rem;
  }

  .main-app {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (min-width: 601px) and (max-width: 767px) {
  .title {
    font-size: 3.5rem;
  }

  .main-app {
    padding-left: 7rem;
    padding-right: 7rem;
  }
}

@media (max-width: 767px) {
  .full-app {
    padding: 0rem;
  }

  .item-title {
    min-height: 0px;
  }
}

#nav {
  padding: 20px;
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
