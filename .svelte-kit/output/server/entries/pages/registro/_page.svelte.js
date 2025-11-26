import { P as head, G as attr_class, B as pop, z as push } from "../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  let pwdScore, pwdLabel, pwdWidth;
  let username = "";
  let email = "";
  let password = "";
  let password2 = "";
  let loading = false;
  let acceptsDataPolicy = false;
  onDestroy(() => {
    delete window.onRegisterCaptchaSuccess;
    delete window.onRegisterCaptchaExpired;
  });
  function scorePassword(p) {
    return 0;
  }
  pwdScore = scorePassword();
  pwdLabel = ["Muy débil", "Débil", "Aceptable", "Fuerte", "Muy fuerte"][pwdScore];
  pwdWidth = ["w-0", "w-1/4", "w-2/4", "w-3/4", "w-full"][pwdScore];
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<script src="https://www.google.com/recaptcha/api.js" async defer><\/script><!---->`);
  });
  $$payload.out.push(`<div class="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-white flex items-center justify-center p-4"><div class="w-full max-w-md"><div class="p-[1px] rounded-2xl bg-gradient-to-br from-amber-500/60 via-amber-300/50 to-slate-200/60 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]"><div class="rounded-2xl bg-white backdrop-blur-sm border border-slate-200/60"><div class="px-6 pt-6"><div class="flex items-center gap-3"><div class="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14c3.866 0 7 1.79 7 4v1H5v-1c0-2.21 3.134-4 7-4Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg></div> <div><h1 class="text-2xl font-semibold text-slate-900">Crear cuenta</h1> <p class="text-sm text-slate-500">Regístrate para continuar con tu compra.</p></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <form class="px-6 pb-6 pt-4 space-y-4"><div><label for="username" class="block text-sm font-medium text-slate-700">Usuario</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 7a7 7 0 1 1 14 0H3Z"></path></svg></span> <input id="username" class="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition" placeholder="Tu usuario"${attr("value", username)} autocomplete="username"${attr("aria-invalid", false)}/></div></div> <div><label for="email" class="block text-sm font-medium text-slate-700">Email</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6Zm0 3.2v8.8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2l-9.4 5.87a2 2 0 0 1-2.2 0L2 9.2Z"></path></svg></span> <input id="email" class="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition" type="email" placeholder="tu@correo.com"${attr("value", email)} autocomplete="email"/></div></div> <div><label for="password" class="block text-sm font-medium text-slate-700">Contraseña</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 0 1 6 0v3H9Z"></path></svg></span> <input id="password" class="w-full rounded-xl border border-slate-300 pl-10 pr-11 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition"${attr("type", "password")} placeholder="Mínimo 8 caracteres"${attr("value", password)} autocomplete="new-password"/> <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"${attr("aria-label", "Mostrar contraseña")}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-5 0-9 4.5-10 6 1 1.5 5 6 10 6s9-4.5 10-6c-1-1.5-5-6-10-6Zm0 10a4 4 0 1 1 .001-8.001A4 4 0 0 1 12 16Z"></path></svg>`);
  }
  $$payload.out.push(`<!--]--></button></div> <div class="mt-2"><div class="h-2 w-full rounded-full bg-slate-200 overflow-hidden"><div${attr_class(`h-full ${pwdWidth} transition-all duration-300 rounded-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500`)}></div></div> <p class="mt-1 text-xs text-slate-500">Fortaleza: <span class="font-medium">${escape_html(pwdLabel)}</span></p></div></div> <div><label for="password2" class="block text-sm font-medium text-slate-700">Repite contraseña</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 0 1 6 0v3H9Z"></path></svg></span> <input id="password2" class="w-full rounded-xl border border-slate-300 pl-10 pr-11 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition"${attr("type", "password")} placeholder="Repite tu contraseña"${attr("value", password2)} autocomplete="new-password"/> <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"${attr("aria-label", "Mostrar contraseña")}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-5 0-9 4.5-10 6 1 1.5 5 6 10 6s9-4.5 10-6c-1-1.5-5-6-10-6Zm0 10a4 4 0 1 1 .001-8.001A4 4 0 0 1 12 16Z"></path></svg>`);
  }
  $$payload.out.push(`<!--]--></button></div></div> <div class="pt-2 border-t border-slate-100 mt-2"><div class="flex items-start gap-2 text-xs text-slate-600"><input id="data-agreement" type="checkbox"${attr("checked", acceptsDataPolicy, true)} class="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"/> <label for="data-agreement" class="leading-snug">Acepto el tratamiento de mis datos personales para crear y administrar mi cuenta. <button type="button" class="ml-1 text-amber-700 hover:text-amber-900 underline underline-offset-2">Ver cómo usamos tus datos</button> <span class="ml-1">(<a href="/privacidad" class="text-amber-700 hover:text-amber-900 underline underline-offset-2">Ver política completa</a>)</span></label></div></div> <div class="pt-3 pb-1"><div class="flex flex-col items-center gap-2"><div class="g-recaptcha transform scale-95 sm:scale-100"${attr("data-sitekey", "6Lc9WhYsAAAAANK2Vt5XPQn0uX5NTjtPqogAblq9")} data-callback="onRegisterCaptchaSuccess" data-expired-callback="onRegisterCaptchaExpired"></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div> <button class="w-full rounded-xl bg-amber-600 text-white py-2.5 text-sm font-medium shadow hover:bg-amber-700 active:bg-amber-800 disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"${attr("disabled", loading, true)} type="submit">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Crear cuenta`);
  }
  $$payload.out.push(`<!--]--></button> <p class="text-center text-sm text-slate-600">¿Ya tienes cuenta? <a href="/login" class="font-medium text-amber-700 hover:text-amber-800 underline underline-offset-4">Inicia sesión</a></p></form> <section class="px-6 pb-6 pt-0 space-y-3 text-xs text-slate-600" id="acuerdos-datos"><h2 class="text-sm font-semibold text-slate-900">¿Cómo usamos tus datos personales?</h2> <p>Al crear una cuenta en <strong>Cocinas Appel</strong> recopilamos algunos datos personales
            para poder ofrecerte nuestros servicios de forma correcta y segura.</p> <ul class="list-disc pl-5 space-y-1"><li><strong>Datos de identificación:</strong> nombre de usuario para identificar tu cuenta.</li> <li><strong>Datos de contacto:</strong> correo electrónico para enviar confirmaciones de pedido,
              avisos importantes y responder tus consultas.</li> <li><strong>Datos de compra:</strong> historial de pedidos y montos pagados para seguimiento,
              garantía y estadísticas internas.</li></ul> <p>No compartimos tus datos con terceros para fines comerciales. Solo se utilizan para la
            operación de la tienda, el cumplimiento de obligaciones legales y mejoras internas del servicio.</p> <p class="text-[11px] text-slate-500">Si tienes dudas sobre el tratamiento de tus datos, puedes escribirnos a <a href="mailto:appelpatagonia@gmail.com" class="text-amber-700 hover:text-amber-900"> appelpatagonia@gmail.com</a>.</p></section></div></div></div></div>`);
  pop();
}
export {
  _page as default
};
