<script lang="ts">
  import { Router } from "sv-router";
  import "$router";
  import { onMount } from "svelte";
  import { setupTheme } from "$lib/ui";

  onMount(() => {
    setupTheme();
  });
</script>

<div id="toaster" class="toaster"></div>

<Router />
