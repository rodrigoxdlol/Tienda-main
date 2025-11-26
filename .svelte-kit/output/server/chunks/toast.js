import { w as writable } from "./index.js";
function createToasts() {
  const { subscribe, update } = writable([]);
  let id = 0;
  function show(text, type = "info", timeout = 2500) {
    const t = { id: ++id, text, type, timeout };
    update((list) => [...list, t]);
    if (timeout > 0) {
      setTimeout(() => dismiss(t.id), timeout);
    }
  }
  function dismiss(id2) {
    update((list) => list.filter((t) => t.id !== id2));
  }
  return { subscribe, show, dismiss };
}
const toasts = createToasts();
export {
  toasts as t
};
