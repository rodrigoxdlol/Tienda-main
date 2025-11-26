const API = "https://tienda-backend-rodrigo.azurewebsites.net"?.replace(/\/+$/, "") || "";
async function apiGet(path) {
  const r = await fetch(`${API}${path}`, { credentials: "include" });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
async function me() {
  return apiGet("/api/auth/me/");
}
async function listProducts() {
  return apiGet("/api/products/");
}
async function getProduct(slugOrId) {
  try {
    const productDetail = await apiGet(`/api/products/${slugOrId}/`);
    console.log("Producto desde endpoint individual:", productDetail);
    return productDetail;
  } catch (e) {
    console.log("Endpoint individual falló, usando listado:", e);
    const products = await listProducts();
    const found = products.find(
      (p) => p.slug === slugOrId || p.id === slugOrId || String(p.id) === String(slugOrId)
    );
    if (!found) {
      throw new Error("Product not found");
    }
    console.log("Producto desde listado:", found);
    return found;
  }
}
export {
  API as A,
  getProduct as g,
  me as m
};
