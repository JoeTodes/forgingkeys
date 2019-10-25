<template>
  <div>
    <div v-for="article in articles">
      <a v-bind:href="article.path">
        <h2>{{article.title}}</h2>
      </a>
      <div class="date">{{article.frontmatter.date.substring(0,10)}}</div>
      <p>
        {{article.frontmatter.excerpt}}
        <a v-bind:href="article.path">read more</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    articles() {
      return this.$site.pages.filter(p => {
        return p.path.indexOf("/articles/") >= 0;
      });
    }
  }
};
</script>
<style scoped>
h2 {
  margin-bottom: 0;
}
.date {
  color: gray;
}
</style>