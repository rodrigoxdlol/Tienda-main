import * as server from '../entries/pages/contacto/_page.server.ts.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacto/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/contacto/+page.ts";
export { server };
export const server_id = "src/routes/contacto/+page.server.ts";
export const imports = ["_app/immutable/nodes/19.B7ifwHA-.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/luk3gl1z.js","_app/immutable/chunks/CwLoShKX.js","_app/immutable/chunks/_gNL4IXV.js","_app/immutable/chunks/D8bngpjW.js","_app/immutable/chunks/Dg-zomkE.js","_app/immutable/chunks/WMMc_YU6.js","_app/immutable/chunks/CkmYFb5S.js","_app/immutable/chunks/DIJ89BUl.js","_app/immutable/chunks/DGOQ8hUW.js","_app/immutable/chunks/CdEA5IGF.js","_app/immutable/chunks/Ccxz8Bhd.js","_app/immutable/chunks/DH8C1yjn.js","_app/immutable/chunks/BH5FzZss.js","_app/immutable/chunks/Iv4i7Y_e.js","_app/immutable/chunks/ThBeqclG.js","_app/immutable/chunks/ByMdc6nW.js","_app/immutable/chunks/C-KkEP16.js","_app/immutable/chunks/BtBNgcIe.js"];
export const stylesheets = [];
export const fonts = [];
