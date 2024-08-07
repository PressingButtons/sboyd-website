<script lang="ts">
    export let works: {title: string, href: string, image: string, description: string}[];
</script>

<ul class='portfolio-list'>
    {#each works as {title, href, image, description}}
    <li class='project {title}'>
        <a {href} target="__blank">
            <figure>
                <img src="{image}" alt="{description} image" width="1150" height="700">
            </figure>
        </a>
        <a {href} class="border_expand">{href.substring(8)}</a>
    </li >
    {/each}
    <li class='blank-slot'></li>
</ul>

<style>

    ul {
        padding: 0;
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: rgb(var(--foreground-color));
        border: 0;
        gap: 1px;
        box-sizing: border-box;
        padding: 1px;
    }
    
    li {
        padding: 16px;
        background-color: rgb(var(--background-color));
        box-sizing: border-box;
    }

    figure {
        margin: 0;
        width: 100%;
        position: relative;
        margin-bottom: 20px;
    }

    figure::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid rgb(var(--foreground-color));
        transition: all 120ms ease-in-out;
        z-index: 0;
        transform: scale(0.9);
    }

    figure:hover::before {
        transform: scale(1.02, 1.04);
    }

    figure:hover img {
        transform: scale(0.98);

    }

    img {
        width: 100%; 
        max-width: 100%;
        height: auto;
        display: block;
        z-index: 1;
        box-sizing: border-box;
        object-fit: fill;
        transition: all 200ms ease-in-out;
        transform-origin: center;
        position: relative;
    }

    @media screen and (max-width: 450px ) {
        .portfolio-list {
            grid-template-columns: 1fr;
            padding: 1px 0px 1px 0px;
        }

        .blank-slot {
            display: none;
        }
    }


</style>