import { getCookie, setCookie } from "@tanstack/start/server";

export class CookieUtils {
  static getCookie(key: string) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return getCookie(key);
    }

    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [_key, value] = cookie.split("=");
      if (_key === key) {
        return decodeURIComponent(value);
      }
    }
  }

  static setCookie(key: string, value: string) {
    if (typeof window === undefined) {
      return setCookie(key, value);
    }

    document.cookie = `${key}=${value}; path=/`;
  }
}
