<script>
    const name = 'Steven Boyd';
</script>


<div class='name-crawl'>
    {#each name as letter, i} 
    <div class='letter'>
        <p style:animation-delay={(200 * i) + "ms"}>{letter}</p>
    </div>
    {/each}
</div>

<style>

    .name-crawl {
        text-align: center;
    }

    .letter {
        display: inline-block;
        cursor: default;
        user-select: none;
        transition: all 250ms ease;
    }

    p { 
        opacity: 0;
        text-transform: uppercase;  
        animation: reveal 1000ms ease-in-out forwards; 
        font-size: 3rem;
        font-weight: 300;
    }

    @keyframes reveal {
        0% { opacity: 0; transform: translate(0, 20px);}
        50% { opacity: 1; transform: translate(0, -20px); }
        100% { opacity: 1; transform: translate(0, 0);}
    }

    .letter:hover  {
        transform: translate(0, -20px);
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: 2.25rem;
        }
    }

    @media screen and (max-width: 400px) {
        p {
            font-size: 1.8rem;
        }
    }


</style>