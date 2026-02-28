<script lang="ts">
    import TopBar from "$lib/components/top-bar.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen">
    <TopBar />
    <div class="container mx-auto p-2 flex-1">
        {@render children()}
    </div>
</div>
