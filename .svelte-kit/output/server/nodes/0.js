import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CvRHEmYt.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/luk3gl1z.js","_app/immutable/chunks/CwLoShKX.js","_app/immutable/chunks/_gNL4IXV.js","_app/immutable/chunks/D8bngpjW.js","_app/immutable/chunks/Dg-zomkE.js","_app/immutable/chunks/WMMc_YU6.js","_app/immutable/chunks/CkmYFb5S.js","_app/immutable/chunks/DIJ89BUl.js","_app/immutable/chunks/CdEA5IGF.js","_app/immutable/chunks/Ccxz8Bhd.js","_app/immutable/chunks/DH8C1yjn.js","_app/immutable/chunks/BH5FzZss.js","_app/immutable/chunks/DmIQJ0OO.js","_app/immutable/chunks/5pKeZvy2.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/C-KkEP16.js","_app/immutable/chunks/BtBNgcIe.js","_app/immutable/chunks/ThBeqclG.js","_app/immutable/chunks/B8t32BjD.js","_app/immutable/chunks/UF_B8rlF.js","_app/immutable/chunks/wZ8Uf4_x.js"];
export const stylesheets = ["_app/immutable/assets/0.CCjBHU4L.css"];
export const fonts = [];
