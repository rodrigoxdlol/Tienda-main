import { D as store_get, F as ensure_array_like, E as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index2.js";
import { u as user } from "../../../../chunks/auth.store.js";
import "../../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format;
  if (!store_get($$store_subs ??= {}, "$user", user)?.authenticated) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<section class="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-4"><h1 class="text-xl font-semibold text-slate-900 mb-2">Inicia sesión para ver tus pedidos</h1> <p class="text-sm text-slate-600 mb-4">Aquí podrás revisar el estado de tus compras y simular el pago de prueba.</p> <a href="/login" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700">Ir a iniciar sesión</a></section>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<section class="max-w-5xl mx-auto mt-4 space-y-6">`);
    {
      $$payload.out.push("<!--[-->");
      const each_array = ensure_array_like(Array(3));
      $$payload.out.push(`<div class="space-y-3"><!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        each_array[$$index];
        $$payload.out.push(`<div class="h-24 rounded-2xl bg-slate-100 animate-pulse"></div>`);
      }
      $$payload.out.push(`<!--]--></div>`);
    }
    $$payload.out.push(`<!--]--></section>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
