<script lang="ts">
    import { onMount } from "svelte";
    import { Gallery, Toggle, Img, Button, Label, Range } from 'flowbite-svelte';
    import { base } from "$app/paths";

    type Img = {
        src: string;
        alt: string;
        exp: string;
        nodes: number;
        stream: boolean;
    };
    let images: Img[] = [];
    onMount(async () => {
        const response = await fetch(`${base}/data.json`);
        images = await response.json();
        filterGallery();
        // images = images.filter(img => ['src/lib/images/exp0/graph155.png', 'src/lib/images/exp0/graph224.png', 'src/lib/images/exp0/graph229.png','src/lib/images/exp0/graph233.png', 'src/lib/images/exp0/graph292.png','src/lib/images/exp0/graph324.png','src/lib/images/exp0/graph331.png','src/lib/images/exp0/graph339.png','src/lib/images/exp0/graph371.png','src/lib/images/exp0/graph441.png','src/lib/images/exp0/graph515.png','src/lib/images/exp0/graph716.png','src/lib/images/exp0/graph722.png','src/lib/images/exp0/graph746.png','src/lib/images/exp0/graph748.png','src/lib/images/exp0/graph759.png','src/lib/images/exp0/graph779.png','src/lib/images/exp0/graph838.png','src/lib/images/exp0/graph910.png','src/lib/images/exp0/graph938.png','src/lib/images/exp0/graph1006.png','src/lib/images/exp0/graph1017.png','src/lib/images/exp0/graph1022.png','src/lib/images/exp0/graph1083.png','src/lib/images/exp0/graph1121.png','src/lib/images/exp0/graph1134.png','src/lib/images/exp0/graph1642.png'].includes(img.src));
    });

    // const images4 = [
    //   {alt: 'xyz', src: `${base}/lib/images/exp0/graph155.png`},
    //   {alt: 'xyz', src: '../lib/images/exp0/graph224.png'},
    //   {alt: 'xyz', src: './lib/images/exp0/graph229.png'},
    //   {alt: 'xyz', src: 'lib/images/exp0/graph233.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph292.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph324.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph331.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph339.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph371.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph441.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph515.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph716.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph722.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph746.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph748.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph759.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph779.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph838.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph910.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph938.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1006.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1017.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1022.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1083.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1121.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1134.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1642.png'},
    //   {alt: 'graph1661, Crossings+asdfasdnkfljads, Obj=23', src: 'src/lib/images/exp0/graph1661.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1674.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1719.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1807.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1808.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1827.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph1912.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2110.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2164.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2218.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2241.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2291.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2294.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2319.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2377.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2615.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2717.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2728.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2773.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2783.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2817.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph2887.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph3112.png'},
    //   {alt: 'xyz', src: 'src/lib/images/exp0/graph3112.png'}
    // ];

    let graphs = ['All', 'graph513', 'graph808', 'graph750', 'graph1068', 'graph1099', 'graph761', 'graph530', 'graph769', 'graph1058', 'graph2339', 'graph912', 'graph747', 'graph536', 'graph516', 'graph576', 'graph594', 'graph1853', 'graph2115', 'graph1615', 'graph1741', 'graph2559', 'graph534', 'graph1618', 'graph2964', 'graph1658', 'graph2354', 'graph624', 'graph2585', 'graph1893', 'graph1835', 'graph242', 'graph1619', 'graph2450', 'graph1546', 'graph1909', 'graph1184', 'graph244', 'graph1766', 'graph2060', 'graph1152', 'graph1397', 'graph1091', 'graph2825', 'graph424', 'graph1341', 'graph1645', 'graph2780', 'graph1988', 'graph879', 'graph1862', 'graph1195', 'graph1127', 'graph1412', 'graph1377', 'graph9919', 'graph2993', 'graph2616', 'graph1923', 'graph2723', 'graph1355', 'graph2517', 'graph1666', 'graph1282', 'graph317', 'graph11427', 'graph1747', 'graph950', 'graph1196', 'graph2677', 'graph2840', 'graph5759', 'graph1445', 'graph11673', 'graph1949', 'graph2452', 'graph6121', 'graph1539', 'graph1206', 'graph1730', 'graph10796', 'graph3061', 'graph11415', 'graph1434', 'graph11013', 'graph10337', 'graph5961', 'graph1785', 'graph2947', 'graph1974', 'graph915', 'graph11611', 'graph10065', 'graph10341', 'graph3930', 'graph3588', 'graph2822', 'graph9874', 'graph2381', 'graph6435', 'graph7659', 'graph10005', 'graph9900', 'graph3534', 'graph5486', 'graph7286', 'graph11662', 'graph6615', 'graph7433', 'graph3751', 'graph3440', 'graph4051', 'graph10846', 'graph6246', 'graph2497', 'graph6814', 'graph6429', 'graph6404', 'graph7658', 'graph3226', 'graph4295', 'graph6127', 'graph8287', 'graph6004', 'graph4249', 'graph9668', 'graph8050', 'graph3564', 'graph9403', 'graph5324', 'graph4522', 'graph9808', 'graph10080', 'graph4128', 'graph5198', 'graph6423', 'graph9041', 'graph6305', 'graph8639', 'graph8693', 'graph5841', 'graph3069', 'graph7777', 'graph7969', 'graph3308', 'graph8466', 'graph10304', 'graph8543', 'graph8201', 'graph4200', 'graph8836', 'graph7174', 'graph11407', 'graph10097', 'graph9308'];
  
    let categories = ["Crossings", "EdgeLength", "CrossingAngle", "CrossingFairness", "LengthFairness", "NodeSymmetry", "EdgeSymmetry", "EdgeBundling", "MinMaxCrossings", "MaxPlanar", "Crossings + EdgeLength", "Crossings + CrossingAngle", "Crossings + CrossingFairness", "Crossings + LengthFairness", "Crossings + NodeSymmetry", "Crossings + EdgeSymmetry", "Crossings + EdgeBundling", "Crossings + MinMaxCrossings", "Crossings + MaxPlanar", "EdgeLength (fixed x)", "CrossingAngle (fixed x)", "LengthFairness (fixed x)", "NodeSymmetry (fixed x)", "EdgeSymmetry (fixed x)", "EdgeLength + CrossingAngle (fixed x)", "EdgeLength + LengthFairness (fixed x)", "EdgeLength + NodeSymmetry (fixed x)", "Bend + EdgeSymmetry (fixed x)"];
    let selectedStream = false;
    let selectedGraph = "All";

    let filters = categories.map(() => false);
    filters[0] = true;
  
    let filteredImages = images;
  
    function filterGallery() {
        if (selectedGraph === "All") {
            filteredImages = images.filter(img => img.stream === selectedStream);
        } else {
            filteredImages = images.filter(img => img.stream === selectedStream && img.alt === selectedGraph);
        }
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

    function selectAll(stidx: number, endidx: number) {
        filters = filters.map((elt, idx) => stidx <= idx && idx < endidx ? true : elt);
        filterGallery();
    }

    function deselectAll(stidx: number, endidx: number) {
        filters = filters.map((elt, idx) => stidx <= idx && idx < endidx ? false : elt);
        filterGallery();
    }

    let visible = true;

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

    // Ensure the sliders never cross
    // function handleMinChange(event: any) {
    //     minValue = Math.min(Number(event.target.value), maxValue - 1);
    // }
    // function handleMaxChange(event: any) {
    //     maxValue = Math.max(Number(event.target.value), minValue + 1);
    // }

  
    // Run the filter function when the category changes
    $: filterGallery();
</script>


<div class="max-w-5xl mx-auto m-2">
    <!-- <div>{JSON.stringify(images)}</div> -->
     <div class="flex items-center mb-2">
        <p class="text-lg text-gray-700 me-5">Filter by Experiment:</p>
        <Button on:click={toggleVisible} class="" color="blue">
            {#if visible}Hide Experiment Filters{/if}
            {#if !visible}Show Experiment Filters{/if}
        </Button>
     </div>

    {#if visible}
    <div class="flex gap-4 items-center mt-3 mb-2">
        <p class="w-64 flex-1 text-sm font-medium text-gray-700">Individual Aesthetic Metrics:</p>
        <Button on:click={() => selectAll(0,10)} class="flex-none" color="alternative">Select All</Button>
        <Button on:click={() => deselectAll(0,10)} class="flex-none" color="alternative">Deselect All</Button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3">
        {#each categories.slice(0, 10) as category, index}
            <Toggle bind:checked={filters[index]} on:change={filterGallery}>{category}</Toggle>
        {/each}
    </div>

    <div class="flex gap-4 items-center mt-3 mb-2">
        <p class="w-64 flex-1 text-sm font-medium text-gray-700">Metric + Crossing Minimization:</p>
        <Button on:click={() => selectAll(10,19)} class="flex-none" color="alternative">Select All</Button>
        <Button on:click={() => deselectAll(10,19)} class="flex-none" color="alternative">Deselect All</Button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3">
        {#each categories.slice(10,19) as category, index}
            <Toggle bind:checked={filters[index + 10]} on:change={filterGallery}>{category}</Toggle>
        {/each}
    </div>

    <div class="flex gap-4 items-center mt-3 mb-2">
        <p class="w-64 flex-1 text-sm font-medium text-gray-700">Y-Metric With Fixed X:</p>
        <Button on:click={() => selectAll(19,24)} class="flex-none" color="alternative">Select All</Button>
        <Button on:click={() => deselectAll(19,24)} class="flex-none" color="alternative">Deselect All</Button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3">
        {#each categories.slice(19,24) as category, index}
            <Toggle bind:checked={filters[index + 19]} on:change={filterGallery}>{category}</Toggle>
        {/each}
    </div>

    <div class="flex gap-4 items-center mt-3 mb-2">
        <p class="w-64 flex-1 text-sm font-medium text-gray-700">Y-Metric + Edge Length Minimization:</p>
        <Button on:click={() => selectAll(24,28)} class="flex-none" color="alternative">Select All</Button>
        <Button on:click={() => deselectAll(24,28)} class="flex-none" color="alternative">Deselect All</Button>
    </div>
    <div class="flex flex-wrap gap-2 mb-3">
        {#each categories.slice(24,28) as category, index}
            <Toggle bind:checked={filters[index + 24]} on:change={filterGallery}>{category}</Toggle>
        {/each}
    </div>
    {/if}


    <div class="mb-4 flex items-center mt-4">
      <label for="graph" class="text-lg text-gray-700">Filter by Graph:</label>
      <div class="ms-5 me-5 w-100">
        <Label>Min nodes: {minValue}</Label>
        <Range id="range-steps" min={minLimit} max={maxLimit} bind:value={minValue} on:change={filterByGraph} step=5 />
      </div>

      <select
        bind:value={selectedGraph}
        on:change={filterGallery}
        class="mt-1 block w-50 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
      >
        {#each graphs as graph}
          <option value={graph}>{graph}</option>
        {/each}
      </select>

      <Toggle bind:checked={selectedStream} on:change={filterGallery} class="flex-none">Streamline!</Toggle>
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
  
    <div class="grid grid-cols-3 gap-4">
      {#each filteredImages as item}
          <div class="relative ring-2 ring-gray-300 p-2 pb-5 rounded-lg">
              <img src={`${base}/${item.src}`} alt={item.alt} class="h-auto max-w-full rounded-lg max-h-60" />
              <div class="absolute bottom-0 left-0 text-gray text-sm p-2 w-full">
                  {#if item.alt}
                      {item.alt}
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