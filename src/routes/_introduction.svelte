<script>
	import Contact from "./_contact.svelte";
    import pdf from '$lib/documents/Resume 2023-2.pdf';
</script>

<style>
    span {
        text-decoration: line-through
    }
</style>

<article id="introduction">
    <header>
        <h2>Hi Everybody!</h2>
        <h4><span>Hi Dr.Nick</span> I'm Steven Boyd a Freelance Web-developer</h4>
        <h6>Learning and growing one project at a time.</h6>
    </header>
    <main>
        <p>Salutations! Thank you for visiting my website. From Here you can find examples of my work and musings.</p>
        <p>This also serves as a reflection of developer journey, so expect updates and features down the line.</p>
        <p>You can view more regarding my work history and contact information <a href="{pdf}" target="_blank">here</a></p>
        <!--
            <Contact></Contact>
        -->
    </main>
</article>