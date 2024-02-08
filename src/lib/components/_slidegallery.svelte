<script>
	import { randomID } from "$lib/scripts/randomID";
	import { onMount } from "svelte";

    let current = 0;
    let total = 0;

    const id = randomID(10);

    onMount(async ( ) => {
        const gallery = document.getElementById('sg-' + id);
        if( gallery ) {
            const prev = gallery?.querySelector('button.prev');
            const next = gallery?.querySelector('button.next');
            const slides = gallery.querySelectorAll('slide-gallery figure');
            total = slides.length;
            if( prev && next ) {
                prev.addEventListener('click', event => {
                    current--;
                    if( current < 0 ) current = slides.length - 1;
                    slides[current].scrollIntoView({
                        behavior: "auto", 
                        block: "center",
                        inline: "center"
                    });
                })
                next.addEventListener('click', event => {
                    current++;
                    if( current >= slides.length ) current = 0;
                    slides[current].scrollIntoView({
                        behavior: "auto", 
                        block: "center",
                        inline: "center"
                    });

                });
            }
        }
    });
</script>

<style>

    button {
        background: none;
        border: none;
        color: var(--fg);
        margin: 8px;
        font-weight: 400;
        cursor: pointer;
    }

    slide-gallery {
        display: flex;
        position: relative;
        overflow:  hidden;
        max-width: 100%;
        scroll-behavior: smooth;
    }

    :global(slide-gallery > figure) {
        min-width: 90%;
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        margin: 8px;
    }

    :global(slide-gallery img) {
        width: 100%;
        background-color: #AAA;
        /* aspect-ratio: 16/9; */
        border: 3px solid white;
    }

    :global(slide-gallery figcaption) {
        text-align: center;
    }

    slide-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
    }
</style>

<div class='slide-gallery' id="sg-{id}">

    <slide-gallery>
        <slot/>
    </slide-gallery>

    <slide-controls class='buttons'>
        <button class="prev">˂</button>
        <p>
            <span class="current">{current + 1}</span>
            /
            <span class="total">{total}</span>
        </p>
        <button class="next">˃</button>
    </slide-controls>
</div>