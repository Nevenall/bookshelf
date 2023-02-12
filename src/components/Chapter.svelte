<script>
   import { afterUpdate } from "/dependencies/svelte/index.mjs";
   export let text = "";
   export let header = null;

   function scrollTo(header) {
      if (!header) return;
      let el = document.getElementById(header);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
   }

   afterUpdate(() => {
      scrollTo(header);
   });
</script>

{@html text}

<style lang="postcss">
</style>
