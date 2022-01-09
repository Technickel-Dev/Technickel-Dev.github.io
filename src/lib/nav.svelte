<script>
  import NavLink from "./nav_link.svelte";
</script>

<nav class="flex items-center justify-between flex-wrap bg-sky-500 p-4 shadow-lg shadow-black">
  <a href="/" class="flex items-center flex-shrink-0 mr-6">
    <img
      class="h-8 w-8 mr-2"
      src="technickel_logo.svg"
      alt="The Technickel logo, a 5 cent Canadian coin (nickel)"
    />
    <span class="font-semibold text-xl tracking-tight">TECHNICKEL</span>
  </a>
  <div class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-sky-200 border-sky-400 hover:text-white hover:border-white"
    >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
      >
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <NavLink url="/blog" title="Blog" />
      <NavLink url="/projects" title="Projects" />
      <NavLink url="/contact" title="Contact" />
      <NavLink url="/support" title="Support" />
    </div>
  </div>
</nav>
