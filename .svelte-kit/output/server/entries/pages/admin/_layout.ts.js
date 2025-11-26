import { redirect } from "@sveltejs/kit";
const ssr = false;
async function load({ fetch }) {
  const r = await fetch(`${"https://tienda-backend-rodrigo.azurewebsites.net"}/api/auth/me/`, { credentials: "include" });
  if (!r.ok) throw redirect(302, "/login");
  const me = await r.json();
  if (!(me.is_staff && me.authenticated)) throw redirect(302, "/");
  return { me };
}
export {
  load,
  ssr
};
