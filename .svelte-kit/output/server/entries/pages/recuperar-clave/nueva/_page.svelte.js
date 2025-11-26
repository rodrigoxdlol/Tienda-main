import { D as store_get, F as ensure_array_like, E as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
import "../../../../chunks/state.svelte.js";
import "../../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let uid, token;
  let newPassword1 = "";
  let newPassword2 = "";
  let loading = false;
  let errors = [];
  const linkInvalido = () => !uid || !token;
  uid = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("uid") ?? "";
  token = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("token") ?? "";
  $$payload.out.push(`<section class="max-w-xl mx-auto mt-6"><header class="mb-6 text-center"><h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Definir nueva contraseña</h1> <p class="mt-1 text-sm text-slate-600">Elige una nueva contraseña para tu cuenta.</p></header> `);
  if (linkInvalido()) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="bg-rose-50 border border-rose-100 text-rose-700 rounded-2xl px-4 py-3 text-sm">El enlace para restablecer la contraseña no es válido o le faltan datos. <br/> Vuelve a solicitar uno desde la página de <a href="/recuperar-clave" class="underline hover:text-rose-800">recuperación de contraseña</a>.</div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<form class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">`);
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
    $$payload.out.push(`<!--]--> <div class="space-y-1"><label for="new1" class="block text-sm font-medium text-slate-700">Nueva contraseña</label> <input id="new1" type="password"${attr("value", newPassword1)} autocomplete="new-password" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/></div> <div class="space-y-1"><label for="new2" class="block text-sm font-medium text-slate-700">Repetir nueva contraseña</label> <input id="new2" type="password"${attr("value", newPassword2)} autocomplete="new-password" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/></div> <div class="flex flex-col gap-2 text-xs text-slate-500"><p class="font-medium text-slate-600">Recomendaciones:</p> <ul class="list-disc list-inside space-y-0.5"><li>Usa al menos 8 caracteres.</li> <li>Combina letras, números y símbolos.</li> <li>No reutilices contraseñas de otros sitios.</li></ul></div> <div class="pt-2 flex justify-between items-center"><a href="/login" class="text-xs text-slate-500 hover:text-slate-700 underline-offset-2 hover:underline">Volver al inicio de sesión</a> <button type="submit" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-60"${attr("disabled", loading, true)}>${escape_html("Guardar nueva contraseña")}</button></div></form>`);
  }
  $$payload.out.push(`<!--]--></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
