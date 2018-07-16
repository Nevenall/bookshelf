<template>
   <div>
      {{content}}
   </div>
</template>

<script>
import page from "../pages/README.html";

export default {
  name: "readme",
  data() {
    console.log(page);

    return {
      content: page
    };
  }
};
</script>

