import { d as derived, w as writable } from "./index.js";
const cart = writable(null);
const count = derived(cart, (c) => c ? c.items.reduce((n, i) => n + i.qty, 0) : 0);
const total = derived(cart, (c) => c?.total ?? 0);
export {
  cart as a,
  count as c,
  total as t
};
