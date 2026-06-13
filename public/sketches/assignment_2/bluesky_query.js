class BlueskyQuery {
  queryURL = "/api/bluesky-search";

  async query(query, limit = 10) {
    try {
      let response = await fetch(
        `${this.queryURL}?q=${encodeURIComponent(query)}&limit=${limit}`,
      );
      let data = await response.json();
      return data.posts;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
