

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/admin/+layout.ts";
export const imports = ["_app/immutable/nodes/2.dD6x0bdr.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CwLoShKX.js","_app/immutable/chunks/Dg-zomkE.js"];
export const stylesheets = [];
export const fonts = [];
