export function get(url, params = {}) {
  const p = new URLSearchParams(params).toString();
  return fetch(url + "/?" + p).then((r) => r.json());
}

export function post(url, params = {}) {
  return fetch(url, {
    method: "post",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
}
