import { a as attr } from "../../../../chunks/attributes.js";
import { B as pop, z as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let search = "";
  let onlyActive = false;
  let onlyStaff = false;
  $$payload.out.push(`<div class="min-h-screen bg-slate-50/80"><div class="mx-auto max-w-7xl px-4 py-6 lg:py-8"><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div class="space-y-2"><div class="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-xs font-medium shadow-sm"><span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Panel admin · Usuarios</div> <div><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Gestión de usuarios</h1> <p class="text-slate-600 mt-1 text-sm sm:text-base">Administra accesos, roles y estado de las cuentas de la plataforma.</p></div></div> <div class="flex flex-col gap-3 sm:flex-row sm:items-center w-full sm:w-auto"><div class="flex flex-col gap-2 sm:flex-row sm:items-center w-full"><div class="flex items-center gap-2 w-full sm:w-auto"><div class="relative flex-1 sm:w-64"><span class="pointer-events-none absolute inset-y-0 left-3 flex items-center"><svg class="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none"><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><circle cx="11" cy="11" r="5.5" stroke="currentColor" stroke-width="1.6"></circle></svg></span> <input class="w-full rounded-xl border border-slate-300 bg-white/80 px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400 shadow-sm" placeholder="Buscar por usuario o email…"${attr("value", search)}/></div> <button class="rounded-xl px-3 py-2 text-sm ring-1 ring-slate-300 hover:bg-slate-100 bg-white/80 shadow-sm whitespace-nowrap">Buscar</button></div> <div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700"><label class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><input type="checkbox" class="rounded border-slate-300 text-slate-900 focus:ring-slate-500"${attr("checked", onlyActive, true)}/> <span>Solo activos</span></label> <label class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><input type="checkbox" class="rounded border-slate-300 text-slate-900 focus:ring-slate-500"${attr("checked", onlyStaff, true)}/> <span>Solo staff</span></label></div></div> <button class="w-full sm:w-auto rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-md hover:bg-black transition-colors">+ Nuevo usuario</button></div></div> <div class="mt-6 rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="p-6 flex items-center gap-3 text-slate-600"><span class="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-slate-300 border-t-slate-500"></span> <span>Cargando usuarios…</span></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
export {
  _page as default
};
