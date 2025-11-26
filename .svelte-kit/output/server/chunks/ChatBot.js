import "clsx";
import { B as pop, z as push } from "./index2.js";
function ChatBot($$payload, $$props) {
  push();
  $$payload.out.push(`<button class="fixed bottom-4 right-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 shadow-lg hover:bg-amber-400 transition active:scale-95 text-white" aria-label="Abrir chat de ayuda">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`💬`);
  }
  $$payload.out.push(`<!--]--></button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
export {
  ChatBot as C
};
