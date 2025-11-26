import { D as store_get, G as attr_class, E as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as escape_html } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let search, status, orderNumber;
  let title = "";
  let description = "";
  let badgeClass = "";
  search = store_get($$store_subs ??= {}, "$page", page).url.searchParams;
  status = search.get("status") ?? "success";
  orderNumber = search.get("o") ?? "";
  {
    if (status === "approved" || status === "success") {
      title = "¡Pago acreditado!";
      description = "Tu compra fue procesada correctamente. Nos pondremos en contacto para coordinar la entrega de tu cocina.";
      badgeClass = "bg-emerald-100 text-emerald-700 ring-emerald-200";
    } else if (status === "pending") {
      title = "Pago pendiente";
      description = "Tu pago está siendo procesado por Mercado Pago. Te avisaremos cuando se acredite.";
      badgeClass = "bg-amber-100 text-amber-800 ring-amber-200";
    } else if (status === "failure" || status === "rejected") {
      title = "Pago rechazado";
      description = "El pago no pudo completarse. Puedes intentar nuevamente con otro medio de pago o contactar con nosotros.";
      badgeClass = "bg-rose-100 text-rose-700 ring-rose-200";
    } else if (status === "order_not_found") {
      title = "Orden no encontrada";
      description = "No pudimos encontrar la orden asociada a este pago. Si crees que esto es un error, escríbenos.";
      badgeClass = "bg-rose-100 text-rose-700 ring-rose-200";
    } else {
      title = "Estado de pago desconocido";
      description = "No pudimos determinar el estado del pago. Revisa tu correo o contáctanos para más información.";
      badgeClass = "bg-slate-100 text-slate-700 ring-slate-200";
    }
  }
  $$payload.out.push(`<section class="mx-auto max-w-3xl px-4 py-12"><div class="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6 sm:p-8"><div class="flex items-center gap-3"><div${attr_class(`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium ring-1 ${badgeClass}`)}>`);
  if (status === "approved" || status === "success") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`Pago aprobado`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (status === "pending") {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`Pago pendiente`);
    } else {
      $$payload.out.push("<!--[!-->");
      if (status === "failure" || status === "rejected") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`Pago rechazado`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`Información`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div></div> <h1 class="mt-4 text-2xl font-semibold text-slate-900">${escape_html(title)}</h1> `);
  if (orderNumber) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="mt-2 text-sm text-slate-600">Número de pedido: <span class="font-semibold text-slate-800">#${escape_html(orderNumber)}</span></p>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <p class="mt-3 text-sm text-slate-700">${escape_html(description)}</p> <div class="mt-6 flex flex-wrap gap-3"><button type="button" class="inline-flex items-center rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amber-700">Volver al inicio</button> <button type="button" class="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Seguir comprando</button></div> <div class="mt-6 border-t pt-4 text-xs text-slate-500"><p>Si tienes dudas sobre tu pago o quieres coordinar detalles de la entrega,
        puedes contactarnos a través del formulario de contacto o por WhatsApp.</p></div></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
