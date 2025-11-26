import "clsx";
import { B as pop, z as push } from "../../../../chunks/index2.js";
import "../../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="max-w-3xl mx-auto space-y-6"><header class="space-y-1"><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Mi perfil</h1> <p class="text-slate-600 text-sm sm:text-base">Revisa y actualiza tus datos personales de tu cuenta en Cocinas Appel.</p></header> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="space-y-3"><div class="h-4 w-40 rounded bg-slate-200 animate-pulse"></div> <div class="h-10 w-full rounded-xl bg-slate-200 animate-pulse"></div> <div class="h-10 w-full rounded-xl bg-slate-200 animate-pulse"></div> <div class="h-10 w-full rounded-xl bg-slate-200 animate-pulse"></div></div>`);
  }
  $$payload.out.push(`<!--]--> <div class="pt-2"><a href="/mi-cuenta/pedidos" class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"><svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M5 12l4-4M5 12l4 4" stroke-linecap="round" stroke-linejoin="round"></path></svg> Volver a mis pedidos</a></div></section>`);
  pop();
}
export {
  _page as default
};
