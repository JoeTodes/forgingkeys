<template>
  <span data-app>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{on}">
        <span v-on="on" class="cardTitle">{{name}}</span>
      </template>
      <v-card class="mx-auto" max-width="200" outlined>
        <v-img :src="img"></v-img>
        <div></div>
      </v-card>
    </v-menu>
  </span>
</template>
<script>
import data from "./assets/cota.json";
//TODO add AOA and WC
export default {
  props: ["name"],
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