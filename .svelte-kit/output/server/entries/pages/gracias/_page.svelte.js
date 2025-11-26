import { D as store_get, E as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let orderNum;
  orderNum = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("o");
  $$payload.out.push(`<div class="max-w-xl mx-auto p-6 text-center"><h1 class="text-2xl font-semibold mb-2">¡Gracias por tu compra!</h1> `);
  if (orderNum) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-slate-600">Número de orden: <b>${escape_html(orderNum)}</b></p>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <a href="/productos" class="mt-6 inline-block rounded bg-slate-900 text-white px-4 py-2">Seguir comprando</a></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
