<script lang="ts">
    import { onMount } from "svelte";
    import { Gallery, Toggle, Img, Button, Label, Range, Dropdown, DropdownItem, Checkbox, Search, Hr } from 'flowbite-svelte';
    import { base } from "$app/paths";
    import { Popover } from 'flowbite-svelte';
    import { QuestionCircleSolid, ChevronDownOutline, AdjustmentsHorizontalOutline } from 'flowbite-svelte-icons';

    type Img = {
        src: string;
        alt: string;
        exp: string;
        obj: number;
        shortexp: string;
        color: string;
        nodes: number;
        stream: boolean;
    };
    let images: Img[] = [];
    onMount(async () => {
        const response = await fetch(`${base}/data.json`);
        images = await response.json();
        const cats = ["Crossings", "EdgeLength", "CrossingAngle", "CrossingFairness", "LengthFairness", "NodeSymmetry", "EdgeSymmetry", "EdgeBundling", "MinMaxCrossings", "MaxPlanar", "Crossings + EdgeLength", "Crossings + CrossingAngle", "Crossings + CrossingFairness", "Crossings + LengthFairness", "Crossings + NodeSymmetry", "Crossings + EdgeSymmetry", "Crossings + EdgeBundling", "Crossings + MinMaxCrossings", "Crossings + MaxPlanar", "EdgeLength (fixed x)", "CrossingAngle (fixed x)", "LengthFairness (fixed x)", "NodeSymmetry (fixed x)", "EdgeSymmetry (fixed x)", "EdgeLength + CrossingAngle (fixed x)", "EdgeLength + LengthFairness (fixed x)", "EdgeLength + NodeSymmetry (fixed x)", "Bend + EdgeSymmetry (fixed x)"];
        const catsshort = ["Cr", "EL", "Angle", "CrFair", "ELFair", "NSym", "ESym", "Bundle", "MinMax", "Planar", "Cr+EL", "Cr+Angle", "Cr+CrFair", "Cr+ELFair", "Cr+NSym", "Cr+ESym", "Cr+Bundle", "Cr+MinMax", "Cr+Planar", "EL (fix)", "Angle (fix)", "ELFair (fix)", "NSym (fix)", "ESym (fix)", "EL+Angle", "EL+ELFair", "EL+NSym", "EL+ESym"];
        images = images.map(img => ({...img, shortexp: catsshort[cats.indexOf(img.exp)], color: `color-${cats.indexOf(img.exp)+1}`}));
        filterGallery();
        // images = images.filter(img => ['src/lib/images/exp0/graph155.png', 'src/lib/images/exp0/graph224.png', 'src/lib/images/exp0/graph229.png','src/lib/images/exp0/graph233.png', 'src/lib/images/exp0/graph292.png','src/lib/images/exp0/graph324.png','src/lib/images/exp0/graph331.png','src/lib/images/exp0/graph339.png','src/lib/images/exp0/graph371.png','src/lib/images/exp0/graph441.png','src/lib/images/exp0/graph515.png','src/lib/images/exp0/graph716.png','src/lib/images/exp0/graph722.png','src/lib/images/exp0/graph746.png','src/lib/images/exp0/graph748.png','src/lib/images/exp0/graph759.png','src/lib/images/exp0/graph779.png','src/lib/images/exp0/graph838.png','src/lib/images/exp0/graph910.png','src/lib/images/exp0/graph938.png','src/lib/images/exp0/graph1006.png','src/lib/images/exp0/graph1017.png','src/lib/images/exp0/graph1022.png','src/lib/images/exp0/graph1083.png','src/lib/images/exp0/graph1121.png','src/lib/images/exp0/graph1134.png','src/lib/images/exp0/graph1642.png'].includes(img.src));
    });

    const graphNames = ['graph513', 'graph808', 'graph750', 'graph1068', 'graph1099', 'graph761', 'graph530', 'graph769', 'graph1058', 'graph2339', 'graph912', 'graph747', 'graph536', 'graph516', 'graph576', 'graph594', 'graph1853', 'graph2115', 'graph1615', 'graph1741', 'graph2559', 'graph534', 'graph1618', 'graph2964', 'graph1658', 'graph2354', 'graph624', 'graph2585', 'graph1893', 'graph1835', 'graph242', 'graph1619', 'graph2450', 'graph1546', 'graph1909', 'graph1184', 'graph244', 'graph1766', 'graph2060', 'graph1152', 'graph1397', 'graph1091', 'graph2825', 'graph424', 'graph1341', 'graph1645', 'graph2780', 'graph1988', 'graph879', 'graph1862', 'graph1195', 'graph1127', 'graph1412', 'graph1377', 'graph9919', 'graph2993', 'graph2616', 'graph1923', 'graph2723', 'graph1355', 'graph2517', 'graph1666', 'graph1282', 'graph317', 'graph11427', 'graph1747', 'graph950', 'graph1196', 'graph2677', 'graph2840', 'graph5759', 'graph1445', 'graph11673', 'graph1949', 'graph2452', 'graph6121', 'graph1539', 'graph1206', 'graph1730', 'graph10796', 'graph3061', 'graph11415', 'graph1434', 'graph11013', 'graph10337', 'graph5961', 'graph1785', 'graph2947', 'graph1974', 'graph915', 'graph11611', 'graph10065', 'graph10341', 'graph3930', 'graph3588', 'graph2822', 'graph9874', 'graph2381', 'graph6435', 'graph7659', 'graph10005', 'graph9900', 'graph3534', 'graph5486', 'graph7286', 'graph11662', 'graph6615', 'graph7433', 'graph3751', 'graph3440', 'graph4051', 'graph10846', 'graph6246', 'graph2497', 'graph6814', 'graph6429', 'graph6404', 'graph7658', 'graph3226', 'graph4295', 'graph6127', 'graph8287', 'graph6004', 'graph4249', 'graph9668', 'graph8050', 'graph3564', 'graph9403', 'graph5324', 'graph4522', 'graph9808', 'graph10080', 'graph4128', 'graph5198', 'graph6423', 'graph9041', 'graph6305', 'graph8639', 'graph8693', 'graph5841', 'graph3069', 'graph7777', 'graph7969', 'graph3308', 'graph8466', 'graph10304', 'graph8543', 'graph8201', 'graph4200', 'graph8836', 'graph7174', 'graph11407', 'graph10097', 'graph9308'];
    let graphs = [{'name': 'graph513', 'checked': true}, {'name': 'graph808', 'checked': true}, {'name': 'graph750', 'checked': true}, {'name': 'graph1068', 'checked': true}, {'name': 'graph1099', 'checked': true}, {'name': 'graph761', 'checked': true}, {'name': 'graph530', 'checked': true}, {'name': 'graph769', 'checked': true}, {'name': 'graph1058', 'checked': true}, {'name': 'graph2339', 'checked': true}, {'name': 'graph912', 'checked': true}, {'name': 'graph747', 'checked': true}, {'name': 'graph536', 'checked': true}, {'name': 'graph516', 'checked': true}, {'name': 'graph576', 'checked': true}, {'name': 'graph594', 'checked': true}, {'name': 'graph1853', 'checked': true}, {'name': 'graph2115', 'checked': true}, {'name': 'graph1615', 'checked': true}, {'name': 'graph1741', 'checked': true}, {'name': 'graph2559', 'checked': true}, {'name': 'graph534', 'checked': true}, {'name': 'graph1618', 'checked': true}, {'name': 'graph2964', 'checked': true}, {'name': 'graph1658', 'checked': true}, {'name': 'graph2354', 'checked': true}, {'name': 'graph624', 'checked': true}, {'name': 'graph2585', 'checked': true}, {'name': 'graph1893', 'checked': true}, {'name': 'graph1835', 'checked': true}, {'name': 'graph242', 'checked': true}, {'name': 'graph1619', 'checked': true}, {'name': 'graph2450', 'checked': true}, {'name': 'graph1546', 'checked': true}, {'name': 'graph1909', 'checked': true}, {'name': 'graph1184', 'checked': true}, {'name': 'graph244', 'checked': true}, {'name': 'graph1766', 'checked': true}, {'name': 'graph2060', 'checked': true}, {'name': 'graph1152', 'checked': true}, {'name': 'graph1397', 'checked': true}, {'name': 'graph1091', 'checked': true}, {'name': 'graph2825', 'checked': true}, {'name': 'graph424', 'checked': true}, {'name': 'graph1341', 'checked': true}, {'name': 'graph1645', 'checked': true}, {'name': 'graph2780', 'checked': true}, {'name': 'graph1988', 'checked': true}, {'name': 'graph879', 'checked': true}, {'name': 'graph1862', 'checked': true}, {'name': 'graph1195', 'checked': true}, {'name': 'graph1127', 'checked': true}, {'name': 'graph1412', 'checked': true}, {'name': 'graph1377', 'checked': true}, {'name': 'graph9919', 'checked': true}, {'name': 'graph2993', 'checked': true}, {'name': 'graph2616', 'checked': true}, {'name': 'graph1923', 'checked': true}, {'name': 'graph2723', 'checked': true}, {'name': 'graph1355', 'checked': true}, {'name': 'graph2517', 'checked': true}, {'name': 'graph1666', 'checked': true}, {'name': 'graph1282', 'checked': true}, {'name': 'graph317', 'checked': true}, {'name': 'graph11427', 'checked': true}, {'name': 'graph1747', 'checked': true}, {'name': 'graph950', 'checked': true}, {'name': 'graph1196', 'checked': true}, {'name': 'graph2677', 'checked': true}, {'name': 'graph2840', 'checked': true}, {'name': 'graph5759', 'checked': true}, {'name': 'graph1445', 'checked': true}, {'name': 'graph11673', 'checked': true}, {'name': 'graph1949', 'checked': true}, {'name': 'graph2452', 'checked': true}, {'name': 'graph6121', 'checked': true}, {'name': 'graph1539', 'checked': true}, {'name': 'graph1206', 'checked': true}, {'name': 'graph1730', 'checked': true}, {'name': 'graph10796', 'checked': true}, {'name': 'graph3061', 'checked': true}, {'name': 'graph11415', 'checked': true}, {'name': 'graph1434', 'checked': true}, {'name': 'graph11013', 'checked': true}, {'name': 'graph10337', 'checked': true}, {'name': 'graph5961', 'checked': true}, {'name': 'graph1785', 'checked': true}, {'name': 'graph2947', 'checked': true}, {'name': 'graph1974', 'checked': true}, {'name': 'graph915', 'checked': true}, {'name': 'graph11611', 'checked': true}, {'name': 'graph10065', 'checked': true}, {'name': 'graph10341', 'checked': true}, {'name': 'graph3930', 'checked': true}, {'name': 'graph3588', 'checked': true}, {'name': 'graph2822', 'checked': true}, {'name': 'graph9874', 'checked': true}, {'name': 'graph2381', 'checked': true}, {'name': 'graph6435', 'checked': true}, {'name': 'graph7659', 'checked': true}, {'name': 'graph10005', 'checked': true}, {'name': 'graph9900', 'checked': true}, {'name': 'graph3534', 'checked': true}, {'name': 'graph5486', 'checked': true}, {'name': 'graph7286', 'checked': true}, {'name': 'graph11662', 'checked': true}, {'name': 'graph6615', 'checked': true}, {'name': 'graph7433', 'checked': true}, {'name': 'graph3751', 'checked': true}, {'name': 'graph3440', 'checked': true}, {'name': 'graph4051', 'checked': true}, {'name': 'graph10846', 'checked': true}, {'name': 'graph6246', 'checked': true}, {'name': 'graph2497', 'checked': true}, {'name': 'graph6814', 'checked': true}, {'name': 'graph6429', 'checked': true}, {'name': 'graph6404', 'checked': true}, {'name': 'graph7658', 'checked': true}, {'name': 'graph3226', 'checked': true}, {'name': 'graph4295', 'checked': true}, {'name': 'graph6127', 'checked': true}, {'name': 'graph8287', 'checked': true}, {'name': 'graph6004', 'checked': true}, {'name': 'graph4249', 'checked': true}, {'name': 'graph9668', 'checked': true}, {'name': 'graph8050', 'checked': true}, {'name': 'graph3564', 'checked': true}, {'name': 'graph9403', 'checked': true}, {'name': 'graph5324', 'checked': true}, {'name': 'graph4522', 'checked': true}, {'name': 'graph9808', 'checked': true}, {'name': 'graph10080', 'checked': true}, {'name': 'graph4128', 'checked': true}, {'name': 'graph5198', 'checked': true}, {'name': 'graph6423', 'checked': true}, {'name': 'graph9041', 'checked': true}, {'name': 'graph6305', 'checked': true}, {'name': 'graph8639', 'checked': true}, {'name': 'graph8693', 'checked': true}, {'name': 'graph5841', 'checked': true}, {'name': 'graph3069', 'checked': true}, {'name': 'graph7777', 'checked': true}, {'name': 'graph7969', 'checked': true}, {'name': 'graph3308', 'checked': true}, {'name': 'graph8466', 'checked': true}, {'name': 'graph10304', 'checked': true}, {'name': 'graph8543', 'checked': true}, {'name': 'graph8201', 'checked': true}, {'name': 'graph4200', 'checked': true}, {'name': 'graph8836', 'checked': true}, {'name': 'graph7174', 'checked': true}, {'name': 'graph11407', 'checked': true}, {'name': 'graph10097', 'checked': true}, {'name': 'graph9308', 'checked': true}]
    let allGraphs = true;


    let categories = ["Crossings", "EdgeLength", "CrossingAngle", "CrossingFairness", "LengthFairness", "NodeSymmetry", "EdgeSymmetry", "EdgeBundling", "MinMaxCrossings", "MaxPlanar", "Crossings + EdgeLength", "Crossings + CrossingAngle", "Crossings + CrossingFairness", "Crossings + LengthFairness", "Crossings + NodeSymmetry", "Crossings + EdgeSymmetry", "Crossings + EdgeBundling", "Crossings + MinMaxCrossings", "Crossings + MaxPlanar", "EdgeLength (fixed x)", "CrossingAngle (fixed x)", "LengthFairness (fixed x)", "NodeSymmetry (fixed x)", "EdgeSymmetry (fixed x)", "EdgeLength + CrossingAngle (fixed x)", "EdgeLength + LengthFairness (fixed x)", "EdgeLength + NodeSymmetry (fixed x)", "Bend + EdgeSymmetry (fixed x)"];
    // const categories_short = ["Cr", "EL", "Angle", "CrFair", "ELFair", "NSym", "ESym", "Bundle", "MinMax", "Planar", "Cr+EL", "Cr+Angle", "Cr+CrFair", "Cr+ELFair", "Cr+NSym", "Cr+ESym", "Cr+Bundle", "Cr+MinMax", "Cr+Planar", "EL (fix)", "Angle (fix)", "ELFair (fix)", "NSym (fix)", "ESym (fix)", "EL+Angle (fix)", "EL+ELFair (fix)", "EL+NSym (fix)", "EL+ESym (fix)"];
    let selectedStream = false;
    let selectedGraph = "All";

    let filters = categories.map(() => false);
    filters[0] = true;
    filters[10] = true;
    filters[24] = true;
  
    let filteredImages = images;
  
    function filterGallery() {
        // if (selectedGraph === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream);
        // } else {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.alt === selectedGraph);
        // }
        const allGChecked = graphs.every(gr => gr.checked);
        allGraphs = allGChecked;
        filteredImages = images.filter(img => graphs[graphNames.indexOf(img.alt)].checked && img.stream === selectedStream);
        filteredImages = filteredImages.filter(item =>
            filters[categories.indexOf(item.exp)]
        );
        filteredImages = filteredImages.filter(item =>
            item.nodes >= minValue
        )

        // if (selectedExp === "All" && selectedGraph === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream);
        // } else if (selectedExp === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.src === selectedGraph);
        // } else if (selectedGraph === "All") {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.exp === selectedExp);
        // } else {
        //     filteredImages = images.filter(img => img.stream === selectedStream && img.src === selectedGraph && img.exp === selectedExp);
        // }
    }

    function showAllGraphs() {
        if (allGraphs) {
            graphs = graphs.map(gr => ({...gr, checked: true}));
        } else {
            graphs = graphs.map(gr => ({...gr, checked: false}));
            minValue = 10;
        }
        filterGallery();
    }

    function selectAll(stidx: number, endidx: number) {
        filters = filters.map((elt, idx) => stidx <= idx && idx < endidx ? true : elt);
        filterGallery();
    }

    function deselectAll(stidx: number, endidx: number) {
        filters = filters.map((elt, idx) => stidx <= idx && idx < endidx ? false : elt);
        filterGallery();
    }

    let visible = false;

    function toggleVisible() {
        visible = !visible
    }

    function filterByGraph() {
        // minValue = 10;
        filterGallery();
    }


    let minValue = 10;
    // let maxValue = 250;
    const minLimit = 10;
    const maxLimit = 200;

    let searchTerm = '';
    $: filteredGraphs = graphs.filter((gr) => gr.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1);
  
    // Run the filter function when the category changes
    $: filterGallery();
