import { D as store_get, E as unsubscribe_stores, B as pop, z as push, F as ensure_array_like, G as attr_class, I as slot } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { u as user } from "../../chunks/auth.store.js";
import { c as count } from "../../chunks/cart.store.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import { a as attr, e as escape_html, c as clsx } from "../../chunks/attributes.js";
import "../../chunks/state.svelte.js";
import { t as toasts } from "../../chunks/toast.js";
function CartMini($$payload, $$props) {
  push();
  var $$store_subs;
  let open = false;
  $$payload.out.push(`<div class="relative inline-block"><button class="relative inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium ring-1 ring-slate-200 shadow-sm hover:shadow transition" aria-haspopup="dialog"${attr("aria-expanded", open)} aria-controls="cart-panel"><svg class="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h2l.4 2M7 13h9a2 2 0 0 0 1.94-1.5l1.2-5A1 1 0 0 0 18.2 5H6.1L5.6 3.2A1 1 0 0 0 4.6 3H3"></path><circle cx="9" cy="19" r="1.75"></circle><circle cx="17" cy="19" r="1.75"></circle></svg> Carrito <span class="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-amber-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">${escape_html(store_get($$store_subs ??= {}, "$count", count))}</span></button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function ToastHost($$payload, $$props) {
  push();
  let list = [];
  toasts.subscribe((v) => list = v);
  const each_array = ensure_array_like(list);
  $$payload.out.push(`<div class="pointer-events-none fixed bottom-4 right-4 z-[100] space-y-2"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let t = each_array[$$index];
    $$payload.out.push(`<div${attr_class("pointer-events-auto min-w-[240px] max-w-[320px] rounded-lg px-4 py-3 text-white shadow-lg ring-1 ring-black/5", void 0, {
      "bg-emerald-600": t.type === "success",
      "bg-rose-600": t.type === "error",
      "bg-slate-700": t.type === "info"
    })} role="status" aria-live="polite"><div class="text-sm">${escape_html(t.text)}</div></div>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let current;
  const LOGO = "/images/LogoCocinas.png";
  let mobileOpen = false;
  let clientOpen = false;
  const linkBase = "px-3 py-1.5 rounded-lg text-sm font-medium transition";
  function navClass(href) {
    const active = current === href;
    return `${linkBase} ${active ? "bg-slate-100 text-slate-900" : "text-slate-800 hover:bg-slate-100"}`;
  }
  const btn = "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium transition";
  const btnGhost = `${btn} ring-1 ring-slate-300 hover:bg-slate-100 text-slate-900`;
  const btnPrimary = `${btn} bg-amber-600 text-white hover:bg-amber-700 shadow`;
  current = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  ToastHost($$payload);
  $$payload.out.push(`<!----> <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900"><nav class="sticky top-0 z-40 bg-amber-100/80 backdrop-blur border-b border-amber-200"><div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3"><a href="/" class="inline-flex items-center" aria-label="Ir al inicio"><img${attr("src", LOGO)} alt="Cocinas Appel" class="h-10 sm:h-12 w-auto select-none" draggable="false"/></a> <div class="hidden md:flex gap-1.5 items-center"><a href="/"${attr_class(clsx(navClass("/")))}>Inicio</a> <a href="/hacemos"${attr_class(clsx(navClass("/hacemos")))}>Hacemos</a> <a href="/productos"${attr_class(clsx(navClass("/productos")))}>Productos</a> <a href="/contacto"${attr_class(clsx(navClass("/contacto")))}>Contacto</a> <a href="/galeria"${attr_class(clsx(navClass("/galeria")))}>Galería</a> <a href="/noticias"${attr_class(clsx(navClass("/noticias")))}>Noticias</a></div> <div class="hidden md:flex items-center gap-2">`);
  if (store_get($$store_subs ??= {}, "$user", user)?.authenticated) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="text-sm text-slate-700 hidden lg:inline">Hola, <b>${escape_html(store_get($$store_subs ??= {}, "$user", user).username)}</b></span> `);
    if (store_get($$store_subs ??= {}, "$user", user)?.is_staff) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<a href="/admin"${attr_class(clsx(btnGhost))}><span>Panel admin</span> `);
      {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></a>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="relative" role="group"><button type="button"${attr_class(`${btnGhost} inline-flex items-center gap-1`)} aria-haspopup="menu"${attr("aria-expanded", clientOpen)}>Mi cuenta <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> `);
      {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div>`);
    }
    $$payload.out.push(`<!--]--> <a href="/logout"${attr_class(clsx(btnGhost))}><svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12h10m0 0-3-3m3 3-3 3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 6V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1" stroke-linecap="round"></path></svg> Cerrar</a>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<a href="/login"${attr_class(clsx(btnGhost))}><svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 12H5m0 0 3-3M5 12l3 3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 6V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-1" stroke-linecap="round"></path></svg> Iniciar sesión</a> <a href="/registro"${attr_class(clsx(btnPrimary))}>Crear cuenta</a>`);
  }
  $$payload.out.push(`<!--]--> `);
  CartMini($$payload);
  $$payload.out.push(`<!----></div> <button class="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-slate-300 hover:bg-slate-100"${attr("aria-expanded", mobileOpen)} aria-controls="mobile-menu" aria-label="Abrir menú">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"></path></svg>`);
  }
  $$payload.out.push(`<!--]--></button></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></nav> <main class="flex-1 max-w-6xl mx-auto px-4 py-8"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> <div class="flex justify-center gap-6 py-8"><a href="https://www.facebook.com/cocinasappel/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook" class="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow hover:shadow-lg hover:scale-105 transition"><svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6V12h2.6V9.7c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.8.8-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z"></path></svg></a> <a href="https://wa.me/56977082796?text=Hola%20quiero%20información" target="_blank" rel="noopener" aria-label="WhatsApp" class="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow hover:shadow-lg hover:scale-105 transition"><svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2 .5 3.8 1.4 5.5L0 24l6.7-1.8A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.3-4 .9.9-3.9-.3-.4A9.9 9.9 0 1 1 22 12c0 5.5-4.5 10-10 10zm5-7.6c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7 0a7.6 7.6 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.5.2-.7l.5-.6c.1-.2.2-.3.3-.6 0-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.9 4.2 4 .6.3 1.1.5 1.5.6.6.2 1.1.2 1.6.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4z"></path></svg></a> <a href="mailto:appelpatagonia@gmail.com?subject=Consulta&amp;body=Hola%2C%20quisiera%20informaci%C3%B3n..." aria-label="Email" class="grid h-12 w-12 place-items-center rounded-full bg-slate-500 text-white shadow hover:shadow-lg hover:scale-105 transition"><svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"></path></svg></a></div> <footer class="bg-stone-950 border-t border-stone-800 text-stone-200"><div class="max-w-6xl mx-auto px-4 py-8 space-y-6"><div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-start"><div class="md:w-1/2 space-y-2"><h2 class="text-base font-semibold tracking-wide text-stone-100">Cocinas Appel · Coyhaique</h2> <p class="text-sm text-stone-400 leading-relaxed">Fábrica y venta de cocinas a leña, calefactores de combustión lenta y soluciones
            de hojalatería para el sur de Chile. Más de 55 años de experiencia al servicio de la región.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 text-sm"><div><h3 class="text-xs font-semibold tracking-[0.18em] uppercase text-stone-300">Contacto</h3> <ul class="mt-3 space-y-1.5 text-stone-300"><li>Coyhaique, Región de Aysén, Chile</li> <li>+56 9 77082796</li> <li>appelpatagonia@gmail.com</li> <li class="text-stone-500 text-xs">Horario de atención referencial: Lun a Vie, 10:00 a 18:00 hrs.</li></ul></div> <div><h3 class="text-xs font-semibold tracking-[0.18em] uppercase text-stone-300">Información</h3> <ul class="mt-3 space-y-1.5 text-stone-300"><li><a href="/productos" class="hover:text-amber-300 transition">Catálogo de productos</a></li> <li><a href="/contacto" class="hover:text-amber-300 transition">Solicitar cotización</a></li> <li><a href="/galeria" class="hover:text-amber-300 transition">Galería</a></li> <li><a href="/privacidad" class="hover:text-amber-300 transition">Política de privacidad</a></li> <li class="text-stone-500 text-xs mt-2">Sitio web de demostración para fines académicos.</li></ul></div></div></div> <div class="border-t border-stone-800 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-stone-500"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Cocinas Appel. Todos los derechos reservados.</p> <p>Desarrollado como proyecto académico de transformación digital. Proyecto propio.</p></div></div></footer></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
