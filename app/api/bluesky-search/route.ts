const BLUESKY_SEARCH_URL =
  "https://api.bsky.app/xrpc/app.bsky.feed.searchPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const limit = searchParams.get("limit") ?? "10";

  if (!q) {
    return Response.json({ error: "Missing query parameter: q" }, { status: 400 });
  }

  const url = `${BLUESKY_SEARCH_URL}?q=${encodeURIComponent(q)}&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text();
    console.error(`Bluesky API error ${response.status}:`, body);
    return Response.json({ error: "Bluesky API error", status: response.status }, { status: 502 });
  }

  const data = await response.json();
  return Response.json(data);
}
