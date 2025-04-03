<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import logo from '../../lib/assets/nodesize.svg';
    import { base } from '$app/paths';
    import { page } from '$app/state';
    $: activeUrl = page.url.pathname;
    let activeClass = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

<Navbar class="w-full px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
<NavBrand href="{base}/">
    <img src={logo} class="me-3 h-6 sm:h-9" alt="Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Gallery of Optimal Layered Graph Aesthetics</span>
</NavBrand>
<NavHamburger />
<NavUl {activeUrl} {activeClass} {nonActiveClass}>
    <NavLi href="{base}/gallery">Gallery</NavLi>
    <NavLi href="{base}/">About</NavLi>
</NavUl>
</Navbar>