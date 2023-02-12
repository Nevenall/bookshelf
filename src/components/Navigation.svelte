<script>
   import { children } from "svelte/internal";

   export let chapters;
</script>

<ul>
   {#each chapters as chapter}
      <li class="ripple">
         <a href={chapter.path}>{@html chapter.title}</a>
         {#if chapter.toc.length > 0 && chapter.toc[0].children.length > 0}
            {@const headers = chapter.toc[0].children}
            <ul>
               {#each headers as h}
                  <li class="ripple">
                     <a href={chapter.path}{h.url}>{@html h.title}</a>
                  </li>
               {/each}
            </ul>
         {/if}
      </li>
   {/each}
</ul>

<style lang="postcss">
   ul {
      list-style: none;
      margin: 0;
      margin-block-start: 2rem;
      padding-inline-start: 1rem;

      & li {
         margin-block-end: 1rem;
         width: 100%;
      }

      & a:hover {
         text-decoration: underline;
      }

      & a {
         display: inline-block;
         color: var(--color-text);
         text-decoration: none;
         height: 100%;
         width: 100%;
      }
   }
</style>
