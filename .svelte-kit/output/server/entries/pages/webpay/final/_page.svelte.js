import "clsx";
import { B as pop, z as push } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/state.svelte.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="min-h-[60vh] flex flex-col items-center justify-center p-6">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="animate-pulse text-lg text-gray-600">Verificando pago...</div>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
export {
  _page as default
};
