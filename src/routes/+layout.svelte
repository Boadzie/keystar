<script>
	import tabler from 'yesvelte/css/tabler.min.css?url';
	import 'uno.css';
	import { Navbar, NavbarItem } from 'yesvelte';
</script>

<svelte:head>
	<link rel="stylesheet" href={tabler} />
</svelte:head>
<Navbar class="font-bold">
	<NavbarItem class="hover:text-blue-500" icon="home" title="Home" />
	<NavbarItem class="hover:text-blue-500" icon="phone" title="About" />
</Navbar>
<main>
	<slot />
</main>
