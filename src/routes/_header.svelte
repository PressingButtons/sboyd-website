<style>
    header {
        position: sticky;
        top: 0; left: 0;
        z-index: 1;
        backdrop-filter: blur(10px);
        padding: 10px;
    }

    .wrapper {
        position: relative;
        display: grid;
    }

    nav {
        display: flex;
        position: relative;
        justify-content: space-between;
    }

    @media screen and (min-width: 750px) {

        .wrapper {
            width: 750px;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
        }

        nav {
            margin: 0 auto;
            position: absolute;
            right: 0;
        }

        nav a{
            margin: 3px;
        }


        a.home {
            width: min-content;
            white-space: nowrap;
        }
    }

    @media screen and (max-width: 749px) {
        header {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: min-content 1fr;

        }

        .wrapper {
            grid-gap: 5px;
        }

        a.home {
            text-align: center;
        }
    }

</style>

<header>
    <div class='wrapper'>
        <a href="#introduction" class='home'>Steven Boyd</a>
        <nav class='menu'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#websites">Portfolio</a>
        </nav>
    </div>
</header>