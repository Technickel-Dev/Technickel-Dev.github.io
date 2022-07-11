<script>
  import NavLink from "./nav_link.svelte";

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = () => {
    isOpen = false;
  };
</script>

<nav class="flex items-center justify-between flex-wrap bg-sky-500 p-4 shadow-lg shadow-black">
  <a href="/" on:click={closeMenu} class="flex items-center flex-shrink-0 mr-6">
    <img
      class="h-8 w-8 mr-2"
      src="/coin.svg"
      alt="The Technickel logo, a 5 cent Canadian coin (nickel)"
    />
    <span class="font-bold text-2xl tracking-tight text-white">TECHNICKEL</span>
  </a>
  <div class="block sm:hidden">
    <button
      class="flex items-center px-3 py-2 rounded text-sky-200 border-sky-400 hover:text-white hover:border-white"
      on:click={toggleMenu}
    >
      <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
      >
    </button>
  </div>
  <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
    <div class="text-sm sm:flex-grow">
      <NavLink url="https://technickel.dev/blog/" rel="external" title="Blog" {isOpen} on:nav={closeMenu} />
      <NavLink url="/projects" title="Projects" {isOpen} on:nav={closeMenu} />
      <NavLink url="/contact" title="Contact" {isOpen} on:nav={closeMenu} />
      <NavLink url="/support" title="Support" {isOpen} on:nav={closeMenu} />
    </div>
  </div>
</nav>
