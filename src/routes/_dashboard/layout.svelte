<script lang="ts">
    import TopBar from "$lib/components/top-bar.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<TopBar />
<div class="container mx-auto">
    {@render children()}
</div>
