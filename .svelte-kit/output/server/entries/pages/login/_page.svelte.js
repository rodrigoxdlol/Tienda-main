import { a as attr } from "../../../chunks/attributes.js";
import { B as pop, z as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  let loading = false;
  let remember = false;
  $$payload.out.push(`<div class="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-white flex items-center justify-center p-4"><div class="w-full max-w-md"><div class="p-[1px] rounded-2xl bg-gradient-to-br from-amber-500/60 via-amber-300/50 to-slate-200/60 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"><div class="rounded-2xl bg-white border border-slate-200/60"><div class="px-6 pt-6"><div class="flex items-center gap-3"><div class="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14c3.866 0 7 1.79 7 4v1H5v-1c0-2.21 3.134-4 7-4Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg></div> <div><h1 class="text-2xl font-semibold text-slate-900">Iniciar sesión</h1> <p class="text-sm text-slate-500">Bienvenido de vuelta.</p></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <form class="px-6 pb-6 pt-4 space-y-4"><div><label for="username" class="block text-sm font-medium text-slate-700">Usuario</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 7a7 7 0 1 1 14 0H3Z"></path></svg></span> <input id="username" class="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition" placeholder="Tu usuario"${attr("value", username)} autocomplete="username"/></div></div> <div><label for="password" class="block text-sm font-medium text-slate-700">Contraseña</label> <div class="mt-1 relative"><span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 0 1 6 0v3H9Z"></path></svg></span> <input id="password" class="w-full rounded-xl border border-slate-300 pl-10 pr-11 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500 transition"${attr("type", "password")} placeholder="Tu contraseña"${attr("value", password)} autocomplete="current-password"/> <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"${attr("aria-label", "Mostrar contraseña")}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-5 0-9 4.5-10 6 1 1.5 5 6 10 6s9-4.5 10-6c-1-1.5-5-6-10-6Zm0 10a4 4 0 1 1 .001-8.001A4 4 0 0 1 12 16Z"></path></svg>`);
  }
  $$payload.out.push(`<!--]--></button></div> <div class="mt-2 flex items-center justify-between"><label class="inline-flex items-center gap-2 select-none text-sm text-slate-600"><input type="checkbox"${attr("checked", remember, true)} class="size-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"/> Recuérdame</label> <p class="mt-2 text-xs text-slate-500 text-right"><a href="/recuperar-clave" class="underline hover:text-slate-700">¿Olvidaste tu contraseña?</a></p></div></div> <button class="w-full rounded-xl bg-amber-600 text-white py-2.5 text-sm font-medium shadow hover:bg-amber-700 active:bg-amber-800 disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2" type="submit"${attr("disabled", loading, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Entrar`);
  }
  $$payload.out.push(`<!--]--></button> <p class="text-center text-sm text-slate-600">¿No tienes cuenta? <a href="/registro" class="font-medium text-amber-700 hover:text-amber-800 underline underline-offset-4">Crear cuenta</a></p></form></div></div></div></div>`);
  pop();
}
export {
  _page as default
};
