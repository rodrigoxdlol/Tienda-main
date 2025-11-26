import { N as maybe_selected, F as ensure_array_like, B as pop, z as push } from "../../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let countPending, countAnswered, countClosed, totalCount, filteredItems, resetKey;
  let items = [];
  let filter = "pending";
  let search = "";
  const PAGE_SIZE = 10;
  let currentPage = 1;
  countPending = items.filter((i) => i.status === "pending").length;
  countAnswered = items.filter((i) => i.status === "answered").length;
  countClosed = items.filter((i) => i.status === "closed").length;
  totalCount = items.length;
  filteredItems = items.filter((i) => {
    if (i.status !== filter) return false;
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return i.name.toLowerCase().includes(q) || i.email.toLowerCase().includes(q) || (i.subject || "").toLowerCase().includes(q) || (i.message || "").toLowerCase().includes(q);
  });
  Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  resetKey = `${filter}-${search}-${filteredItems.length}`;
  if (resetKey) {
    currentPage = 1;
  }
  filteredItems.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  $$payload.out.push(`<main class="p-4 md:p-6"><section class="max-w-6xl mx-auto space-y-4"><header class="space-y-3"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3"><div><h1 class="text-xl md:text-2xl font-semibold text-slate-900">Reclamos y opiniones</h1> <p class="text-sm text-slate-500">Gestiona los mensajes enviados desde el formulario de contacto y responde a tus clientes.</p></div> <div class="flex flex-col sm:flex-row gap-2 sm:items-center"><div class="flex items-center gap-2"><label class="text-xs font-medium text-slate-500">Estado:</label> <select class="rounded-full border border-slate-300 text-xs px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 bg-white">`);
  $$payload.select_value = // === Guardar respuesta ===
  // actualizar lista
  // si ya no calza con el filtro actual, cerramos el panel
  filter;
  $$payload.out.push(`<option value="pending"${maybe_selected($$payload, "pending")}>Pendientes</option><option value="answered"${maybe_selected($$payload, "answered")}>Respondidos</option><option value="closed"${maybe_selected($$payload, "closed")}>Cerrados</option><option value="all"${maybe_selected($$payload, "all")}>Todos</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="relative"><input type="search" placeholder="Buscar por nombre, email, asunto o mensaje…"${attr("value", search)} class="w-full sm:w-64 rounded-full border border-slate-300 pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500"/> <span class="absolute left-2 top-1.5 text-slate-400"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"></circle><path d="m16 16 3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></span></div></div></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs"><div class="rounded-xl border border-slate-200 bg-white px-3 py-2.5"><p class="text-[11px] text-slate-500">Pendientes</p> <p class="mt-1 text-lg font-semibold text-slate-900">${escape_html(countPending)}</p></div> <div class="rounded-xl border border-slate-200 bg-white px-3 py-2.5"><p class="text-[11px] text-slate-500">Respondidos</p> <p class="mt-1 text-lg font-semibold text-slate-900">${escape_html(countAnswered)}</p></div> <div class="rounded-xl border border-slate-200 bg-white px-3 py-2.5"><p class="text-[11px] text-slate-500">Cerrados</p> <p class="mt-1 text-lg font-semibold text-slate-900">${escape_html(countClosed)}</p></div> <div class="rounded-xl border border-slate-200 bg-white px-3 py-2.5"><p class="text-[11px] text-slate-500">Total</p> <p class="mt-1 text-lg font-semibold text-slate-900">${escape_html(totalCount)}</p></div></div></header> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="grid lg:grid-cols-5 gap-4 items-start"><div class="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col"><div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between"><h2 class="text-sm font-semibold text-slate-800">Mensajes</h2> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="text-xs text-slate-400">Cargando…</span>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="overflow-x-auto max-h-[520px]"><table class="min-w-full text-xs md:text-sm"><thead class="bg-slate-50 border-b border-slate-100 sticky top-0 z-10"><tr class="text-left text-[11px] md:text-xs text-slate-500 uppercase tracking-wide"><th class="px-3 py-2">Nombre</th><th class="px-3 py-2">Email</th><th class="px-3 py-2">Asunto</th><th class="px-3 py-2">Fecha</th><th class="px-3 py-2">Estado</th><th class="px-3 py-2"></th></tr></thead><tbody>`);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(Array(5));
    $$payload.out.push(`<!--[-->`);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$payload.out.push(`<tr class="border-b border-slate-100"><td class="px-3 py-3" colspan="6"><div class="animate-pulse h-3 rounded bg-slate-100 max-w-[80%] mb-2"></div> <div class="animate-pulse h-3 rounded bg-slate-100 max-w-[40%]"></div></td></tr>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-5">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="h-full flex flex-col items-center justify-center text-center text-slate-400 text-sm"><p class="mb-1 font-medium text-slate-500">Selecciona un mensaje</p> <p class="text-xs max-w-xs">Haz clic en un reclamo u opinión de la tabla para ver el detalle y responderle al cliente.</p></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section></main>`);
  pop();
}
export {
  _page as default
};
