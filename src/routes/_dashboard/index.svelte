<script lang="ts">
    import { client } from "$lib/rpc";

    const test = await client.ping();

    async function ping() {
        const ping = await client.ping();
        console.log(ping);
    }
</script>

<div>
    <button onclick={ping} class="btn">Ping</button>
    <p>{test}</p>
</div>
