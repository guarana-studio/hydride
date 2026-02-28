<script lang="ts">
import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="container mx-auto">
	{@render children()}
</div>
