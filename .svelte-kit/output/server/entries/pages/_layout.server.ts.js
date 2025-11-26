import { p as public_env } from "../../chunks/shared-server.js";
async function load({ fetch }) {
  try {
    const res = await fetch(`${public_env.PUBLIC_API_BASE}/auth/me/`, {
      credentials: "include"
    });
    if (res.ok) {
      const me = await res.json();
      return { authed: true, me };
    }
  } catch {
  }
  return { authed: false };
}
export {
  load
};
