import { O as bind_props, B as pop, z as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let params = $$props["params"];
  $$payload.out.push(`<div class="mx-auto max-w-7xl px-4 py-6 space-y-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl md:text-3xl font-semibold text-slate-900">Usuario</h1> <p class="text-slate-600 mt-1">Detalle y pedidos del cliente.</p></div> <div class="flex items-center gap-2"><a href="/admin/users" class="rounded-xl px-3 py-2 ring-1 ring-slate-300 hover:bg-slate-50 text-sm">← Volver</a> <button class="rounded-xl bg-rose-600 text-white px-3 py-2 text-sm hover:bg-rose-700">Eliminar</button></div></div> <div class="rounded-2xl border border-slate-200 bg-white p-5">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-slate-600">Cargando…</p>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="rounded-2xl border border-slate-200 bg-white"><div class="flex items-center justify-between px-5 py-4 border-b border-slate-200"><h2 class="text-lg font-semibold text-slate-900">Pedidos de este usuario</h2> <div class="text-sm text-slate-600">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div> <div class="p-5">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-slate-600">Cargando pedidos…</p>`);
  }
  $$payload.out.push(`<!--]--></div></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { params });
  pop();
}
export {
  _page as default
};
