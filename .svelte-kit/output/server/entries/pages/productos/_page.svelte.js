import { F as ensure_array_like, G as attr_class, N as maybe_selected, B as pop, z as push } from "../../../chunks/index2.js";
import "../../../chunks/cart.store.js";
import { C as ChatBot } from "../../../chunks/ChatBot.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let productos = [];
  let categorias = [{ id: "todo", label: "Todos" }];
  let categoria = "todo";
  let q = "";
  let orden = "popular";
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format;
  productos.filter((p) => true).filter((p) => q.trim() ? (p.nombre + " " + (p.desc ?? "")).toLowerCase().includes(q.toLowerCase()) : true).slice().sort((a, b) => {
    return 0;
  });
  const each_array = ensure_array_like(categorias);
  $$payload.out.push(`<section id="productos" class="bg-slate-50/80 py-10 sm:py-12 lg:py-16"><div class="mx-auto max-w-7xl px-4"><div class="space-y-2 max-w-2xl mx-auto text-center"><div class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-100"><span class="inline-block h-1.5 w-1.5 rounded-full bg-amber-500"></span> Catálogo de Cocinas Appel</div> <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Productos</h2> <p class="text-slate-600 text-sm sm:text-base mt-1">Fabricación propia y accesorios seleccionados para tu proyecto de cocina.</p></div> <div class="mt-8 max-w-4xl mx-auto"><div class="rounded-2xl bg-white/90 shadow-sm ring-1 ring-slate-200 px-4 py-4 sm:px-5 sm:py-5 space-y-4"><div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 class="text-sm font-semibold text-slate-900">Filtrar productos</h3> <p class="text-[11px] text-slate-500">Busca por nombre, categoría u ordena por precio.</p></div></div> <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div class="flex flex-wrap gap-2 md:max-w-[55%]"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let c = each_array[$$index];
    $$payload.out.push(`<button type="button"${attr_class(`text-xs sm:text-[13px] px-3 py-1.5 rounded-full ring-1 transition
                  ${categoria === c.id ? "bg-amber-600 text-white ring-amber-500 shadow-sm" : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50"}`)}${attr("aria-pressed", categoria === c.id)}>${escape_html(c.label)}</button>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 md:max-w-[45%] md:justify-end"><div class="relative w-full sm:w-48"><span class="pointer-events-none absolute inset-y-0 left-3 flex items-center"><svg class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none"><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><circle cx="11" cy="11" r="5.5" stroke="currentColor" stroke-width="1.6"></circle></svg></span> <input type="search" placeholder="Buscar…"${attr("value", q)} class="w-full rounded-xl border border-slate-300 bg-white/90 px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 shadow-sm"/></div> <div class="w-full sm:w-44"><select class="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 shadow-sm">`);
  $$payload.select_value = orden;
  $$payload.out.push(`<option value="popular"${maybe_selected($$payload, "popular")}>Orden: popularidad</option><option value="precio-asc"${maybe_selected($$payload, "precio-asc")}>Precio: menor a mayor</option><option value="precio-desc"${maybe_selected($$payload, "precio-desc")}>Precio: mayor a menor</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div></div></div></div></div> <div class="mt-8">`);
  {
    $$payload.out.push("<!--[-->");
    const each_array_1 = ensure_array_like(Array(6));
    $$payload.out.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      each_array_1[$$index_1];
      $$payload.out.push(`<div class="animate-pulse bg-white rounded-2xl shadow-sm overflow-hidden ring-1 ring-slate-200"><div class="w-full aspect-[4/3] bg-slate-200"></div> <div class="p-4 space-y-3"><div class="h-4 bg-slate-200 rounded w-2/3"></div> <div class="h-3 bg-slate-200 rounded w-1/2"></div> <div class="flex gap-2 pt-2"><div class="h-9 bg-slate-200 rounded w-1/3"></div> <div class="h-9 bg-slate-200 rounded w-1/3"></div></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></div> `);
  ChatBot($$payload);
  $$payload.out.push(`<!----></section>`);
  pop();
}
export {
  _page as default
};
