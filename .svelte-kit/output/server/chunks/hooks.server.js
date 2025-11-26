const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("jwt") ?? null;
  event.locals.token = token;
  return resolve(event);
};
export {
  handle
};
