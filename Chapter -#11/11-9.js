/**
 * 11.9 URL APIs 
 */
let url = new URL("https://example.com:8000/path/name?q=term#fragment");
console.log(url.href);
console.log(url.origin);
console.log(url.protocol);
console.log(url.host);

console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);
console.log(url.username);

url = new URL("ftp://admin:1337!@ftp.example.com/");
console.log(url.href);
console.log(url.origin);
console.log(url.username);
console.log(url.password);


url = new URL("https://example.com"); // Start with our server
url.pathname = "api/"; // Add a path to an API endpoint
url.search = "q=test"; // Add a query parameter
console.log(url.toString());

url = new URL("https://example.com");
url.pathname = "path with spaces";
url.search = "q=foo#bar";
console.log(url.pathname);
console.log(url.search)
console.log(url.href);