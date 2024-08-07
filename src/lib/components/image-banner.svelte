<script lang='ts'>
    export let src:string;
    export let alt=""
</script>

<section class='full-width banner-image'>
    <div class='section-content'>
        <figure>
            <img {src} {alt}>
        </figure>
    </div>
</section>

<style>
    figure {
        height: 60vh;
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 bottom;
    }
</style>