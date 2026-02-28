<script>
    import { authClient } from "$lib/auth-client";
    import { p } from "$router";
    const session = authClient.useSession();
</script>

<header class="border-b">
    <div class="container mx-auto p-2 flex justify-between items-center">
        <a href={p("/")} class="btn-ghost">Hydride</a>
        {#if $session.data}
            <a href={p("/profile")} class="link">Profile</a>
        {:else}
            <a href={p("/sign-in")} class="link">Sign In</a>
        {/if}
    </div>
</header>
