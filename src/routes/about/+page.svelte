<script>
	import GithubIcon from "$lib/components/github_icon.svelte";


</script>

<article>
    <section>
        <div class='section-content'>

            <figure class='portrait'>
                <img src="/images/itsme.jpg" alt="The man the myth the legend." width=500>
            </figure>


            <h2>Hello, I am Steven P. Boyd</h2>
            
            <p>
                That said, my backgroudn starts within a corporate environment. Prior to going freelance, I worked five years in Mainframe Operations.
                Certainly was a learning experience to which I owe a great deal for shaping what would be my career path thus far. This shift has had its 
                hurdles as most of my skills aren't transferable from a technical background, but the challenge and joy of working within this field 
                has had me committed to it. 
            </p>
            
            <p>
                Coding wise, I begn to bloom during my college years, making flash games wihin AS3. But even before that, I was using applications 
                such as EB worlds and scratch to try and making platforms and fighting games. I was invested in creating worlds, something I still hold onto today.
                All to say, this love runs <span>DEEP</span>
            </p>
            
            <p>
                Keep tabs on this website as will be able to see the changes in my design motifs and prowess. The archive page has a section for previous
                iterations of this site. I'll also post when I'm able to do site commission and work out a quote with my prospective clients.
                But if you wish to give a bit of support without the big time commitment you can just buy me a coffee. Any all add support would be 
                greatly appreciated.
            </p>
        </div>
    </section>
    
    <section>
        <div class='section-content'>
            <h2>My Skills</h2>
            
            <ul class='skills'>
                <li>
                    <header>
                        <h2>The Big Three<span>[5+ years]</span></h2>
                        <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_128.png" alt="HTML5" width="100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" width="100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" width="100">
                    </header>
                    <p>
                        Since the fall of flash, I moved into the core web technologies as a replacement. Though devotion into them is fairly recent,
                        I am quite confident in my current standing.
                    </p>
                </li>

                <li>
                    <header>
                        <h2>Supplemental <span>[3+ years]</span></h2>
                        <img src="https://sass-lang.com/assets/img/styleguide/color.png" alt="Sass" width="100">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" width="100">
                    </header>
                    <p>As I have continued to work within web developement, these tools have become invaluable resources for organization and tracking.</p>
                </li>

                <li>
                    <header>
                        <img src="https://nodejs.org/static/logos/jsIconGreen.svg" alt="Nodejs" width="100">
                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="100">
                        <div style:width="100px" style:display="inline-block"><GithubIcon></GithubIcon></div>
                        <h2><span>[5+ years]</span></h2>
                    </header>
                </li>
            </ul>
        </div>
    </section>
</article>
    
<style>

    .portrait {
        margin: 12px 12px 0px 12px;
        float: left;
        width: 40vw;
        max-width: 320px;
        shape-outside: circle(42%);
    }
    
    .portrait img {
        width: 100%;
        user-select: none;
        pointer-events: none;
        clip-path: circle(42%);
        object-position: 0 19px;
        filter: grayscale(1);
    }

    section {
        margin: 0 auto;
        max-width: 800px;
        padding: 32px;
    }

    p {
        font-size: 1.5rem;
    }

    ul {
        list-style-type: none;
        margin: 0; padding: 0;
    }

    li {
        margin-bottom: 32px;
    }

    .skills img {
        width: min(max(50px, 5vw), 80px);
    }

    .skills span {
        margin: 12px;
        text-transform: uppercase;
        font-size: 1.2rem;
    }
</style>