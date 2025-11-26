import "clsx";
import { B as pop, z as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/toast.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<p class="p-6">Cerrando sesión…</p>`);
  pop();
}
export {
  _page as default
};
