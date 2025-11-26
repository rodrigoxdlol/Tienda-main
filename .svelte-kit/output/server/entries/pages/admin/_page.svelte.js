import { D as store_get, G as attr_class, E as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index2.js";
import { u as user } from "../../../chunks/auth.store.js";
import { c as clsx } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const tile = "group rounded-2xl bg-white ring-1 ring-slate-200 p-5 hover:shadow-md transition-shadow";
  $$payload.out.push(`<h1 class="text-2xl font-semibold">Panel</h1> `);
  if (store_get($$store_subs ??= {}, "$user", user)?.authenticated && store_get($$store_subs ??= {}, "$user", user)?.is_staff) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"><a href="/admin/products"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Productos</div> <p class="text-sm text-slate-600 mt-1">Gestiona catálogo, precios e imágenes.</p></a> <a href="/admin/orders"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Órdenes</div> <p class="text-sm text-slate-600 mt-1">Revisa pedidos y su estado.</p></a> <a href="/admin/home-media"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Inicio</div> <p class="text-sm text-slate-600 mt-1">Imágenes del slider de la portada.</p></a> <a href="/admin/gallery-media"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Galería</div> <p class="text-sm text-slate-600 mt-1">Gestiona la galería pública.</p></a> <a href="/admin/users"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Usuarios</div> <p class="text-sm text-slate-600 mt-1">Gestiona cuentas de usuario.</p></a> <a href="/admin/estadisticas"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Estadisticas</div> <p class="text-sm text-slate-600 mt-1">Visión para analisis de productos y categorias.</p></a> <a href="/admin/reclamos"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Reclamos</div> <p class="text-sm text-slate-600 mt-1">Gestiona reclamos de clientes.</p></a> <a href="/admin/noticias"${attr_class(clsx(tile))}><div class="text-slate-800 font-semibold">Noticias</div> <p class="text-sm text-slate-600 mt-1">Gestión de noticias.</p></a></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="mt-4 text-slate-600">Inicia sesión con una cuenta de staff para ver el panel.</p>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
