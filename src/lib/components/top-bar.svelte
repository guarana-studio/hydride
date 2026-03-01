<script>
    import { authClient } from "$lib/auth-client";
    import { client } from "$lib/rpc";
    import { navigate, p } from "$router";
    import { UserIcon } from "@lucide/svelte";

    const me = await client.users.me().catch(() => undefined);

    async function signOut() {
        await authClient.signOut();
        navigate("/");
    }
</script>

<header class="border-b">
    <div class="container mx-auto p-2 flex justify-between items-center">
        <a href={p("/")} class="btn-ghost">Hydride</a>
        {#if me}
            <div class="dropdown-menu">
                <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    class="btn-outline"
                >
                    <UserIcon />
                    {me.email}
                </button>
                <div
                    data-popover
                    aria-hidden="true"
                    class="min-w-56"
                    data-align="end"
                >
                    <div role="menu">
                        <a href={p("/settings")} role="menuitem">Settings</a>
                        <button
                            role="menuitem"
                            onclick={signOut}
                            class="text-destructive">Sign Out</button
                        >
                    </div>
                </div>
            </div>
        {:else}
            <a href={p("/sign-in")} class="btn">Sign In</a>
        {/if}
    </div>
</header>
