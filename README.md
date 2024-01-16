# Axios with proxy

This project is an example implementation of using a POST request with Axios going through Tinxproxy

## How to run

1. Create a mockbin URL https://mockbin.io/
2. Copy the URL for your mockbin
3. Install tinyproxy `brew install tinyproxy`
4. Start tinyproxy `tinyproxy -d -c tinyproxy.conf`
5. Execute `npm install`
6. Execute `node index.js [MOCKBIN_URL]`
7. See that you went through the proxy