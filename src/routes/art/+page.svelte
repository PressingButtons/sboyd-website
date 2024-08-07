<script lang='ts'>
	import Line from "$lib/components/line.svelte";
	import Masonry from "$lib/components/masonry.svelte";

    export let data;
</script>

<article>
    <section>
        <div class='section-content'>
            <header>
                <h2>Personal Artwork</h2>
            </header>
            <Line/>
        </div>
        <Masonry urls={data.urls}/>
    </section>
</article>

<style>

</style>