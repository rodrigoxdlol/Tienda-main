import { F as ensure_array_like, N as maybe_selected, B as pop, z as push } from "../../../../chunks/index2.js";
import "../../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let items = [];
  let creating = false;
  let busyToggle = /* @__PURE__ */ new Set();
  let busyMain = /* @__PURE__ */ new Set();
  let busyGal = /* @__PURE__ */ new Set();
  let busyDelImg = /* @__PURE__ */ new Set();
  let busyDelProd = /* @__PURE__ */ new Set();
  let busyStock = /* @__PURE__ */ new Set();
  let busyPrice = /* @__PURE__ */ new Set();
  const LOW_STOCK_LIMIT = 5;
  let categories = [];
  let form = {
    name: "",
    slug: "",
    description: "",
    price: 0,
    stock: 0,
    is_active: true,
    category_id: ""
  };
  const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });
  const fmt = (n) => money.format(Number(n ?? 0) || 0);
  let q = "";
  let status = "all";
  let minPrice = null;
  let maxPrice = null;
  let sort = "name";
  let page = 1;
  let perPage = 10;
  let filtered = [];
  let paged = [];
  let total = 0;
  let totalPages = 1;
  {
    const needle = q.trim().toLowerCase();
    filtered = items.filter((p) => {
      if (needle) {
        const hay = `${p.name ?? ""} ${p.slug ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    }).sort((a, b) => {
      return String(a.name).localeCompare(String(b.name));
    });
    total = filtered.length;
    totalPages = Math.max(1, Math.ceil(total / perPage));
    if (page > totalPages) page = totalPages;
    const start = (page - 1) * perPage;
    paged = filtered.slice(start, start + perPage);
  }
  const each_array = ensure_array_like(
    // utils busy (Svelte requiere reasignación)
    // crear
    // acciones por producto
    // optimista
    // revertir
    // 🔸 Cambiar stock desde la tarjeta
    // optimista
    // rollback
    // 🔸 Cambiar precio desde la tarjeta
    // optimista
    // rollback
    categories
  );
  const each_array_1 = ensure_array_like(paged);
  $$payload.out.push(`<section class="mx-auto max-w-7xl px-4 py-6 space-y-6"><header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="space-y-1"><div class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-100"><span class="inline-block h-1.5 w-1.5 rounded-full bg-amber-500"></span> Panel de gestión · Productos</div> <h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Productos</h1> <p class="text-sm text-slate-600">Administra el catálogo, imágenes, stock y categorías de Cocinas Appel.</p></div> <div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500"><span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> ${escape_html(total)} producto${escape_html(total !== 1 ? "s" : "")} filtrados</span></div></header> <div class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm"><div class="grid gap-3 md:grid-cols-5 md:items-end"><label class="md:col-span-2"><span class="block text-xs text-slate-600 mb-1">Buscar (nombre o slug)</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Ej: lenga, parrilla…"${attr("value", q)}/></label> <label><span class="block text-xs text-slate-600 mb-1">Estado</span> <select class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
  $$payload.select_value = status;
  $$payload.out.push(`<option value="all"${maybe_selected($$payload, "all")}>Todos</option><option value="active"${maybe_selected($$payload, "active")}>Activos</option><option value="inactive"${maybe_selected($$payload, "inactive")}>Inactivos</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></label> <label><span class="block text-xs text-slate-600 mb-1">Precio mín.</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" type="number" min="0"${attr("value", minPrice)}/></label> <label><span class="block text-xs text-slate-600 mb-1">Precio máx.</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" type="number" min="0"${attr("value", maxPrice)}/></label></div> <div class="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><label class="inline-flex items-center gap-2"><span class="block text-xs text-slate-600">Ordenar por</span> <select class="rounded-xl border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
  $$payload.select_value = sort;
  $$payload.out.push(`<option value="name"${maybe_selected($$payload, "name")}>Nombre (A–Z)</option><option value="price-asc"${maybe_selected($$payload, "price-asc")}>Precio ↑</option><option value="price-desc"${maybe_selected($$payload, "price-desc")}>Precio ↓</option><option value="stock-desc"${maybe_selected($$payload, "stock-desc")}>Stock ↓</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></label> <div class="flex items-center gap-2 self-end sm:self-auto"><span class="text-[11px] text-slate-500 hidden sm:inline">${escape_html(total)} resultados actuales</span> <button type="button" class="rounded-xl ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 active:scale-[.98] transition">Limpiar filtros</button></div></div></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"><div class="flex items-center justify-between gap-3"><div><h2 class="text-sm font-semibold text-slate-800">Nuevo producto</h2> <p class="text-[11px] text-slate-500 mt-0.5">Completa los campos básicos y sube la imagen principal.</p></div> <span class="text-xs text-slate-500">Campos básicos</span></div> <div class="mt-4 grid gap-3 sm:grid-cols-6"><label class="sm:col-span-2"><span class="block text-xs text-slate-600 mb-1">Nombre</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Ej: Cocina Lenga 90cm"${attr("value", form.name)}/></label> <label class="sm:col-span-2"><span class="block text-xs text-slate-600 mb-1">Slug</span> <div class="flex gap-2"><input class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="cocina-lenga-90"${attr("value", form.slug)}/></div></label> <label class="sm:col-span-6"><span class="block text-xs text-slate-600 mb-1">Descripción</span> <textarea class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Descripción detallada del producto (opcional)" rows="3">`);
  const $$body = escape_html(form.description);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></label> <label class="sm:col-span-2"><span class="block text-xs text-slate-600 mb-1">Categoría</span> <select class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
  $$payload.select_value = form.category_id;
  $$payload.out.push(`<option value=""${maybe_selected($$payload, "")}>Sin categoría</option><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let c = each_array[$$index];
    $$payload.out.push(`<option${attr("value", c.id)}${maybe_selected($$payload, c.id)}>${escape_html(c.name)}</option>`);
  }
  $$payload.out.push(`<!--]-->`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></label> <label><span class="block text-xs text-slate-600 mb-1">Precio</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" type="number" min="0" placeholder="0"${attr("value", form.price)}/></label> <label><span class="block text-xs text-slate-600 mb-1">Stock</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" type="number" min="0" placeholder="0"${attr("value", form.stock)}/></label></div> <div class="mt-4 flex flex-wrap items-center gap-3"><label class="inline-flex items-center gap-2 select-none text-sm text-slate-700 cursor-pointer"><input type="checkbox"${attr("checked", form.is_active, true)} class="peer sr-only"/> <span class="relative inline-flex h-6 w-11 items-center rounded-full ring-1 ring-slate-300 bg-slate-300 peer-checked:bg-amber-600 peer-checked:ring-amber-500/40 transition-colors duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"><span class="absolute left-1 h-4 w-4 rounded-full bg-white shadow-sm transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:translate-x-5 peer-active:scale-95"></span></span> <span class="ml-1">${escape_html("Activo")}</span></label> <div class="flex flex-wrap items-center gap-2"><span class="text-sm text-slate-700">Imagen principal</span> <label class="relative inline-flex cursor-pointer"><input type="file" accept="image/*" class="sr-only"/> <span class="rounded-xl ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 active:scale-[.98]">Seleccionar</span></label> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="ml-auto"><button type="button" class="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700 active:scale-[.99] disabled:opacity-60 disabled:cursor-not-allowed"${attr("disabled", creating, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Crear`);
  }
  $$payload.out.push(`<!--]--></button></div></div></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
  for (let $$index_3 = 0, $$length = each_array_1.length; $$index_3 < $$length; $$index_3++) {
    let p = each_array_1[$$index_3];
    const each_array_2 = ensure_array_like(categories);
    const each_array_3 = ensure_array_like(p.images ?? []);
    $$payload.out.push(`<article class="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"><div class="relative h-40 bg-slate-100">`);
    if (p.image) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<img${attr("src", p.image)}${attr("alt", p.name)} class="h-full w-full object-cover"/>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="grid h-full place-items-center text-slate-400 text-sm">Sin imagen</div>`);
    }
    $$payload.out.push(`<!--]--> <div class="absolute top-2 left-2 flex gap-2">`);
    if (!p.is_active) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="rounded-full bg-slate-900/80 text-white text-[11px] px-2 py-0.5">Inactivo</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <span class="rounded-full bg-white/90 ring-1 ring-slate-200 text-[11px] px-2 py-0.5">${escape_html(p.images?.length || 0)} img</span></div> <button type="button" class="absolute top-2 right-2 inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-[12px] ring-1 ring-rose-200 text-rose-700 bg-rose-50/70 backdrop-blur hover:bg-rose-50 hover:ring-rose-300 active:bg-rose-100 disabled:opacity-60 disabled:cursor-not-allowed transition"${attr("disabled", busyDelProd.has(p.id), true)} aria-label="Eliminar producto" title="Eliminar producto">`);
    if (busyDelProd.has(p.id)) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg> Eliminando…`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M9 3h6a1 1 0 0 1 1 1v1h4v2H4V5h4V4a1 1 0 0 1 1-1Zm1 6h2v9h-2V9Zm5 0h2v9h-2V9ZM7 9h2v9H7V9Z"></path></svg> Eliminar`);
    }
    $$payload.out.push(`<!--]--></button></div> <div class="p-4 space-y-3"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="truncate font-medium text-slate-900">${escape_html(p.name)}</p> <p class="text-xs text-slate-500">/${escape_html(p.slug)}</p></div> <label class="inline-flex items-center gap-2 select-none text-xs text-slate-700 cursor-pointer"><input type="checkbox"${attr("checked", p.is_active, true)} class="peer sr-only"${attr("disabled", busyToggle.has(p.id), true)}/> <span class="relative inline-flex h-5 w-9 items-center rounded-full ring-1 ring-slate-300 bg-slate-300 peer-checked:bg-amber-600 peer-checked:ring-amber-500/40 transition-colors duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] disabled:opacity-60"><span class="absolute left-1 h-3.5 w-3.5 rounded-full bg-white shadow-sm transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:translate-x-4 peer-active:scale-95"></span></span> `);
    if (busyToggle.has(p.id)) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<svg class="h-3.5 w-3.5 animate-spin text-slate-500" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`${escape_html(p.is_active ? "activo" : "inactivo")}`);
    }
    $$payload.out.push(`<!--]--></label></div> <div class="space-y-2"><div class="flex items-center gap-2 text-sm"><span class="text-slate-600">Precio:</span> <input class="w-28 rounded-lg border border-slate-300 px-2 py-1 text-xs text-right focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400" type="number" min="0" step="100"${attr("value", p.price)}/> `);
    if (busyPrice.has(p.id)) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<svg class="h-3.5 w-3.5 animate-spin text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<span class="text-xs font-semibold text-slate-900">${escape_html(fmt(p.price))}</span>`);
    }
    $$payload.out.push(`<!--]--></div> <div class="flex items-center gap-2 text-xs"><span class="text-slate-600">Stock:</span> <input class="w-16 rounded-lg border border-slate-300 px-2 py-1 text-xs text-right focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400" type="number" min="0"${attr("value", p.stock)}/> `);
    if (busyStock.has(p.id)) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<svg class="h-3.5 w-3.5 animate-spin text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    if (Number(p.stock) <= 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] text-rose-700 ring-1 ring-rose-100">Sin stock</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
      if (Number(p.stock) <= LOW_STOCK_LIMIT) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<span class="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] text-amber-800 ring-1 ring-amber-100">Stock bajo</span>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></div></div> <div class="mt-2"><span class="block text-[11px] text-slate-600 mb-1">Categoría</span> <select class="w-full rounded-xl border border-slate-300 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
    $$payload.select_value = p.category?.id ?? "";
    $$payload.out.push(`<option value=""${maybe_selected($$payload, "")}>Sin categoría</option><!--[-->`);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let c = each_array_2[$$index_1];
      $$payload.out.push(`<option${attr("value", c.id)}${maybe_selected($$payload, c.id)}>${escape_html(c.name)}</option>`);
    }
    $$payload.out.push(`<!--]-->`);
    $$payload.select_value = void 0;
    $$payload.out.push(`</select></div> <div class="pt-1"><div class="block text-xs text-slate-600 mb-1">Imagen principal</div> <label class="relative inline-flex cursor-pointer"><input type="file" accept="image/*" class="sr-only"${attr("disabled", busyMain.has(p.id), true)}/> <span class="rounded-xl ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 disabled:opacity-60">${escape_html(busyMain.has(p.id) ? "Subiendo…" : "Seleccionar")}</span></label></div> <div class="pt-1"><div class="block text-xs text-slate-600 mb-1">Galería</div> <div class="flex flex-wrap items-center gap-2"><label class="relative inline-flex cursor-pointer"><input type="file" accept="image/*" multiple class="sr-only"${attr("disabled", busyGal.has(p.id), true)}/> <span class="rounded-xl ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 disabled:opacity-60">${escape_html(busyGal.has(p.id) ? "Subiendo…" : "Agregar imágenes")}</span></label> <span class="text-xs text-slate-500">(${escape_html(p.images?.length || 0)})</span></div> <div class="grid grid-cols-4 gap-2 pt-2"><!--[-->`);
    for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
      let img = each_array_3[$$index_2];
      $$payload.out.push(`<!---->`);
      {
        $$payload.out.push(`<div class="relative group"><img${attr("src", img.image)} alt="miniatura" class="h-16 w-full object-cover rounded-lg ring-1 ring-slate-200"/> <button type="button" class="absolute top-1 right-1 rounded bg-rose-600/90 text-white text-[11px] px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition disabled:opacity-60" aria-label="Eliminar imagen"${attr("disabled", busyDelImg.has(`${p.id}:${img.id}`), true)}>${escape_html(busyDelImg.has(`${p.id}:${img.id}`) ? "..." : "Eliminar")}</button></div>`);
      }
      $$payload.out.push(`<!---->`);
    }
    $$payload.out.push(`<!--]--></div></div></div></article>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  if (totalPages > 1) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="mt-6 flex flex-wrap items-center justify-center gap-3"><button class="rounded-lg ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 disabled:opacity-50 active:scale-[.98]"${attr("disabled", page === 1, true)}>Anterior</button> <span class="text-sm text-slate-600">Página <span class="font-medium">${escape_html(page)}</span> de <span class="font-medium">${escape_html(totalPages)}</span></span> <button class="rounded-lg ring-1 ring-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 disabled:opacity-50 active:scale-[.98]"${attr("disabled", page === totalPages, true)}>Siguiente</button> <div class="flex items-center gap-2"><span class="text-xs text-slate-500">por página</span> <select class="rounded-lg ring-1 ring-slate-300 px-2 py-1.5 text-sm">`);
    $$payload.select_value = perPage;
    $$payload.out.push(`<option value="6"${maybe_selected($$payload, "6")}>6</option><option value="10"${maybe_selected($$payload, "10")}>10</option><option value="18"${maybe_selected($$payload, "18")}>18</option><option value="30"${maybe_selected($$payload, "30")}>30</option>`);
    $$payload.select_value = void 0;
    $$payload.out.push(`</select></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
export {
  _page as default
};
