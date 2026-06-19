export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://axos-project.com/",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "GET") {
      return new Response("Méthode non autorisée", { status: 405, headers: corsHeaders });
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
      return new Response("Erreur interne du miroir", { status: 500 });
    }
  },
};