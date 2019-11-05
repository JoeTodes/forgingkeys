<template>
  <div>
    <br />
    <v-container>
      <v-row>
        <v-col :cols="(12-cols)/2"></v-col>
        <v-col :cols="cols">
          <v-card raised>
            <v-img :src="img"></v-img>
            <div></div>
            <v-card-subtitle v-if="caption">{{caption}}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col :cols="(12-cols)/2"></v-col>
      </v-row>
    </v-container>
    <br />
  </div>
</template>
<script>
export default {
  props: ["name", "caption","cols"],
  data: function() {
    return {
      img: "../images/" + this.name
    };
  }
};
</script>