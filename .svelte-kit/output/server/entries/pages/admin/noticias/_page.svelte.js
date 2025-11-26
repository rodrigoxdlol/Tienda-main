import { F as ensure_array_like, B as pop, z as push } from "../../../../chunks/index2.js";
import "../../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let saving = false;
  let items = [];
  let title = "";
  let caption = "";
  let order = "";
  $$payload.out.push(`<section class="mx-auto max-w-6xl px-4 py-6 space-y-6"><header class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Noticias (imágenes)</h1> <p class="text-sm text-slate-600">Sube imágenes de novedades, rifas y nuevos productos que se mostrarán en la sección <strong>/noticias</strong> del sitio público.</p></div> <div class="text-xs text-slate-500">${escape_html(items.length)} noticia${escape_html(items.length === 1 ? "" : "s")} en total</div></header> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-4"><h2 class="text-sm font-semibold text-slate-800">Agregar nueva noticia</h2> <form class="grid gap-4 md:grid-cols-2"><div class="space-y-3"><div><label class="block text-xs font-medium text-slate-700 mb-1">Título (opcional)</label> <input class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="Ej: Rifa cocina a leña invierno"${attr("value", title)}/></div> <div><label class="block text-xs font-medium text-slate-700 mb-1">Descripción breve (opcional)</label> <textarea class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70 resize-none" rows="3" placeholder="Ej: Participa en la rifa de una cocina a leña comprando desde el 1 al 30 de agosto…">`);
  const $$body = escape_html(caption);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <div class="flex gap-4 items-end"><div class="flex-1"><label class="block text-xs font-medium text-slate-700 mb-1">Orden (opcional)</label> <input type="number" min="0" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", order)}/> <p class="mt-1 text-[11px] text-slate-500">Números más bajos se muestran primero.</p></div></div></div> <div class="space-y-3"><div><label class="block text-xs font-medium text-slate-700 mb-1">Imagen de la noticia</label> <input type="file" accept="image/*" class="block w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"/> <p class="mt-1 text-[11px] text-slate-500">Formatos recomendados: JPG o PNG. Ideal 1200x900 px aprox.</p></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="mt-2"><button type="submit" class="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700 active:bg-amber-800 disabled:opacity-60 disabled:cursor-not-allowed"${attr("disabled", saving, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Guardar noticia`);
  }
  $$payload.out.push(`<!--]--></button></div></div></form></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><h2 class="text-sm font-semibold text-slate-800 mb-3">Noticias existentes</h2> `);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(Array(6));
    $$payload.out.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out.push(`<div class="h-48 rounded-2xl bg-slate-100 animate-pulse"></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
  pop();
}
export {
  _page as default
};
