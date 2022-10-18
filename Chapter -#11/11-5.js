/**
 * 11.5 Error Classes
 */
class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
    get name() { return "HTTPErros"; }
}
let error = new HTTPError(404, "NOT FOUND", "http://example.com/");
console.log(error.status);
console.log(error.message);
console.log(error.name);