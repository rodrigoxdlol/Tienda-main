import { F as ensure_array_like, B as pop, z as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="mx-auto max-w-6xl px-4 py-12 space-y-8"><header class="space-y-3 text-center"><p class="text-xs font-semibold tracking-[0.25em] text-amber-600 uppercase">Novedades</p> <h1 class="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Noticias y próximas llegadas</h1> <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">Imágenes de nuevos productos, rifas y otras novedades de <strong>Cocinas Appel</strong>.</p></header> `);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(Array(6));
    $$payload.out.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out.push(`<div class="h-80 rounded-3xl bg-slate-100 animate-pulse shadow-sm"></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
export {
  _page as default
};
