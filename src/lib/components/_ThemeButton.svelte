<script lang="ts">
	import { onMount } from "svelte";

    export let type: string;

    onMount(( ) => {
        /*
        const themeButtons = document.querySelectorAll('input[name="theme-selection"]');
        themeButtons.forEach((element, key) => {
            const button = element as HTMLInputElement;
            button.onchange = event => {
                document.body.classList
            }
        });
        */
    });
</script>

<style>

</style>

<div class="theme-button">
    <input type="radio" id="theme-{type}-btn" name="theme-selection">
    <label for="theme-{type}-btn">{type}</label>
</div>