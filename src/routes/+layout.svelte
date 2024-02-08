<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        background-color: var(--main-background, white);
        color: var(--main-fontcolor, black);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        --page-width: 750px;
        font-size: 1.2rem;
        margin: 0;
    }

    :global(body) {
        --main-background: #CCC;
        --main-fontcolor: #334;
        --accent-1: #22A;
    }

    :global()

    :global(body.dark) {
        --main-background: #333;
        --main-fontcolor: #CCC; 
        --accent-1: #ACA;
    }

    :global(section) {
        width: 100;
        max-width: 100%;
        padding: 0 1rem 0 1rem;
        margin: 0 auto;
    }

    :global(article) {
        padding: 1rem;
    }

    :global(article > *:first-child ) {
        margin-top: 4.5rem;
    }

    :global(.flex) {
        display: flex;
    }

    :global(article > *) {
        opacity: 0;
        display: block;
        transform: translate(0%, 20px);
        transition: all 500ms ease;
    }

    :global(article.observed > *) {
        opacity: 1;
        transform: translate(0, 0);
    }

    :global(a) {
        text-decoration: none;
        background-color: inherit;
        transition: all 500ms ease;
        color: var(--accent-1);
        padding: 3px;
        border-radius: 5px;
    }

    :global(a:hover) {
        background-color: var(--accent-1);
        color: var(--main-background);
    }

    main {
        margin: 0 auto;
        max-width: 100%;
        width: var(--page-width);
    }

</style>

<script lang="ts">
    import { onMount } from "svelte";
	import Header from "./_header.svelte";
	import Themes from "./_themes.svelte";


    onMount(( ) => {
        //document.body.classList.add('dark');

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: [0.25, 0.50, 0.75, 1]
        }

        const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            for( const entry of entries ) {
                // skip if not intersecting
                if( !entry.isIntersecting ) continue;
                if( entry.intersectionRatio >= 0.1 )
                    entry.target.classList.add('observed');
            }
        }

        let observer = new IntersectionObserver( onObserve, options );

        const observationUnits = document.querySelectorAll('article');
        for( const unit of observationUnits ) observer.observe( unit );

        for( const icon of document.querySelectorAll('.box-icon figure')) observer.observe( icon );

        console.log('observing');
    });
</script>

<!--
    <Themes></Themes>
-->
<Header></Header>
<main>
    <slot/>
</main>