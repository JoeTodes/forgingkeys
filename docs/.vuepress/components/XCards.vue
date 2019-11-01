<template>
  <div>
    <br />
    <v-card :max-width="this.names.length*200+40" raised>
      <v-container>
        <v-row max-width="400" dense>
          <v-col xs="auto" sm="auto" v-for="name in names" :key="name">
            <v-card max-width="200">
              <v-img :src="imgs[name.toLowerCase()]"></v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-card-subtitle v-if="caption">{{caption}}</v-card-subtitle>
      </v-container>
    </v-card>
    <br />
  </div>
</template>
<script>
import data from "./assets/card_data.json";
//TODO add AOA and WC
export default {
  props: { names: Array, caption: String },
  data: function() {
    return {
      cotaData: data
    };
  },
  computed: {
    imgs: function() {
      let urls = {};
      this.names.forEach(name => {
        this.cotaData.forEach(card => {
          if (card.card_title.toLowerCase() == name.toLowerCase()) {
            urls[name.toLowerCase()] = card.front_image;
          }
        });
      });
      return urls;
    }
  }
};
</script>
<style scoped>
</style>

