<template>
  <div>
    <Card />
    <br />
    <v-card raised>
      <v-card-title class="title">
        {{properName}}
        <v-spacer></v-spacer>
        <v-img v-if="ready" :src="houses[0].image" max-width="40"></v-img>
        <v-img v-if="ready" :src="houses[1].image" max-width="40"></v-img>
        <v-img v-if="ready" :src="houses[2].image" max-width="40"></v-img>
      </v-card-title>
      <v-card-text style="padding:0rem">
        <v-container style="padding:0rem">
          <v-row no-gutters>
            <v-col v-for="(house,index) in houses" :key="index">
              <v-card>
                <v-card-title class="house">{{house.name}}</v-card-title>
                <v-card-text>
                  <div
                    v-for="(card,index) in finalCards"
                    :key="index"
                    v-if="card.house==house.name"
                  >
                    -
                    <Card class="cardTitle" :name="card.card_title" />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["name"],
  data: function() {
    return {
      ready: false,
      response: {},
      properName: "",
      cards: [],
      cardIDs: [],
      finalCards: [],
      houses: [],
      id: "",
      expansion: "",
      queryText: ""
    };
  },
  created: function() {
    const parsedName = this.name.toLowerCase().replace(/ /g, "%20");
    this.queryText = "https://www.keyforgegame.com/api/decks/?search=";
    this.queryText += parsedName;
    this.queryText += "&links=cards";

    this.getData();
  },
  methods: {
    getData: function() {
      axios
        .get(this.queryText)
        .then(res => {
          this.response = res;
          this.properName = res.data.data[0].name;
          this.cards = res.data._linked.cards;
          this.cardIDs = res.data.data[0]._links.cards;
          this.houses = res.data._linked.houses;
          this.id = res.data.data[0].id;
          this.expansion = res.data.data[0].expansion;

          this.cardIDs.forEach(id => {
            this.cards.forEach(card => {
              if (id == card.id) {
                this.finalCards.push(card);
              }
            });
          });

          this.ready = true;
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.title {
  background-color: cadetblue;
  color: aliceblue;
}
.house {
  font-size: 1rem;
}
.cardTitle {
  font-size: 0.8rem;
}
</style>