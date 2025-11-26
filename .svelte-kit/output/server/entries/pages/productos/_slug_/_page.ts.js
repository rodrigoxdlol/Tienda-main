import { g as getProduct } from "../../../../chunks/api.js";
import { error } from "@sveltejs/kit";
const load = async ({ params }) => {
  try {
    const product = await getProduct(params.slug);
    return { product };
  } catch (e) {
    throw error(404, "Producto no encontrado");
  }
};
export {
  load
};
