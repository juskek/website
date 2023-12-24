"use client";

/**
 * Returns the origin of the current webpage.
 * - Will be undefined at build time, since SSG does not have access to the window object.
 * - Will be undefined if called in a server-side component, since SSR does not have access to the window object.
 * - Should not be undefined when called in a client-side component.
 * @returns Origin = Scheme + Domain Name + Port
e.g. https://www.example.com:80 or https://www.example.com
 */
export function getOriginFromClient(): string | undefined {
  return typeof window !== "undefined" ? window.location.origin : undefined;
}
