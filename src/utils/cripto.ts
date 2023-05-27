export function encryptValues(data: string) {
  return btoa(unescape(encodeURIComponent(data)))
}

export function decryptValues(b64: string) {
  return decodeURIComponent(escape(atob(b64)))
}
