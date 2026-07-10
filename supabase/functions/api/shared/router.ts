// Minimal router.ts for supabase edge function
// Provides a named export `routeRequest` expected by other modules.

export type RouteHandler = (req: Request) => Promise<Response> | Response;

const routes: Record<string, RouteHandler> = {
  // Register routes here, e.g.:
  // "GET /": async (req) => new Response('OK'),
};

function matchRoute(req: Request): RouteHandler | undefined {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const method = req.method.toUpperCase();
  const key = `${method} ${pathname}`; // simple exact-match router
  return routes[key];
}

export async function routeRequest(req: Request): Promise<Response> {
  const handler = matchRoute(req);
  if (handler) return await Promise.resolve(handler(req));

  // Default 404 response
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
