<style>
    input {
        border-top-left-radius: 999px;
        border-bottom-left-radius: 999px;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.2rem;
        font-family: inherit;
        border: none;
        padding: 0.5rem 0 0.5rem 1.0rem
    }
    button {
        border-top-right-radius: 999px;
        border-bottom-right-radius: 999px;
        border: none;
        background: #555;
        width: 120px;
        cursor: pointer;
        border: 2px solid transparent;
        color: white;
    }

    button:hover {
        background-color: #777;
        color: white;
        border-color: white;
    }

    input#bot-detection {
        position: absolute;
        visibility: hidden;
    }
</style>

<section>
    <form action="">

        <input type="checkbox" id='bot-detection'/>

        <div class='flex'>
            <input type="text" aria-label="Email Address" placeholder="Email Address" required>
            <button>Subscribe</button>
        </div>

    </form>
</section>