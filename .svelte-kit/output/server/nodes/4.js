

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/admin/+page.ts";
export const imports = ["_app/immutable/nodes/4.Do3uUffF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BtBNgcIe.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/luk3gl1z.js","_app/immutable/chunks/CwLoShKX.js","_app/immutable/chunks/WMMc_YU6.js","_app/immutable/chunks/DIJ89BUl.js","_app/immutable/chunks/Ccxz8Bhd.js","_app/immutable/chunks/DH8C1yjn.js","_app/immutable/chunks/BH5FzZss.js","_app/immutable/chunks/C-KkEP16.js"];
export const stylesheets = [];
export const fonts = [];
