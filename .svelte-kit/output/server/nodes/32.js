

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/productos/_slug_/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/productos/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/32.C2AZh843.js","_app/immutable/chunks/BtBNgcIe.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/luk3gl1z.js","_app/immutable/chunks/CwLoShKX.js","_app/immutable/chunks/D8bngpjW.js","_app/immutable/chunks/WMMc_YU6.js","_app/immutable/chunks/ThBeqclG.js","_app/immutable/chunks/CkmYFb5S.js","_app/immutable/chunks/DIJ89BUl.js","_app/immutable/chunks/Ccxz8Bhd.js","_app/immutable/chunks/DeyUZ0zj.js","_app/immutable/chunks/DH8C1yjn.js","_app/immutable/chunks/BH5FzZss.js","_app/immutable/chunks/UF_B8rlF.js","_app/immutable/chunks/Iv4i7Y_e.js","_app/immutable/chunks/DGOQ8hUW.js","_app/immutable/chunks/ByMdc6nW.js"];
export const stylesheets = [];
export const fonts = [];
