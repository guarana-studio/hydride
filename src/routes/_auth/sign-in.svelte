<script lang="ts">
    import { useFormControl } from "svelte-simple-form";
    import { navigate, p } from "$router";
    import { ArrowLeftIcon, KeyIcon } from "@lucide/svelte";
    import { z } from "zod";
    import { standardSchemaValidator } from "@svelte-simple-form/validators/standard-schema";
    import { fly } from "svelte/transition";
    import { authClient } from "$lib/auth-client";
    import { toast } from "$lib/ui";

    const SignInSchema = z.discriminatedUnion("step", [
        z.object({
            step: z.literal("requestOtp"),
            email: z.email(),
            otp: z.string().optional(),
        }),
        z.object({
            step: z.literal("verifyOtp"),
            email: z.email(),
            otp: z.string().min(6).max(6),
        }),
    ]);

    const { form, control } = useFormControl({
        initialValues: {
            step: "requestOtp",
            email: "",
            otp: "",
        },
        validator: standardSchemaValidator(SignInSchema),
        async onSubmit(data) {
            if (data.step === "requestOtp") {
                const { error } = await authClient.emailOtp.sendVerificationOtp(
                    {
                        email: data.email,
                        type: "sign-in",
                    },
                );
                if (error) {
                    return toast({
                        title: "Error sending OTP",
                        category: "error",
                    });
                }
                form.setData({ ...form.data, step: "verifyOtp" });
                form.removeTouched("otp");
                return;
            }
            const { error } = await authClient.signIn.emailOtp({
                email: data.email,
                otp: data.otp,
            });
            if (error) {
                return toast({
                    title: "Error sending OTP",
                    category: "error",
                });
            }
            navigate("/");
        },
    });
</script>

<form class="form grid gap-6" use:form.handler>
    <div>
        <a href={p("/")} class="btn-link pl-0">
            <ArrowLeftIcon />
            <span>Return to home</span>
        </a>
    </div>
    <fieldset class="fieldset">
        <legend>Sign In</legend>
        <p>Enter your email below to receive a verification code.</p>
        <div class="field">
            <label for="emailAddress">Email Address</label>
            <input
                type="email"
                id="emailAddress"
                placeholder="your@email.com"
                aria-invalid={form.errors.email ? "true" : undefined}
                use:control={"email"}
            />
            {#if form.errors.email}
                <p role="alert">{form.errors.email?.join(", ")}</p>
            {/if}
        </div>
        {#if form.data.step === "verifyOtp"}
            <div class="field" transition:fly>
                <label for="otp">Verification Code</label>
                <input
                    type="text"
                    id="otp"
                    placeholder="000000"
                    aria-invalid={form.errors.otp ? "true" : undefined}
                    use:control={"otp"}
                />
                {#if form.errors.otp}
                    <p role="alert">{form.errors.otp?.join(", ")}</p>
                {/if}
            </div>
        {/if}
    </fieldset>
    <button type="submit" class="btn"
        >{form.data.step === "requestOtp"
            ? "Send Verification Code"
            : "Verify Code"}</button
    >
    <hr class="my-4 border-border" />
    <button type="button" class="btn-secondary">
        <KeyIcon />
        <span>Sign In with Passkey</span>
    </button>
</form>
