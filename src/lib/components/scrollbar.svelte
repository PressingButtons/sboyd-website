<script lang="ts">
	import { onMount } from "svelte";

    let scrollbar:HTMLElement;
    let rail:HTMLElement;
    let thumb:HTMLElement;

    let scrollbarSet = false;


    const scrollbarJS = ( ) => {
        console.log('executing');
        const main = document.querySelector('main') as HTMLElement;
        const scrollable = main.querySelector('.main-scrollable') as HTMLElement;
        const article = document.querySelector('article') as HTMLElement;
        let active:boolean = false;
        let fudge:number = 0;
        let ratio:number = 0.5;

        const adjustThumb = ( ) => {
            if( scrollable.scrollHeight > scrollable.clientHeight ) scrollbar.classList.add('active');
            else scrollbar.classList.remove('active');
            console.log(scrollable.scrollHeight, scrollable.clientHeight)
            //@ts-ignore
            ratio = Math.ceil(Math.min(1, scrollbar.clientHeight / article.scrollHeight ) * 100) / 100;
            //@ts-ignore
            const h = Math.ceil( ratio * scrollbar.clientHeight );
            thumb.style.height = h + 'px';
        }

        const getmousepos = (event:MouseEvent) => {
            const element = event.target as HTMLElement;
            const rect = element.getBoundingClientRect( );
            return { x: event.clientX - rect.x, y: event.clientY - rect.y};
        }

        const onscroll = ( ) => {
            const percentage = scrollable.scrollTop / article.scrollHeight;
            //@ts-ignore
            thumb.style.top = Math.ceil(percentage * 100) + '%';
        }

        const onmousedown = (event:MouseEvent) => {
            const pos = getmousepos( event );
            fudge = pos.y;
            active = true;
        }

        const onmousemove = ( event:MouseEvent ) => {
            if( active ) {
                const pos = getmousepos(event);
                const result = ((pos.y - fudge) / scrollable.scrollHeight);
                scrollable.scrollTop += result;
            }
        }

        const onmouseup = (event:MouseEvent) => {
            active = false;
        }

        const setupListeners = ( ) => {
            window.addEventListener('load', scrollbarJS);
            window.addEventListener('resize', adjustThumb);
            document.addEventListener('mouseup', onmouseup);
            scrollable.addEventListener('scroll', onscroll);
            thumb.addEventListener('mousedown', onmousedown);
            scrollbar.addEventListener('mousemove', onmousemove);
        }

        const unbindListeners = ( ) =>{
            window.removeEventListener('load', scrollbarJS);
            document.removeEventListener('mouseup', onmouseup);
            scrollable.removeEventListener('scroll', onscroll);
            thumb.removeEventListener('mousedown', onmousedown)
            scrollbar.removeEventListener('mousemove', onmousemove);
            window.removeEventListener('resize', adjustThumb);
        }

        if(!scrollbarSet) {
            setupListeners( );
            scrollbarSet = true;
            adjustThumb( );
        } else {
            unbindListeners( );
            setupListeners( );
            adjustThumb( );
        }
    }

    onMount(scrollbarJS);

</script>

<scrollbar bind:this={scrollbar}>
    <scrollbar-content>
        <scrollbar-rail bind:this={rail}/>
        <scrollbar-thumb bind:this={thumb}/>
    </scrollbar-content>
</scrollbar>

<style>

    scrollbar, scrollbar-content scrollbar-rail, scrollbar-thumb {
        display: block;
        box-sizing: border-box;
        user-select: none;
    }

    scrollbar, scrollbar-content {
        height: 100%;
    }

    scrollbar {
        position: absolute;
        justify-content: flex-end;
        width: 10vw;
        right: 0; top: 0;
        padding-right: 8px;
        margin-top: calc(var(--border-size) * -1);
        height: calc(100% + var(--border-size));
        display: flex;
    }

    scrollbar:not(.active) {
        display: none;
    }
    scrollbar-content {
        position: relative;
        display: flex;
        justify-content: center;
        width: 20px;
    }

    scrollbar-rail {
        width: var(--border-size);
        background: rgb(var(--foreground-color));
        height: 100%;
    }

    scrollbar-thumb {
        position: absolute;
        min-height: 100px;
        border: 2px solid rgb(var(--foreground-color));
        background-color: rgb(var(--background-color));
        top: 0;
        width: 100%;
        cursor: pointer;
    }

</style>