</script>


<div class="max-w-5xl mx-auto m-2">
    <!-- <div>{JSON.stringify(filteredImages)}</div> -->
    <div class="sticky-div rounded-br-lg rounded-bl-lg">
        <div class="flex items-center mb-2">
            <!-- <label for="graph" class="text-lg text-gray-700">Filter by Graph:</label> -->
            <!-- <div class="flex-grow"></div> -->
            <div class="ms-3 me-3 w-75">
                <Label>Min nodes: {minValue}</Label>
                <Range id="range-steps" min={minLimit} max={maxLimit} bind:value={minValue} on:change={filterByGraph} step=5 />
            </div>

            <Toggle bind:checked={selectedStream} on:change={filterGallery} class="me-3" color="teal">Toggle Streamlining</Toggle>

            <div class="flex-grow"></div>

            <Button outline color="green" class="me-3">Filter by Graph<ChevronDownOutline class="w-4 h-4 ms-2 text-blue dark:text-white" /></Button>
            <Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44 me-3" placement='bottom'>
                <div slot="header" class="p-3">
                <Search size="md" bind:value={searchTerm}/>
                <Checkbox bind:checked={allGraphs} on:change={showAllGraphs} class="mt-2" color="green">Show All</Checkbox>
                </div>
                {#each filteredGraphs as graph (graph.name)}
                <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox bind:checked={graph.checked} on:change={filterGallery} color="green">{graph.name}</Checkbox>
                </li>
                {/each}
            </Dropdown>
            <!-- <select
                bind:value={selectedGraph}
                on:change={filterGallery}
                class="mt-1 block w-50 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
                {#each graphs as graph}
                <option value={graph}>{graph}</option>
                {/each}
            </select> -->
            
            <Button on:click={toggleVisible} class="me-3" color="blue">
                <AdjustmentsHorizontalOutline class="pe-1" /> Filter by Experiment
            </Button>
        </div>

        {#if visible}
        <Hr/>
        <div class="flex gap-4 items-center mt-3 mb-2">
            <p class="w-64 flex-1 text-sm font-medium text-gray-700">
                Individual Aesthetic Metrics
                <button id="b3">
                    <QuestionCircleSolid class="w-5 h-5 ms-1" />
                    <span class="sr-only">Show information</span>
                </button>
                <Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Aesthetics Evaluation Part 1</h3>
                      Each experiment in this section was run with constraints for only 1 aesthetic metric added to the model.
                      This makes some of the results rather silly-looking (crossing angle, symmetry, etc.), as some metrics are meant to be run in combination with others.
                    </div>
                </Popover>
            </p>
            <Button on:click={() => selectAll(0,10)} class="flex-none" outline color="blue">Select All</Button>
            <Button on:click={() => deselectAll(0,10)} class="flex-none" outline color="dark">Deselect All</Button>
        </div>
        <div class="flex flex-wrap gap-2 mb-3">
            {#each categories.slice(0, 10) as category, index}
                <Checkbox bind:checked={filters[index]} on:change={filterGallery} color="blue">{category}</Checkbox>
            {/each}
        </div>

        <div class="flex gap-4 items-center mt-3 mb-2">
            <p class="w-64 flex-1 text-sm font-medium text-gray-700">
                Metric + Crossing Minimization
                <button id="b4">
                    <QuestionCircleSolid class="w-5 h-5 ms-1" />
                    <span class="sr-only">Show information</span>
                </button>
                <Popover triggeredBy="#b4" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Aesthetics Evaluation Part 2</h3>
                      Each experiment in this section was run with all constraints for each given metric, plus constraints for crossing minimization.
                      The overall objective function minimized is the sum of the two objectives.
                      Again, some results will look off due to the layouts only optimizing relative positions.
                    </div>
                </Popover>
            </p>
            <Button on:click={() => selectAll(10,19)} class="flex-none" outline color="blue">Select All</Button>
            <Button on:click={() => deselectAll(10,19)} class="flex-none" outline color="dark">Deselect All</Button>
        </div>
        <div class="flex flex-wrap gap-2 mb-3">
            {#each categories.slice(10,19) as category, index}
                <Checkbox bind:checked={filters[index + 10]} on:change={filterGallery} color="blue">{category}</Checkbox>
            {/each}
        </div>

        <div class="flex gap-4 items-center mt-3 mb-2">
            <p class="w-64 flex-1 text-sm font-medium text-gray-700">
                Y-Metric With Fixed X
                <button id="b5">
                    <QuestionCircleSolid class="w-5 h-5 ms-1" />
                    <span class="sr-only">Show information</span>
                </button>
                <Popover triggeredBy="#b5" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Aesthetics Evaluation Part 3</h3>
                      Only metrics which optimize node y-positions were run in this section.
                      Relative node positions were determined prior to any optimization (and then fixed during optimization), using the global sifting heuristic for crossing reduction.<br/>
                      Fixing relative positions makes optimization much faster: for instance, edge length reduction times out often when run individually, but always completes in less than a second when relative positions are fixed.
                    </div>
                </Popover>
            </p>
            <Button on:click={() => selectAll(19,24)} class="flex-none" outline color="blue">Select All</Button>
            <Button on:click={() => deselectAll(19,24)} class="flex-none" outline color="dark">Deselect All</Button>
        </div>
        <div class="flex flex-wrap gap-2 mb-3">
            {#each categories.slice(19,24) as category, index}
                <Checkbox bind:checked={filters[index + 19]} on:change={filterGallery} color="blue">{category}</Checkbox>
            {/each}
        </div>

        <div class="flex gap-4 items-center mt-3 mb-2">
            <p class="w-64 flex-1 text-sm font-medium text-gray-700">Y-Metric + Edge Length Minimization
                <button id="b6">
                    <QuestionCircleSolid class="w-5 h-5 ms-1" />
                    <span class="sr-only">Show information</span>
                </button>
                <Popover triggeredBy="#b6" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Aesthetics Evaluation Part 4</h3>
                      The experiments in this section are identical to section 3, but with edge length minimization added to the model via linear combination.
                      So, the layouts in this section should be most appealing since they include crossing reduction, optimal edge length minimization, and a third aesthetic optimization.
                    </div>
                </Popover>
            </p>
            <Button on:click={() => selectAll(24,28)} class="flex-none" outline color="blue">Select All</Button>
            <Button on:click={() => deselectAll(24,28)} class="flex-none" outline color="dark">Deselect All</Button>
        </div>
        <div class="flex flex-wrap gap-2 mb-3">
            {#each categories.slice(24,28) as category, index}
                <Checkbox bind:checked={filters[index + 24]} on:change={filterGallery} color="blue">{category}</Checkbox>
            {/each}
        </div>
        {/if}
    </div>

    <!-- <div class="p-4 space-y-4"> -->
          <!-- Min Slider -->
        <!-- <input
            type="range"
            min={minLimit}
            max={maxLimit}
            step="1"
            bind:value={minValue}
            on:input={handleMinChange}
            class="w-full accent-blue-500"
        /> -->
    
        <!-- Max Slider -->
        <!-- <input
            type="range"
            min={minLimit}
            max={maxLimit}
            step="1"
            bind:value={maxValue}
            on:input={handleMaxChange}
            class="w-full accent-green-500"
        /> -->
    
        <!-- Range Display -->
        <!-- <div class="flex justify-between text-sm text-gray-600">
            <span>Min: {minValue}</span>
            <span>Max: {maxValue}</span>
        </div> -->
    
        <!-- Visual Representation of Range -->
        <!-- <div class="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
            <div
                class="absolute h-full bg-blue-500"
                style="left: {minValue}%; width: {maxValue - minValue}%"
            ></div>
        </div> -->
    <!-- </div> -->
  
    <div class="grid grid-cols-3 gap-4 p-2 mt-5">
      {#each filteredImages as item}
        <!-- ring-2 ring-gray-300 -->
        <div class="relative ring-2 ring-gray-300 p-2 pb-5 rounded-lg">

        <!-- <div class={`relative border-3 ${item.color} p-2 pb-5 rounded-lg`}> -->
            {#if item.src !== "images/incomplete.png"}
              <img src={`${base}/${item.src}`} alt={item.alt} class="h-auto max-w-full rounded-lg max-h-60" />
            {:else}
              <p class="font-bold pb-4">Did not complete within 10 minutes</p>
            {/if}
              <div class="absolute bottom-0 left-0 text-gray text-sm p-2 w-full">
                  {#if item.alt}
                    <span class={`${item.color} font-bold`}>{item.shortexp}</span> / {item.alt} (N={item.nodes})
                  {/if}
              </div>
        </div>
      {/each}
    </div>

    <!-- <Gallery items={images4} class="gap-4 grid-cols-2 md:grid-cols-4 m-2" let:item>
      <div class="h-auto max-w-full max-h-60 mb-4">
        <Img src={item.src} alt={item.alt} class="max-h-60" caption="{item.alt}" />
      </div>
    </Gallery> -->
    <!-- <Gallery items={filteredImages} class="gap-4 grid-cols-2 md:grid-cols-4 m-2"></Gallery> -->
</div>



<style>
    .navbar {
      /* Your NavBar styling */
      background-color: #333;
      color: white;
      padding: 10px;
      position: relative;
      z-index: 10;
    }
  
    .sticky-div {
      position: sticky;
      top: 20px; /* Adjust this to match the height of your NavBar */
      background-color: #f8f8f8;
      padding: 20px;
      padding-top: 71px;
      border: 1px solid #ddd;
      z-index: 15; /* Ensure it's behind the navbar if overlapping */
      max-height: calc(100vh); /* Prevent overflow beyond the viewport */
      overflow: visible;
    }

    .color-1 { color: hsl(344, 22%, 43%); }
    .color-2 { color: hsl(61, 24%, 43%); }
    .color-3 { color: hsl(292, 28%, 55%); }
    .color-4 { color: hsl(150, 35%, 52%); }
    .color-5 { color: hsl(28, 32%, 58%); }
    .color-6 { color: hsl(201, 10%, 52%); }
    .color-7 { color: hsl(111, 13%, 70%); }
    .color-8 { color: hsl(190, 19%, 53%); }
    .color-9 { color: hsl(325, 13%, 65%); }
    .color-10 { color: hsl(242, 32%, 43%); }
    .color-11 { color: hsl(243, 22%, 57%); }
    .color-12 { color: hsl(345, 40%, 48%); }
    .color-13 { color: hsl(358, 18%, 55%); }
    .color-14 { color: hsl(118, 38%, 67%); }
    .color-15 { color: hsl(163, 33%, 70%); }
    .color-16 { color: hsl(87, 40%, 66%); }
    .color-17 { color: hsl(105, 38%, 51%); }
    .color-18 { color: hsl(7, 14%, 62%); }
    .color-19 { color: hsl(65, 25%, 43%); }
    .color-20 { color: hsl(278, 13%, 63%); }
    .color-21 { color: hsl(351, 27%, 41%); }
    .color-22 { color: hsl(73, 37%, 40%); }
    .color-23 { color: hsl(234, 10%, 55%); }
    .color-24 { color: hsl(305, 33%, 48%); }
    .color-25 { color: hsl(62, 17%, 48%); }
    .color-26 { color: hsl(71, 24%, 70%); }
    .color-27 { color: hsl(341, 17%, 53%); }
    .color-28 { color: hsl(260, 27%, 55%); }
</style>