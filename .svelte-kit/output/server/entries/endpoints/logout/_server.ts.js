import { redirect } from "@sveltejs/kit";
const POST = async ({ cookies }) => {
  cookies.delete("jwt", { path: "/" });
  cookies.delete("rt", { path: "/" });
  throw redirect(303, "/");
};
export {
  POST
};
