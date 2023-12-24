import "server-only";
/**
 * Returns the origin of the current request.
 * - Should not be called from a client-side component.
 * @returns Origin = Scheme + Domain Name + Port
 * e.g. https://www.example.com:80 or https://www.example.com
 *
 * This approach avoids using HTTP headers, which can be problematic when there are proxies involved, e.g. CDNs, load balancers, docker containers etc.
 */
export const getOriginFromServerEnvVars = () => {
  if (process.env.NODE_ENV === "development") {
    return `${process.env.NEXT_PUBLIC_URL}`;
  }
  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
};
