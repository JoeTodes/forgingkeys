<template>
  <div>
    <br />
    <v-container>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <v-card raised>
            <v-img eager :src="img"></v-img>
            <div></div>
            <v-card-subtitle v-if="caption">{{caption}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
    <br />
  </div>
</template>
<script>
import data from "./assets/card_data.json";
//TODO add AOA and WC
export default {
  props: ["name", "caption"],
  data: function() {
    return {
      cotaData: data
    };
  },
  computed: {
    img: function() {
      let url = "";
      this.cotaData.forEach(card => {
        if (card.card_title.toLowerCase() == this.name.toLowerCase()) {
          url = card.front_image;
        }
      });
      if (url) {
        return url;
      } else {
        this.cotaData.forEach(card => {
          if (card.card_title.toLowerCase().includes(this.name.toLowerCase())) {
            url = card.front_image;
          }
        });
      }
    }
  }
};
</script>

