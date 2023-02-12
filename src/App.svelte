<script>
   import Header from "./components/Header.svelte";
   import Drawer from "./components/Drawer.svelte";
   import Error from "./components/Error.svelte";
   import Chapter from "./components/Chapter.svelte";
   // this is a client dependency so right now it has to reference the dist path
   import router from "/dependencies/page/index.mjs";
   import chapters from "/book/book.js";
   // start on the first chapter, the README
   let text = chapters[0].chapter();
   let title = "Ghosting the Edge";
   let pageElement;
   let header;

   chapters.forEach((r) => {
      router(r.path, (ctx) => {
         text = r.chapter();
         title = r.title;
         header = ctx.hash;
      });
   });

   router("*", () => {
      console.log("page not found");
      text = `<div>
   <h2>Error! 404</h2>
   <h3>That's not in this book.</h3>
</div>
`;
   });

   router.start();

   let drawer = false;

   // if nav is open and we click on the page, close the drawer
   function click(event) {
      if (pageElement.contains(event.target)) {
         drawer = false;
      }
   }
</script>

<svelte:window on:click={click} />

<svelte:head>
   <title>{title}</title>
</svelte:head>

<Header bind:open={drawer} />
<Drawer bind:open={drawer} />

<main>
   <div id="page" bind:this={pageElement}>
      <Chapter bind:text bind:header />
   </div>
</main>

<style>
   main {
      margin-block-start: calc(var(--header-spacing) + 2rem);
   }
</style>
