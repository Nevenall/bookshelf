<script>
   import {
      ChevronLeft,
      ChevronRight,
      DarkMode,
      GitHub,
      Menu,
   } from "/icons/index.js";

   let title = "Ghosting the Edge";

   let collapsed = false;
   export let open = false;
</script>

<svelte:window on:scroll={() => (collapsed = window.scrollY > 5)} />

<header class:collapsed>
   <button
      class="ripple"
      type="button"
      class:is-active={open}
      on:click={() => (open = !open)}
   >
      <Menu />
   </button>
   {#if !collapsed}
      <span>
         BookShelf
         <ChevronRight />
         {title}
      </span>
   {/if}
   <div class="end">
      {#if !collapsed}
         <button
            class="ripple"
            title="toggle dark/light modes"
            on:click={() => document.documentElement.classList.add("light")}
         >
            <DarkMode />
         </button>
         <a
            class="ripple"
            target="_blank" 
            rel="noreferrer"
            href="https://github.com/Nevenall/gulp-bookshelf"
            title="visit the github repository"
         >
            <GitHub />
         </a>
      {/if}
      <button class="ripple" on:click={() => (collapsed = !collapsed)}>
         {#if !collapsed}
            <ChevronLeft />
         {:else}
            <ChevronRight />
         {/if}
      </button>
   </div>
</header>

<style lang="postcss">
   header {
      height: var(--header-spacing);
      width: 100vw;
      position: fixed;
      inset-block-start: 0;
      inset-inline-start: 0;
      margin: 0;
      padding: 0 1rem;
      z-index: 50;
   }

   header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
   }

   header {
      // note - there are performance implications in transitioning width
      transition: width var(--transition-fast);
      box-shadow: var(--elevation-4);
      background: var(--app-color-primary);

      svg.icon {
         height: 1.5rem;
         fill: var(--app-color-text);
      }
   }

   header.collapsed {
      width: 10rem;
      box-shadow: var(--elevation-8);
      border-radius: 0 0 calc(var(--header-spacing) / 2) 0;
   }

   .end {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      * {
         margin-inline-end: 1rem;
      }
      
      *:last-child {
         margin-inline-end: 0;
      }
   }

   button,
   a {
      background: transparent;
      border: none;

      height: 2rem;
      width: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50vh;

      outline: none;
      cursor: pointer;
      transition: background var(--transition);
   }

   a:hover,
   button:hover {
      background: var(--app-color-hover);
   }

   span {
      margin-inline-start: 2rem;
      margin-inline-end: auto;
      color: var(--app-color-text);

      display: flex;
      align-items: center;
      font-size: var(--font-size-2);
      font-weight: 500;
   }
</style>
