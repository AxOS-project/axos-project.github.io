export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "GET") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    const url = new URL(request.url);
    const prefix = url.searchParams.get("prefix") || "";

    try {
      const listing = await env.AXMIRRORS.list({
        prefix: prefix,
        delimiter: "/",
      });

      return new Response(JSON.stringify(listing), {
        headers: {
          ...corsHeaders,
          "content-type": "application/json",
        },
      });
    } catch (e) {
      return new Response(e.message, { status: 500, headers: corsHeaders });
    }
  },
};