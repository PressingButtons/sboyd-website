<script>
    let microSize = 16;
    let macroSize = 80;
    let blue = "#009"
</script>


<svg viewBox="0 0 800 640">
    <defs>
        <pattern id='microGrid' width="{microSize}" height="{microSize}" patternUnits="userSpaceOnUse">
            <path d="M {microSize} 0 L 0 0 0 {microSize}" fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1"/>
        </pattern>

        <pattern id="macroGrid" width="{macroSize}" height="{macroSize}" patternUnits="userSpaceOnUse">
            <rect width={macroSize} height={macroSize} fill="url(#microGrid)"/>
            <path d="M {macroSize} 0 L 0 0 0 {macroSize}" fill="none" stroke="rgba(255, 255, 255, 0.5)" stroke-width="2"/>
        </pattern>
    </defs>
    <!-- blueprint paper -->
    <rect width="100%" height="100%" fill="url(#macroGrid)"/>

    <!-- sketches -->
    <g class='desktop'>
        <rect width="400" height="325" fill="{blue}" stroke="white" rx=20></rect>
    </g>

</svg>

<style>
    svg { background: #009; }

    .desktop {
        transform: translate(25%, 20%);
    }
</style>