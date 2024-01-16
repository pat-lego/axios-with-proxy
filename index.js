
const { HttpsProxyAgent } = require("https-proxy-agent")
let axios = require("axios")

async function exec(body, proxy) {
    if (proxy) {
        const httpsAgent = new HttpsProxyAgent({host: proxy.host, port: proxy.port})
        axios = axios.create({httpsAgent})
        const { data } = await axios.post(body.url, {
            ...body.body
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return data
    } else {
        const { data } = await axios.post(body.url, {
            ...body.body
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return data
    }
}

(async () => {
    const url = process.argv.slice(2)
    const data = await exec({url: url, body :{ "message": "Hello World" }}, {
        protocol: 'http',
        host: "127.0.0.1",
        port: 8888,
    })
    console.log(data)
})()
