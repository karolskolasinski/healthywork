class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
<header class="z-10 sticky top-0 bg-white md:bg-white/70 md:backdrop-blur-md">
  <div class="flex justify-between items-center p-4 md:px-16 max-w-7xl mx-auto">
    <a href="../index.html" class="flex gap-2 items-center">
      <img src="/img/logo.svg" alt="logo" class="w-6 xs:w-7" />
      <div class="flex flex-col font-black text-xl leading-4 xs:text-2xl xs:leading-4.5">
        <div class="text-indigo-500">healthy</div>
        <div class="tracking-tight">work</div>
      </div>
    </a>

    <nav class="hidden md:flex items-center gap-6">
      <a href="index.html#about" class="hover:text-indigo-500 duration-100 ease-in-out">O nas</a>
      <a href="index.html#services" class="hover:text-indigo-500 duration-100 ease-in-out">
        Jak to działa?
      </a>
      <a href="index.html#reviews" class="hover:text-indigo-500 duration-100 ease-in-out">Opinie</a>
      <a href="index.html#contact" class="hover:text-indigo-500 duration-100 ease-in-out">Kontakt</a>
    </nav>

    <nav class="md:hidden">
      <div class="relative flex items-center">
        <input
          id="hamburger"
          type="checkbox"
          class="peer opacity-0 w-0 h-[26px] cursor-pointer"
        />
        <label
          for="hamburger"
          class="absolute top-0 right-0 w-[26px] h-[26px] z-10 flex items-center justify-center cursor-pointer before:absolute before:w-full before:h-[2px] before:bg-gray-700 before:-translate-y-[8px] before:transition-all after:absolute after:w-full after:h-[2px] after:bg-gray-700 after:translate-y-[8px] after:transition-all peer-checked:rotate-45 peer-checked:before:translate-y-0 peer-checked:before:rotate-0 peer-checked:after:translate-y-0 peer-checked:after:rotate-90 transition-transform duration-300"
        >
        </label>

        <span class="w-[26px] h-[2px] bg-gray-700 peer-checked:rotate-90 transition-transform duration-300">
        </span>

        <ul class="peer-checked:right-0 fixed top-0 -right-full w-full h-full bg-white duration-[.25s] shadow-2xl p-4 flex flex-col gap-6 text-2xl font-bold items-center">
          <li class="self-start">
            <div class="flex gap-2 items-center">
              <img src="/img/logo.svg" alt="logo" class="w-6 xs:w-7" />
              <div class="flex flex-col font-black text-xl leading-4 xs:text-2xl xs:leading-4.5">
                <div class="text-indigo-500">healthy</div>
                <div class="tracking-tight">work</div>
              </div>
            </div>
          </li>

          <li class="w-full flex justify-center">
            <hr class="w-full border-gray-300" />
          </li>

          <li class="pt-4">
            <a href="index.html#about">O nas</a>
          </li>
          <li>
            <a href="index.html#services">Jak to działa?</a>
          </li>
          <li class="pb-4">
            <a href="index.html#reviews">Opinie</a>
          </li>

          <li class="w-full flex justify-center">
            <hr class="w-full border-gray-300" />
          </li>
          <li class="flex flex-col items-center justify-end w-full">
            <a href="index.html#contact" class="button w-full">Skontaktuj się z nami</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
`;
  }
}

customElements.define("hw-header", Header);
