<script lang='ts'>
	import { onMount } from "svelte";

    let input:HTMLInputElement;

    let theme = 'light';

    const links = [
        { title: 'work', href: '/work', target: '_self'},
        { title: 'art', href: '/art', target: '_self'},
        { title: 'games', href: 'https://pressingbuttons.itch.io/', target: '_blank'},
        { title: 'about', href: '/about', target: '_self'},
        { title: 'blog', href: '/blog', target: '_self'},
    ];

    const onchange = ( ) => {
        if( input.checked ) theme = 'dark';
        else theme = 'light';
    }

    onMount(onchange);

</script>

<svelte:head>
    <link rel="stylesheet" href="/css/{theme}.css">
</svelte:head>

<header>
    <div class='menu'>
        <a href="/">
            <p class='home'>SB</p>
        </a>
        <div class='links'>
            {#each links as {title, href, target}}
            <a class="border_expand" {href} {target}>{title}</a>
            {/each}
        </div>
    </div>
        
    <input type="checkbox" bind:this={input} on:change={onchange}>
</header>

<style>
    header {
        position: sticky;
        top: 0; right: 0;
        background-color: rgb(var(--background-color));
        border-bottom: var(--border-size) solid rgb(var(--foreground-color));
        display: flex;
        justify-content: space-between;
    }

    .menu {
        display: flex;
        align-items: center;
    }

    p.home {
        background-color: rgb(var(--foreground-color));
        color: rgb(var(--background-color));
        padding: 16px;
    }

    p.home:hover {
        text-decoration: underline;;
    }

    input {
        margin: 16px;
    }

    .links {
        display: flex;
        margin-left: 24px;
    }

    .links a {
        margin: 0px 8px;
    }

</style>