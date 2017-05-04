export {
  post,
  get
};

function post(url, data) {
  return fetch(new Request(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify(data)
  }));
}

function get(url) {
  return fetch(new Request(url, {
    method: 'GET'
  }));
}
