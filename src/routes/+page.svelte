<script>
    import Navbar from "./navbar/navbar.svelte";
    import { GradientButton } from "flowbite-svelte";
    import { base } from '$app/paths';
</script>

<!-- <Navbar/> -->
<div class="max-w-4xl mx-auto mt-0 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <p class="text-lg md:text-xl text-gray-600 text-center mb-3 max-w-2xl">
        We present:
    </p>
    <p class="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10">CINDER: An expressive framework for optimal layered graph layouts</p>

    <div class="bg-white p-6 md:p-10 rounded-2xl shadow-lg max-w-3xl text-center space-y-6">
        <p class="text-lg leading-relaxed">
            This site has layouts for a subset of the graphs optimized in our experimental evaluation of CINDER.
            Specifically, our gallery contains 150 randomly sampled Rome-lib graphs when optimized according to 28 different aesthetic metrics/combinations of aesthetic metrics, to demonstrate that CINDER is expressive with respect to different graph layout aesthetic criteria.
            We also include all layouts with & without streamlining constraints.
            This is over 6000 layouts, so the gallery may take a few seconds to load!
        </p>
        <p class="text-lg leading-relaxed">
            For a full copy of our paper, which contains definitions for all models used to genrate these layouts, check out <a class="underline text-blue-600 hover:text-blue-800" href="https://osf.io/9cywt/?view_only=3c6834305db44d148fafc933efe665d8">osf.io/9cywt/</a>.
            Rome-lib is downloadable at <a class="underline text-blue-600 hover:text-blue-800" href="https://visdunneright.github.io/gd_benchmark_sets/">visdunneright.github.io/gd_benchmark_sets/</a>.
        </p>
        <div class="flex max-w-3xl justify-center"><GradientButton outline class="w-50 flex-none" size="lg" color="greenToBlue" href="{base}/gallery">View the Gallery!</GradientButton></div>
    </div>
</div>