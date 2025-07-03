class Footer extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/healthywork#";

    this.innerHTML = `
<footer class="bg-slate-900 w-full text-white">
  <div class="max-w-7xl mx-auto px-4 md:px-16 py-10 md:pt-20 md:pb-0">
    <div class="flex flex-col lg:flex-row gap-16 pb-8">
      <div class="flex-1 flex flex-col gap-2">
        <a href="${prefix}" class="flex gap-2 items-center w-fit">
          <img src="img/logo.svg" alt="logo" class="w-8 xs:w-9 brightness-0 invert" />
          <div class="flex flex-col font-black text-[1.75rem] leading-5 xs:text-[2rem] xs:leading-6">
            <div class="text-indigo-500">healthy</div>
            <div class="tracking-tight">work</div>
          </div>
        </a>
        
        <small>fizjoterapia w miejscu pracy</small>
      </div>

      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-indigo-200 text-2xl font-bold">Kontakt</h2>

        <div class="flex gap-2 items-center">
          <img src="img/email.svg" alt="logo" class="w-6 xs:w-7 brightness-0 invert" />
          <a href="mailto:buiro@healthywork.pl?subject=Kontakt z healthywork.pl">
            biuro@healthywork.pl
          </a>
        </div>

        <div class="flex gap-2 items-center">
          <img src="img/phone.svg" alt="logo" class="w-6 xs:w-7 brightness-0 invert" />
          +48 000 000 000
        </div>
      </div>

      <div class="flex-2">
        <h2 class="text-indigo-200 text-2xl font-bold">Obserwuj nas</h2>
      </div>
    </div>

    <small class="py-4 text-center block">
      2025 - copyright © healthywork.pl 
    </small>
  </div>
</footer>
`;
  }
}

customElements.define("hw-footer", Footer);
