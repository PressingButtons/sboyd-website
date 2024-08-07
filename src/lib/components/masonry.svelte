<script lang='ts'>
	import { onMount } from "svelte";

    export let urls: string[];

    const cols:Array<HTMLDivElement | null> = [null, null, null]
    let figures:HTMLElement[];

    const loadImage = async (url:string): Promise<HTMLElement> => {
        let image = new Image( );
        return new Promise((resolve, reject) => {
            image.onload = event => {
                const figure = document.createElement('figure');
                figure.appendChild(image);
                resolve(figure);
            }
            image.onerror = event => reject( );
            image.src = url;
        });
    }

    const populate = async( ) => {

        let heights = [0, 0, 0];

        for( const figure of figures ) {
            const image = figure.querySelector('img');
            if(image) {
                let index = heights.indexOf(Math.min(...heights));
                if( cols[index] != null) {
                    cols[index]?.appendChild(figure);
                    heights[index] += image.height
                    console.log('heights', heights);
                }
            }
        }
    }

    const main = async( ) => {
        figures = await Promise.all(urls.map(loadImage));
        populate( );
        window.addEventListener('resize', populate);
    }

    onMount(main);

</script>

<div class='masonry'>
    <div class='col' bind:this={cols[0]}></div>
    <div class='col' bind:this={cols[1]}></div>
    <div class='col' bind:this={cols[2]}></div>
</div>

<style>
    div.masonry {
        display: grid;
        grid-template-columns: repeat(3, 30%);
        flex-wrap: wrap;
        max-width: 100%;
        gap: 5px;
    }

    div.masonry .col {
        display: flex;
        flex-flow: column;
    }

    :global(figure) {
        margin: 0;
        padding: 0;
        width: 100%;
    }

    :global(img) {
        width: 100%;
    }

    @media screen and (max-width: 500px ) {
        div.masonry {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            padding: 24px;
        }
    }
</style>