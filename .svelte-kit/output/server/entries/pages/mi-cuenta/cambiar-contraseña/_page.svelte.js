import { D as store_get, F as ensure_array_like, E as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index2.js";
import { u as user } from "../../../../chunks/auth.store.js";
import "../../../../chunks/toast.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let oldPassword = "";
  let newPassword1 = "";
  let newPassword2 = "";
  let loading = false;
  let errors = [];
  if (!store_get($$store_subs ??= {}, "$user", user)?.authenticated) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<section class="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mt-4"><h1 class="text-xl font-semibold text-slate-900 mb-2">Inicia sesión para cambiar tu contraseña</h1> <p class="text-sm text-slate-600 mb-4">Esta sección está disponible solo para clientes registrados.</p> <a href="/login" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700">Ir a iniciar sesión</a></section>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<section class="max-w-xl mx-auto mt-4"><header class="mb-6"><h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Cambiar contraseña</h1> <p class="mt-1 text-sm text-slate-600">Actualiza la contraseña de tu cuenta para mantener tu información segura.</p></header> <form class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4">`);
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
    $$payload.out.push(`<!--]--> <div class="space-y-1"><label for="old" class="block text-sm font-medium text-slate-700">Contraseña actual</label> <input id="old" type="password"${attr("value", oldPassword)} autocomplete="current-password" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/></div> <div class="space-y-1"><label for="new1" class="block text-sm font-medium text-slate-700">Nueva contraseña</label> <input id="new1" type="password"${attr("value", newPassword1)} autocomplete="new-password" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/></div> <div class="space-y-1"><label for="new2" class="block text-sm font-medium text-slate-700">Repetir nueva contraseña</label> <input id="new2" type="password"${attr("value", newPassword2)} autocomplete="new-password" class="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" required/></div> <div class="flex flex-col gap-2 text-xs text-slate-500"><p class="font-medium text-slate-600">Recomendaciones:</p> <ul class="list-disc list-inside space-y-0.5"><li>Usa al menos 8 caracteres.</li> <li>Combina letras mayúsculas, minúsculas, números y símbolos.</li> <li>No reutilices contraseñas de otros sitios.</li></ul></div> <div class="pt-2 flex justify-end gap-2"><a href="/mi-cuenta/perfil" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50">Volver a mi perfil</a> <button type="submit" class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-60"${attr("disabled", loading, true)}>${escape_html("Guardar contraseña")}</button></div></form></section>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
