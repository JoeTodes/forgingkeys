<template>
  <div>
    <div v-for="article in articles">
      <div class="excerpt">
        <a v-bind:href="article.path">
          <h2>{{article.title}}</h2>
        </a>
        <div class="date">{{article.frontmatter.date.substring(0,10)}}</div>
        <p>
          {{article.frontmatter.excerpt}}
          <br />
          <a v-bind:href="article.path">read more</a>
          <br />
          <br />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    articles() {
      return this.$site.pages
        .filter(p => {
          return p.path.indexOf("/articles/") >= 0;
        })
        .sort((a, b) => {
          a = new Date(a.frontmatter.date);
          b = new Date(b.frontmatter.date);
          return a > b ? -1 : a < b ? 1 : 0;
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
a {
  margin-bottom: 20;
}
</style>