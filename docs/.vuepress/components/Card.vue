<template>
  <span data-app>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{on}">
        <span v-on="on" class="cardTitle">{{name}}</span>
      </template>
      <v-card class="mx-auto" max-width="300" outlined>
        <v-img :src="img"></v-img>
        <div></div>
      </v-card>
    </v-menu>
  </span>
</template>
<script>
import data from "./assets/card_data.json";
//TODO add AOA and WC
export default {
  props: ["name", "id"],
  data: function() {
    return {
      cotaData: data
    };
  },
  computed: {
    img: function() {
      let url = "";
      if (this.name) {
        this.cotaData.forEach(card => {
          if (card.card_title.toLowerCase() == this.name.toLowerCase()) {
            url = card.front_image;
          }
        });
      } else if (this.id) {
        this.cotaData.forEach(card => {
          if (card.id == this.id) {
            url = card.front_image;
          }
        });
      }
      return url;
    }
  }
};
</script>
<style scoped>
.cardTitle {
  font-weight: bold;
  color: cadetblue;
}
.cardTitle:hover {
  text-decoration: underline;
}
</style>