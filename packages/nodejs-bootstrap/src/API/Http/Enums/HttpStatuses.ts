/**
 * REFERENCES:
 * 2xx is all about success:
 * Whatever the client tried to do was successful up to the point that the response was
 * sent. Keep in mind that a status like 202 Accepted doesn’t say anything about the
 * actual result, it only indicates that a request was accepted and is being processed
 * asynchronously.
 *
 * 3xx is all about redirection
 * These are all about sending the calling application somewhere else for the actual
 * resource. The best known of these are the 303 See Other and the 301 Moved
 * Permanently which are used a lot on the web to redirect a browser to another URL.
 *
 * 4xx is all about client errors
 * With these status codes we indicate that the client has done something invalid and
 * needs to fix the request before resending it.
 *
 * 5xx is all about service errors
 * With these status codes we indicate that something went wrong in the service. For
 * example a database connection failed. Typically a client application can retry the
 * request. The server can even specify when the client is allowed to retry the command
 * using a Retry-After HTTP header.
 *
 * Examples error status:
 * 204 (No Content) The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.
 * 400 (Bad Request)	Any case where a parameter is invalid, or a required parameter is missing. This includes the case where no OAuth token is provided and the case where a resource ID is specified incorrectly in a path.
 * 401 (Unauthorized)	The OAuth token was provided but was invalid.
 * 403 (Forbidden)	The requested information cannot be viewed by the acting user, for example, because they are not friends with the user whose data they are trying to read.
 * 404 (Not Found)	Endpoint does not exist.
 * 405 (Method Not Allowed)	Attempting to use POST with a GET-only endpoint, or vice-versa.
 * 409 (Conflict)	The request could not be completed as it is. Use the information included in the response to modify the request and retry.
 * 500 (Internal Server Error) Kiwing’s servers are unhappy. The request is probably valid but needs to be retried later.
 *
 * Examples error types:
 * invalid_auth	401	OAuth token was not provided or was invalid.
 * param_error	400	A required parameter was missing or a parameter was malformed. This is also used if the resource ID in the path is incorrect.
 * endpoint_error	404	The requested path does not exist.
 * not_authorized	403	Although authentication succeeded, the acting user is not allowed to see this information due to privacy restrictions.
 * rate_limit_exceeded	403	Rate limit for this hour exceeded.
 * quota_exceeded	429	Daily call quota exceeded.
 * deprecated	200	Something about this request is using deprecated functionality, or the response format may be about to change.
 * server_error	Varies	Server is currently experiencing issues.
 */
export const HTTP_CODES = {
  OK: 200,
  CREATED: 201,
  ASYNC: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  GONE: 410,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_ERROR: 500,
  UNAVAILABLE: 503,
};
