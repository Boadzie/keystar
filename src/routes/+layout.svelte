<script>
	import tabler from 'yesvelte/css/tabler.min.css?url';
	import 'uno.css';
	import { Navbar, NavbarItem } from 'yesvelte';
</script>

<svelte:head>
	<link rel="stylesheet" href={tabler} />
</svelte:head>
<Navbar theme="dark">
	<NavbarItem icon="home" title="Home" />
	<NavbarItem icon="star" title="About" />
</Navbar>
<main>
	<slot />
</main>
