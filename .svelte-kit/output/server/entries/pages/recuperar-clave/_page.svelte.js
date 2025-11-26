import { F as ensure_array_like, B as pop, z as push } from "../../../chunks/index2.js";
import "../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let loading = false;
  let errors = [];
  $$payload.out.push(`<section class="max-w-lg mx-auto mt-6"><header class="mb-6 text-center"><h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Recuperar contraseña</h1> <p class="mt-1 text-sm text-slate-600">Ingresa el correo con el que creaste tu cuenta y te enviaremos un enlace para
      restablecer tu contraseña.</p></header> <form class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">`);
  if (errors.length) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(errors);
    $$payload.out.push(`<div class="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-xs text-rose-700 space-y-1"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let err = each_array[$$index];
      $$payload.out.push(`<p>${escape_html(err)}</p>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="space-y-1"><label for="email" class="block text-sm font-medium text-slate-700">Correo electrónico</label> <input id="email" type="email"${attr("value", email)} autocomplete="email" required class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="tucorreo@ejemplo.com"/></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="pt-2 flex justify-between items-center"><a href="/login" class="text-xs text-slate-500 hover:text-slate-700 underline-offset-2 hover:underline">Volver a iniciar sesión</a> <button type="submit" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-60"${attr("disabled", loading, true)}>${escape_html("Enviar enlace")}</button></div></form></section>`);
  pop();
}
export {
  _page as default
};
