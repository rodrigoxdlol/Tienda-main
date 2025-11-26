import { N as maybe_selected, F as ensure_array_like, G as attr_class, B as pop, z as push } from "../../../../chunks/index2.js";
import { A as API } from "../../../../chunks/api.js";
import "../../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  const clp = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format;
  const CSV_URL = `${API}/api/admin/orders/export-csv/`;
  let orders = [];
  let count = 0;
  let statusFilter = "all";
  let emailFilter = "";
  let dateFrom = "";
  let dateTo = "";
  let stats = { by_status: [], by_category: [], top_products: [] };
  function buildCsvUrl() {
    const params = new URLSearchParams();
    if (emailFilter.trim()) params.set("email", emailFilter.trim());
    const qs = params.toString();
    return qs ? `${CSV_URL}?${qs}` : CSV_URL;
  }
  function statusBadgeClass(status) {
    if (status === "paid") return "bg-emerald-50 text-emerald-700 ring-emerald-200";
    if (status === "pending") return "bg-amber-50 text-amber-700 ring-amber-200";
    if (status === "in_production") return "bg-sky-50 text-sky-700 ring-sky-200";
    if (status === "ready") return "bg-indigo-50 text-indigo-700 ring-indigo-200";
    if (status === "delivered") return "bg-slate-900/90 text-white ring-slate-300";
    if (status === "cancelled") return "bg-rose-50 text-rose-700 ring-rose-200";
    return "bg-slate-50 text-slate-600 ring-slate-200";
  }
  function statusLabel(status) {
    if (status === "paid") return "Pagada";
    if (status === "pending") return "Pendiente";
    if (status === "in_production") return "En producción";
    if (status === "ready") return "Lista para retiro";
    if (status === "delivered") return "Entregada";
    if (status === "cancelled") return "Cancelada";
    return status;
  }
  $$payload.out.push(`<section class="mx-auto max-w-7xl px-4 py-6 space-y-6"><header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="space-y-1"><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Órdenes</h1> <p class="text-slate-600 text-sm sm:text-base">Revisa pedidos, cambia estados y ve el detalle de cada compra.</p></div> <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500"><div class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> <span class="font-medium text-slate-800">${escape_html(orders.length)}</span> <span>mostradas</span></div> <div>de <span class="font-semibold text-slate-800">${escape_html(count)}</span> órdenes</div></div></header> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3"><div class="flex flex-wrap gap-3 items-end"><label class="flex-1 min-w-[200px]"><span class="block text-xs text-slate-600 mb-1">Buscar por email</span> <input type="search" placeholder="cliente@correo.com"${attr("value", emailFilter)} class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"/></label> <label><span class="block text-xs text-slate-600 mb-1">Estado</span> <select class="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
  $$payload.select_value = statusFilter;
  $$payload.out.push(`<option value="all"${maybe_selected($$payload, "all")}>Todos</option><option value="pending"${maybe_selected($$payload, "pending")}>Pendiente</option><option value="paid"${maybe_selected($$payload, "paid")}>Pagada</option><option value="in_production"${maybe_selected($$payload, "in_production")}>En producción</option><option value="ready"${maybe_selected($$payload, "ready")}>Lista para retiro</option><option value="delivered"${maybe_selected($$payload, "delivered")}>Entregada</option><option value="cancelled"${maybe_selected($$payload, "cancelled")}>Cancelada</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></label> <label><span class="block text-xs text-slate-600 mb-1">Desde</span> <input type="date"${attr("value", dateFrom)} class="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"/></label> <label><span class="block text-xs text-slate-600 mb-1">Hasta</span> <input type="date"${attr("value", dateTo)} class="rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"/></label> <div class="ml-auto flex items-center gap-2"><a${attr("href", buildCsvUrl())} class="rounded-xl px-3 py-2 text-sm bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-1">⬇️ Exportar CSV</a> <button type="button" class="rounded-xl px-3 py-2 text-sm ring-1 ring-slate-300 hover:bg-slate-50">Limpiar</button> <button type="button" class="rounded-xl px-4 py-2 text-sm bg-slate-900 text-white hover:bg-black">Aplicar</button></div></div> <div class="border-t border-slate-100 pt-3"><header class="flex flex-wrap items-center justify-between gap-3"><div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500"><span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1"><span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span> ${escape_html(count)} orden${escape_html("es")} totales</span> <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> ${escape_html(orders.filter((o) => o.status === "paid").length)} pagadas en esta página</span></div> `);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="flex flex-wrap items-center gap-3 text-xs text-slate-500"><span class="inline-flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> ${escape_html(stats.by_status.length)} estados</span> <span class="inline-flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span> ${escape_html(stats.by_category.length)} categorías</span> <span class="inline-flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-violet-500"></span> ${escape_html(stats.top_products.length)} productos destacados</span></div>`);
  }
  $$payload.out.push(`<!--]--></header></div></div> <div class="grid gap-4 lg:grid-cols-3"><div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><h3 class="text-sm font-semibold text-slate-800 mb-2">Ventas por estado</h3> `);
  if (stats.by_status && stats.by_status.length) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(stats.by_status);
    $$payload.out.push(`<table class="w-full text-xs"><tbody><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let s = each_array[$$index];
      $$payload.out.push(`<tr class="border-b last:border-0 border-slate-100"><td class="py-1.5 pr-2"><span${attr_class(`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ring-1 ${statusBadgeClass(s.status)}`)}><span class="h-1.5 w-1.5 rounded-full bg-current/80"></span> ${escape_html(statusLabel(s.status))}</span></td><td class="py-1.5 text-right text-slate-700">${escape_html(s.count)}</td><td class="py-1.5 text-right text-slate-700">${escape_html(clp(Number(s.total || 0)))}</td></tr>`);
    }
    $$payload.out.push(`<!--]--></tbody></table>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="text-xs text-slate-500">Aún no hay datos de estados.</p>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><h3 class="text-sm font-semibold text-slate-800 mb-2">Ventas por categoría</h3> `);
  if (stats.by_category && stats.by_category.length) {
    $$payload.out.push("<!--[-->");
    const each_array_1 = ensure_array_like(stats.by_category);
    $$payload.out.push(`<div class="space-y-2"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let c = each_array_1[$$index_1];
      $$payload.out.push(`<div class="flex items-center justify-between gap-2 text-xs"><div class="flex-1 min-w-0"><p class="truncate text-slate-700">${escape_html(c.category || "Sin categoría")}</p></div> <div class="text-right text-slate-700">${escape_html(clp(Number(c.total || 0)))}</div></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="text-xs text-slate-500">No hay ventas agrupadas por categoría todavía.</p>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><h3 class="text-sm font-semibold text-slate-800 mb-2">Productos más vendidos</h3> `);
  if (stats.top_products && stats.top_products.length) {
    $$payload.out.push("<!--[-->");
    const each_array_2 = ensure_array_like(stats.top_products);
    $$payload.out.push(`<div class="space-y-2 text-xs"><!--[-->`);
    for (let idx = 0, $$length = each_array_2.length; idx < $$length; idx++) {
      let p = each_array_2[idx];
      $$payload.out.push(`<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 min-w-0"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-medium text-slate-700">${escape_html(idx + 1)}</span> <div class="min-w-0"><p class="truncate text-slate-700">${escape_html(p.product || "Producto")}</p> <p class="text-[11px] text-slate-500">${escape_html(p.qty)} unidad(es)</p></div></div> <div class="text-right text-slate-700">${escape_html(clp(Number(p.total || 0)))}</div></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="text-xs text-slate-500">Aún no hay productos con ventas suficientes.</p>`);
  }
  $$payload.out.push(`<!--]--></div></div> <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">`);
  {
    $$payload.out.push("<!--[-->");
    const each_array_3 = ensure_array_like(Array(6));
    $$payload.out.push(`<div class="p-6 space-y-3"><!--[-->`);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      each_array_3[$$index_3];
      $$payload.out.push(`<div class="h-9 rounded bg-slate-100 animate-pulse"></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
export {
  _page as default
};
