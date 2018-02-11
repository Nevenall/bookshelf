<template>
  <div class="page">
    <h1>I am a page content component</h1>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      msg: "Welcome to BookShelf"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
