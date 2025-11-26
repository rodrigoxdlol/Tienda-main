import { F as ensure_array_like, B as pop, z as push } from "../../../../chunks/index2.js";
import "../../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let totalImages, activeImages;
  let items = [];
  let loading = true;
  let title = "";
  let caption = "";
  let order = 0;
  let creating = false;
  let busyOrder = false;
  totalImages = items.length;
  activeImages = items.filter((x) => x.is_active).length;
  $$payload.out.push(`<section class="mx-auto max-w-7xl px-4 py-6 space-y-6"><header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="space-y-1"><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Imágenes de galería</h1> <p class="text-slate-600 text-sm sm:text-base">Gestiona las imágenes de la sección de galería: títulos, descripciones, orden y estado.</p></div> <div class="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-500"><span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> <span>${escape_html(activeImages)} activas de ${escape_html(totalImages)} imágenes</span></span> <button type="button" class="mt-1 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-1.5 text-xs font-medium shadow hover:bg-black disabled:opacity-60"${attr("disabled", loading, true)}>`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"></circle><path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg> Cargando…`);
  }
  $$payload.out.push(`<!--]--></button></div></header> <div class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"><h2 class="text-sm font-semibold text-slate-900 mb-1">Nueva imagen para la galería</h2> <p class="text-[11px] text-slate-500 mb-4">Sube una imagen y define el texto que se mostrará junto a ella.</p> <div class="grid sm:grid-cols-5 gap-3 items-start"><div class="sm:col-span-2"><span class="block text-xs text-slate-600 mb-1">Imagen</span> <label class="inline-flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-700 cursor-pointer hover:bg-slate-100"><span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white"><svg class="h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0-14L8 9m4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> <span>Seleccionar archivo</span> <input type="file" accept="image/*" class="sr-only"/></label> <p class="mt-1 text-[11px] text-slate-400">Formatos recomendados: JPG o PNG. Peso máximo ~10 MB.</p> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <label><span class="block text-xs text-slate-600 mb-1">Título</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Ej: Foto del taller"${attr("value", title)}/></label> <label><span class="block text-xs text-slate-600 mb-1">Descripción</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Texto breve bajo el título"${attr("value", caption)}/></label> <label><span class="block text-xs text-slate-600 mb-1">Orden</span> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" type="number" min="0"${attr("value", order)}/> <p class="mt-1 text-[11px] text-slate-400">Menor número → aparece primero.</p></label></div> <div class="mt-4 flex justify-end"><button type="button"${attr("disabled", creating, true)} class="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700 disabled:opacity-60">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Guardar imagen`);
  }
  $$payload.out.push(`<!--]--></button></div></div> <div class="space-y-4">`);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(Array(3));
    $$payload.out.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out.push(`<div class="rounded-2xl border border-slate-200 bg-white p-4 space-y-3"><div class="h-40 rounded-xl bg-slate-100 animate-pulse"></div> <div class="h-3 rounded bg-slate-100 animate-pulse"></div> <div class="h-3 rounded bg-slate-100 animate-pulse w-2/3"></div></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  if (items.length) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="mt-6 flex justify-end"><button type="button" class="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 disabled:opacity-60"${attr("disabled", busyOrder, true)}>`);
    {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`Guardar orden`);
    }
    $$payload.out.push(`<!--]--></button></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
export {
  _page as default
};
