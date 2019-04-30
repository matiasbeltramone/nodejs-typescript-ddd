/**
 * @example
 * Example GET one resource:
 * {
 *   "data": {
 *     "name": "Phil Sturgeon",
 *     "id": "511501255"
 *   }
 * }
 *
 * @example
 * Example GET list of resources:
 * {
 *   "data": [
 *     {
 *       "name": "Phil Sturgeon",
 *       "id": "511501255"
 *     },
 *     {
 *       "name": "Math Cowens",
 *       "id": "45353453"
 *     }
 *   ]
 * }
 *
 * @example
 * Example GET one resource with relationships:
 * {
 *   "data": {
 *     "name": "Phil Sturgeon",
 *     "id": "511501255",
 *     "comments": {
 *       "data": [
 *         {
 *           "id": 123423
 *           "text": "MongoDB is web-scale!"
 *         }
 *       ]
 *     }
 *   }
 * }
 */
export function success(data: any, details: string) {
  return {
    data,
    details
  };
}

/**
 * @example
 * Example stack of errors:
 * {
 *   "errors": [
 *     {
 *       "type": "OAuthException",
 *       "details": "Session has expired at unix time 1385243766. The current unix time is 1385848532.",
 *       "code": "ERR-01234",
 *       "href": "http://example.com/docs/errors/#ERR-01234"
 *     }
 *   ]
 * }
 */
export function error(type: any, details: string, code: string, href: string) {
  return {
    errors: {
      type,
      code,
      details,
      href
    },
  };
}
