import { N as maybe_selected, D as store_get, F as ensure_array_like, E as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { a as cart, t as total } from "../../../chunks/cart.store.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/state.svelte.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let form = {
    full_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    notes: "",
    payment_method: "mercadopago"
  };
  let sending = false;
  function fmt(n) {
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
  }
  $$payload.out.push(`<section class="mx-auto max-w-5xl px-4 py-10"><h1 class="text-2xl md:text-3xl font-semibold text-amber-800">Checkout</h1> <div class="mt-6 grid gap-6 md:grid-cols-5"><div class="md:col-span-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6"><div class="mb-6 rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3 items-start"><svg class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><h3 class="text-sm font-bold text-amber-800">Importante: Solo Retiro en Tienda</h3> <p class="text-sm text-amber-700 mt-1">Por el momento <strong>no realizamos envíos a domicilio</strong>. 
            Todas las compras deben ser retiradas en nuestro local en <span class="font-semibold">Lautaro 855, Coyhaique</span>.</p></div></div> <h2 class="text-lg font-medium mb-4">Tus datos</h2> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="grid sm:grid-cols-2 gap-3"><label class="block"><span class="text-xs text-slate-600">Nombre completo</span> <input class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.full_name)} placeholder="Juan Pérez"/></label> <label class="block"><span class="text-xs text-slate-600">Correo</span> <input type="email" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.email)} placeholder="juan@ejemplo.com"/></label> <label class="block"><span class="text-xs text-slate-600">Teléfono</span> <input class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.phone)} placeholder="+56 9 1234 5678"/></label> <label class="block sm:col-span-2"><span class="text-xs text-slate-600">Dirección (para boleta/factura)</span> <input class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.address)} placeholder="Calle, número, comuna..."/></label> <label class="block"><span class="text-xs text-slate-600">Ciudad</span> <input class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.city)}/></label> <label class="block"><span class="text-xs text-slate-600">Región</span> <input class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70"${attr("value", form.region)}/></label> <div class="sm:col-span-2 mt-2"><span class="text-xs text-slate-600 block mb-1">Método de entrega</span> <div class="rounded-lg border border-amber-200 bg-amber-50/50 p-3 flex items-center gap-3"><div class="h-5 w-5 rounded-full border-[5px] border-amber-600 bg-white"></div> <div class="flex-1"><p class="text-sm font-semibold text-slate-900">Retiro en Tienda</p> <p class="text-xs text-slate-600">Lautaro 855, Coyhaique</p></div> <span class="text-xs font-bold text-emerald-600 uppercase tracking-wide">Gratis</span></div></div> <label class="block sm:col-span-2 mt-2"><span class="text-xs text-slate-600">Notas adicionales</span> <textarea rows="2" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70" placeholder="¿Quién retira? ¿Algún detalle extra?">`);
  const $$body = escape_html(form.notes);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></label> <label class="block sm:col-span-2 mt-2"><span class="text-xs text-slate-600">Método de Pago</span> <select class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70">`);
  $$payload.select_value = form.payment_method;
  $$payload.out.push(`<option value="mercadopago"${maybe_selected($$payload, "mercadopago")}>Mercado Pago (Tarjetas de crédito/débito)</option><option value="webpay"${maybe_selected($$payload, "webpay")}>Webpay (Próximamente)</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></label></div> <div class="mt-5"><button type="button" class="inline-flex items-center gap-2 rounded-xl bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700 disabled:opacity-60"${attr("disabled", sending, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Pagar`);
  }
  $$payload.out.push(`<!--]--></button></div></div> <aside class="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 h-fit"><h2 class="text-lg font-medium mb-4">Tu pedido</h2> `);
  if (store_get($$store_subs ??= {}, "$cart", cart)?.items?.length) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$cart", cart).items);
    $$payload.out.push(`<ul class="space-y-4"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let it = each_array[$$index];
      $$payload.out.push(`<li class="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0"><img${attr("src", it.product?.image || "/images/placeholder-product.jpg")}${attr("alt", it.product?.name)} class="h-16 w-16 rounded-lg object-cover ring-1 ring-slate-200"/> <div class="flex-1 min-w-0"><div class="text-sm font-medium truncate mb-1">${escape_html(it.product?.name)}</div> <div class="text-xs text-slate-500 mb-2">${escape_html(fmt(it.unit_price))} c/u</div> <div class="flex items-center gap-2"><button type="button" class="h-7 w-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition"${attr("disabled", sending, true)}><svg class="h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button> <span class="text-sm font-medium text-slate-900 min-w-[2rem] text-center">${escape_html(it.qty)}</span> <button type="button" class="h-7 w-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition"${attr("disabled", sending, true)}><svg class="h-3 w-3" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button> <button type="button" class="ml-2 text-xs text-rose-600 hover:text-rose-700 hover:underline"${attr("disabled", sending, true)}>Eliminar</button></div></div> <div class="text-sm font-semibold text-slate-900 text-right">${escape_html(fmt(it.subtotal))}</div></li>`);
    }
    $$payload.out.push(`<!--]--></ul> <div class="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between"><span class="text-slate-600 font-medium">Total</span> <b class="text-xl text-slate-900">${escape_html(fmt(store_get($$store_subs ??= {}, "$total", total)))}</b></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="text-slate-600 text-sm">Tu carrito está vacío.</p>`);
  }
  $$payload.out.push(`<!--]--></aside></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
