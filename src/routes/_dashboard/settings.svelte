<script lang="ts">
    import { authClient } from "$lib/auth-client";
    import { client } from "$lib/rpc";
    import { toast } from "$lib/ui";
    import { KeyIcon, XIcon } from "@lucide/svelte";

    const me = await client.users.me();
    const { data: passkeys } = await authClient.passkey.listUserPasskeys();

    async function addPasskey() {
        const { error } = await authClient.passkey.addPasskey({
            authenticatorAttachment: "platform",
        });
        if (error) {
            return toast({ category: "error", title: "Failed to add passkey" });
        }
        window.location.reload();
    }

    async function deletePasskey(id: string) {
        const { error } = await authClient.passkey.deletePasskey({
            id,
        });
        if (error) {
            return toast({
                category: "error",
                title: "Failed to delete passkey",
            });
        }
        window.location.reload();
    }
</script>

<div class="flex-1 flex flex-col justify-center items-center">
    <div class="card max-w-128 w-full">
        <div class="flex items-center justify-between px-6">
            <header>
                <h2 class="font-semibold text-lg">Settings</h2>
                <p>Manage your profile and account</p>
            </header>
            <button
                type="button"
                aria-label="Toggle dark mode"
                data-tooltip="Toggle dark mode"
                data-side="bottom"
                onclick={() =>
                    document.dispatchEvent(new CustomEvent("basecoat:theme"))}
                class="btn-icon-outline size-8"
            >
                <span class="hidden dark:block"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><circle cx="12" cy="12" r="4" /><path
                            d="M12 2v2"
                        /><path d="M12 20v2" /><path
                            d="m4.93 4.93 1.41 1.41"
                        /><path d="m17.66 17.66 1.41 1.41" /><path
                            d="M2 12h2"
                        /><path d="M20 12h2" /><path
                            d="m6.34 17.66-1.41 1.41"
                        /><path d="m19.07 4.93-1.41 1.41" /></svg
                    ></span
                >
                <span class="block dark:hidden"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
                    ></span
                >
            </button>
        </div>
        <section>
            <form class="form grid gap-6">
                <div class="grid gap-2">
                    <label for="demo-card-form-email">Email</label>
                    <input type="email" value={me?.email} disabled />
                </div>
                <hr />
                <div class="grid gap-2">
                    <h3 class="font-semibold">Passkeys</h3>
                    {#each passkeys as passkey}
                        <div
                            class="flex items-center justify-between border rounded-lg p-2 gap-2"
                        >
                            <KeyIcon size={16} class="ml-2" />
                            <span class="flex-1">
                                {passkey.id}
                            </span>
                            <button
                                class="btn-icon-outline"
                                onclick={() => deletePasskey(passkey.id)}
                            >
                                <XIcon />
                            </button>
                        </div>
                    {/each}
                </div>
            </form>
        </section>
        <footer class="flex flex-col items-center gap-2">
            <button
                type="button"
                class="btn-secondary w-full"
                onclick={addPasskey}>Add a Passkey</button
            >
        </footer>
    </div>
</div>
