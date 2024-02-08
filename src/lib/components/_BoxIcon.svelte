<script lang="ts">
    export let icon: string;
    export let name: string;
</script>

<style>
    img {
        width: 100%;
    }

    figure {
        width: 100px;
        margin: 8px;
        opacity: 0;
        transition: all 500ms ease;
        margin-top: 10px;
    }

    :global(figure.observed) {
        opacity: 1;
        margin-top: 8px;
    }

    figcaption {
        text-align: center;
    }
</style>

<div class="box-icon">
    <figure>
        <img src="{icon}" alt="box-icon--{icon.substring(icon.lastIndexOf('/') + 1 )}">
        <figcaption>
            <p>{name}</p>
        </figcaption>
    </figure>
</div>
