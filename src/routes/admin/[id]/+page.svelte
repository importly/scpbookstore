<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    //import crypto from 'crypto';
    
    export let data: PageData;
    let { type } = data;
    let pass = "";

    let encodeing = async () => {
        const encoder = new TextEncoder();
        const place = await window.crypto.subtle.digest("SHA-256",encoder.encode(pass+":stantonbooks"));
        const hashArray = Array.from(new Uint8Array(place));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); 
        goto(`/admin/${hashHex}`)
        
    }
</script>

<!-- make a centered text box that just says Admin Portal-->
<div class="text-center">
    <h1>Admin Portal</h1>
    <input bind:value={pass} type="text" placeholder="Password" class="input w-full max-w-xs" />
    <button on:click={encodeing} class="btn btn-primary">Login</button>
</div>  