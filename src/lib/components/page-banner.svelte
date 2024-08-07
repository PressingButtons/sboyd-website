<script lang='ts'>
    
</script>

<section class='full-width banner-image'>
    <div class='section-content'>
        <figure>
            <slot/>
        </figure>
    </div>
</section>

<style>
    figure {
        height: 40vh;
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
        object-position: 0 bottom;
    }
</style>