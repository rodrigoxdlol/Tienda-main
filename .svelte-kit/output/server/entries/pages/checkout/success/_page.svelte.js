import { D as store_get, E as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import { e as escape_html } from "../../../../chunks/attributes.js";
import "clsx";
import "../../../../chunks/state.svelte.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let orderId = null;
  orderId = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("order_id");
  $$payload.out.push(`<section class="mx-auto max-w-2xl px-4 py-16"><div class="rounded-2xl border border-emerald-200 bg-white/80 shadow-sm p-8 text-center"><div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div> <h1 class="text-2xl font-semibold text-emerald-700 mb-2">¡Pago realizado con éxito!</h1> `);
  if (orderId) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-sm text-slate-600 mb-2">Tu pedido fue registrado correctamente.</p> <p class="text-sm text-slate-500 mb-4">Número de pedido: <span class="font-semibold text-slate-800">#${escape_html(orderId)}</span></p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="text-sm text-slate-600 mb-4">Tu compra fue procesada. Puedes revisar el detalle en la sección “Mis pedidos”.</p>`);
  }
  $$payload.out.push(`<!--]--> <p class="text-xs text-slate-500 mb-6">También recibirás un correo con el detalle de tu compra (si configuraste el envío de emails).</p> <div class="flex flex-wrap gap-3 justify-center"><button class="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700" type="button">Seguir comprando</button> <button class="inline-flex items-center gap-2 rounded-xl border border-slate-300 text-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50" type="button">Ver mis pedidos</button></div></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
