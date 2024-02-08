<script>
    import BoxIcon from '$lib/components/_BoxIcon.svelte';
    import css from '$lib/images/icons8-css.svg';
    import git from '$lib/images/icons8-git.svg';
    import github from '$lib/images/icons8-github.svg';
    import nodejs from '$lib/images/icons8-nodejs.svg';
    import sass from '$lib/images/icons8-sass.svg';
    import shopify from '$lib/images/icons8-shopify.svg';
    import wordpress from '$lib/images/icons8-wordpress.svg';
    import php from '$lib/images/icons8-php-96.png';
    import svelte from '$lib/images/icons8-svelte-240.svg';
    import html from '$lib/images/icons8-html-240.svg';
    import javascript from '$lib/images/icons8-javascript.svg';
    import typescript from '$lib/images/icons8-typescript.svg';
</script>

<style>
    section.icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    a {
        color: inherit;
        transition: all 500ms ease;
        text-decoration: none;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--main-fontcolor);

    }

    a:hover {
        color: var(--main-background);
        background-color: var(--main-fontcolor);
    }
</style>

<article id="skills">
    <header>
        <h2>What I'm using</h2>
    </header>
    <main>
        <section class="icons">
            <BoxIcon name="HTML5" icon={html}/>
            <BoxIcon name="CSS" icon={css}/>
            <BoxIcon name="JavaScript" icon={javascript}/>
            <BoxIcon name="Sass" icon={sass}/>
            <BoxIcon name="TypeScript" icon={typescript}/>
            <BoxIcon name="Git" icon={git}/>
            <BoxIcon name="Github" icon={github}/>
            <BoxIcon name="NodeJS" icon={nodejs}/>
            <BoxIcon name="Shopify" icon={shopify}/>
            <BoxIcon name="Wordpress" icon={wordpress}/>
            <BoxIcon name="PHP" icon={php}/>
            <BoxIcon name="Svelte" icon={svelte}/>
        </section>
        <section style="text-align: center">
            <a href="https://icons8.com/" aria-label="icons8 link" target="_blank">Icons by Icons8</a>
        </section>
    </main>
</article>