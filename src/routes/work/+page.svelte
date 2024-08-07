<script lang='ts'>
    export let data:iWorkDB;

	import PageBanner from "$lib/components/page-banner.svelte";
    import Line from '$lib/components/line.svelte';
	import Blueprint from "./blueprint.svelte";
	import Masonry from "$lib/components/masonry.svelte";
</script>
<article>
    <PageBanner>
        <img src="/images/banners/work.webp" alt="work banner image">
    </PageBanner>

    {#each Object.entries(data) as [title, entry]}
    <section class='work-entry' id={title}>
        <div class='section-content' style:padding="24px">
            <header>
                <h2>{title}</h2>

                {#if entry.poster } 
                <figure class={entry.poster.type}>
                    <img src="{entry.poster.url}" alt="{title} poster">
                </figure>
                {/if}

                <div class='info'>
                    <p>{entry.year}</p>
                    {#if entry.url.toLowerCase( ) != 'n/a'}
                    <a href="{entry.url}" class='border_expand'><p>{entry.url}</p></a>
                    {:else}
                    <p class="border_expand">{entry.url}</p>
                    {/if}
                </div>
            </header>
            <Line/>
            <ul class='tags'>
                <li>tags:</li>
                {#each entry.tags as tag}
                <li style:text-decoration="underline">{tag}</li>
                {/each}
            </ul>
            <div class='writing'>
                {#each entry.paragraphs as paragraph}
                <p>{paragraph}</p>
                {/each}
            </div>
            {#if entry.gallery}
            <Line/>
            <Masonry urls={entry.gallery}/>
            {/if}
        </div>
    </section>
    {/each}

</article>

<style>
    .section-content {
        overflow: hidden;
    }

    .section-content header {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        text-align: center;
    }

    ul.tags {
        list-style-type: none;
        margin: 0; padding: 0;
        display: flex;
        justify-content: center;
    }

    ul.tags li {
        margin: 0;
        padding: 6px;
    }
</style>
