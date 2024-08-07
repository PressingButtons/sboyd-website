<script>
	import GithubIcon from "$lib/components/github_icon.svelte";

    const group1 = [
        {name: 'email', href: 'mailto:stevenboyd221@gmail.com'},
        {name: 'musings', href: 'sboyd.dev/blog'}
    ]
</script>

<footer>
    <div class='group-left'>
        {#each group1 as {name, href}, i}
        <a {href} class='border_expand'>{name}</a>
        {/each}
    </div>
    <div class='group-right'>
        <a href="https://github.com/PressingButtons/">
            <GithubIcon/>
        </a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        border-top: var(--border-size) solid rgb(var(--foreground-color));
    }

    div {
        padding: 16px;
        display: flex;
        align-items: center;
    }

    a {
        margin: 8px;
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    .group-right a {
        width: 2rem;
        display: block;
    }
</style>