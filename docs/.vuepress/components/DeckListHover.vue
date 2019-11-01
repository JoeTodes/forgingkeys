<template>
  <span data-app>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{on}">
        <span v-on="on" class="cardTitle">{{name}}</span>
      </template>
      <DeckList :name="name" />
    </v-menu>
  </span>
</template>
<script>
export default {
  props: ["name"]
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