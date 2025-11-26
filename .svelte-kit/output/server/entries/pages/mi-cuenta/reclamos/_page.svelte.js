import { F as ensure_array_like, B as pop, z as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<main class="max-w-4xl mx-auto px-4 py-8"><header class="mb-6"><h1 class="text-xl md:text-2xl font-semibold text-slate-900">Mis reclamos y mensajes</h1> <p class="text-sm text-slate-500">Aquí puedes ver el estado de los mensajes que has enviado mediante el formulario de contacto.</p></header> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <section class="bg-white rounded-2xl shadow-sm border border-slate-100"><div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between"><h2 class="text-sm font-semibold text-slate-800">Historial</h2> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="text-xs text-slate-400">Cargando…</span>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(Array(3));
    $$payload.out.push(`<div class="p-4 space-y-3"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out.push(`<div class="animate-pulse h-12 rounded-lg bg-slate-100"></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></section></main>`);
  pop();
}
export {
  _page as default
};
