import { API_URL } from "constants/api";

const parseResponse = async (res: Response) => {
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw json;
  }
};

const params = (sendJson = true) => {
  const headers: HeadersInit = {
    Accept: "application/json",
  };
  if (sendJson) {
    headers["Content-Type"] = "application/json";
  }
  return {
    headers,
  };
};

const base = (url: string) => {
  return url.startsWith("http") ? url : API_URL + url;
};

const get = <T>(url: string): Promise<T> =>
  fetch(base(url), { ...params(), method: "GET" }).then(parseResponse);

const post = <T, B>(url: string, body: B): Promise<T> =>
  fetch(base(url), {
    ...params(),
    method: "POST",
    body: JSON.stringify(body),
  }).then(parseResponse);

const postForm = <T>(url: string, formData: FormData): Promise<T> =>
  fetch(base(url), {
    ...params(false),
    method: "POST",
    body: formData,
  }).then(parseResponse);

export const httpClient = { get, post, postForm };
