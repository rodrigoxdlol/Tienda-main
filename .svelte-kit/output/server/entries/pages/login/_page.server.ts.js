import { fail, redirect } from "@sveltejs/kit";
const API = "http://localhost:8000";
const actions = {
  default: async ({ request, cookies, fetch }) => {
    const fd = await request.formData();
    const username = String(fd.get("username") ?? "");
    const password = String(fd.get("password") ?? "");
    const r = await fetch(`${API}/api/token/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (!r.ok) {
      return fail(400, { error: "Credenciales inválidas." });
    }
    const { access, refresh } = await r.json();
    cookies.set("jwt", access, { path: "/", httpOnly: true, sameSite: "lax", secure: false, maxAge: 60 * 60 });
    cookies.set("rt", refresh, { path: "/", httpOnly: true, sameSite: "lax", secure: false, maxAge: 60 * 60 * 24 * 7 });
    throw redirect(303, "/admin");
  }
};
export {
  actions
};
