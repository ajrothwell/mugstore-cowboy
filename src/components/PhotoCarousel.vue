<template>
  <div class="main-content">
    
    <div
      v-if="picsLength"
      >
      <!-- class="column is-8 has-text-centered" -->
      <div class="image-div">
        <img
          class="rounded-square"
          :src="imgsrc"
        >
      </div>
    </div>
    <div
      v-if="!picsLength"
      >
      <!-- class="column is-8 has-text-centered" -->
      No photos
    </div>

    <div class="columns is-vcentered is-mobile">
      <div class="column is-2 is-offset-4 has-text-centered">
        <button
          v-show="photoNumber+1>1"
          class="button square-button"
          @click="changePhotoNumber('down')"
        >
          <font-awesome-icon icon="arrow-left" />
        </button>
      </div>
      <div class="column is-2 has-text-centered">
        <button
          v-show="picsLength && photoNumber+1<picsLength"
          class="button square-button"
          @click="changePhotoNumber('up')"
        >
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
      
  </div>
</template>

<script>

export default {
  name: 'PhotoCarousel',
  components: {
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      photoNumber: 0,
      photoDate: null,
      imgsrc: null,
    };
  },
  computed: {
    // allPics() {
    //   const allPics = {};
    //   for (let i = 0; i < 10; i++) {
    //     if (this.item.fields[`Date${i}`]) {
    //       this.item.fields[`PicsDate${i}`].date = this.item.fields[`Date${i}`];
    //       allPics[this.item.fields[`Date${i}`]] = this.item.fields[`PicsDate${i}`];
    //     }
    //   }
    //   return allPics;
    // },
    pictures() {
      // const pictures = [];
      // for (const pics of Object.keys(this.allPics)) {
      //   // console.log('in pictures, pics:', pics);
      //   for (const pic of this.allPics[pics]) {
      //     console.log('in pictures, this.allPics[pics]:', this.allPics[pics], 'pic:', pic);
      //     pic.date = pics;
      //     pictures.push(pic);
      //   }
      // }
      // return pictures;
      return this.item.fields.pictures;
    },
    picsLength() {
      return this.pictures.length;
    },
  },
  watch: {
    photoNumber(nextPhotoNumber) {
      console.log('watch photoNumber, nextPhotoNumber:', nextPhotoNumber);
      this.photoDate = this.pictures[nextPhotoNumber].date;
      this.imgsrc = './images/spinner3.png';
      const myImage = new Image();
      myImage.src = this.pictures[nextPhotoNumber].url;
      myImage.onload = () => {
        this.imgsrc = myImage.src;
      };
    },
  },
  mounted() {
    this.photoDate = this.pictures[this.photoNumber].date;
    this.imgsrc = './images/spinner3.png';
    const myImage = new Image();
    myImage.src = this.pictures[this.photoNumber].url;
    myImage.onload = () => {
      this.imgsrc = myImage.src;
    };
  },
  methods: {
    changePhotoNumber(direction) {
      console.log('changePhotoNumber, direction:', direction);
      let newNumber;
      if (direction == 'up') {
        newNumber = this.photoNumber + 1;
      } else if (direction == 'down') {
        newNumber = this.photoNumber - 1;
      }
      this.photoNumber = newNumber;
    },
  },
};

</script>

<style>

.square-button {
  width: 46px;
}

/* table {
  border: 0px none;
  border-style: none !important;
} */

/* .image-div {
  min-height: 540px;
}

th {
  background: #ffffff !important;
}

tr:nth-child(odd) {
  background: #eee;
}

.center {
  text-align: center;
}

.table-text {
  font-family: "OpenSans-Regular", "Open Sans", sans-serif;
  font-size: 14px;
}

.table-header-text {
  font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans", sans-serif;
  font-size: 14px;
}

h3 {
  font-family: "Montserrat-SemiBold", "Montserrat SemiBold", "Montserrat", sans-serif;
  font-weight: 650;
  font-size: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
}

.section-heading {
  margin-top: 14px;
}

.no-wrap {
  white-space: nowrap;
}

.no-margins {
  margin: 0px;
  margin-bottom: 0px !important;
}

.top-margins {
  margin-top: 10px;
}

.main-content {
  font-size: 14px,
}

.td-style {
  font-size: 14px !important;
}

.td-textbox {
  padding-left: 2rem;
} */

</style>
