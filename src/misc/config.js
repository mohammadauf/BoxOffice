const BASE_API = "https://api.tvmaze.com";

export async function apiGet(queryString) {
  const response = await fetch(`${BASE_API}${queryString}`).then((r) => r.json());
  return response;
}
