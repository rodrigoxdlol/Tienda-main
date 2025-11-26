import { redirect } from "@sveltejs/kit";
import { m as me } from "../../../chunks/api.js";
const ssr = false;
async function load() {
  const u = await me().catch(() => ({ authenticated: false }));
  if (!u.authenticated) throw redirect(302, "/login");
  return { user: u };
}
export {
  load,
  ssr
};
