#### How the web works: Requests and Responses

- Name: **Request-response model** or **Client-server architecture**

- Explain:

  - DNS(Domain Name System)
  - TCP(Transmission Control Protocol)
    - Break the requests and responses down into thousands of small chunks called **packets** before sent
    - When all arive, TCP will reassemble all the packets into the original request or response
  - IP(Internet Protocol)
    - Send and route **packets** from TCP through the Internet
      -To ensures that they arrive at the destination they should go, using IP adresses on each **packet**
  - HTTP(Hypertext Transfer Protocol)
  - Communication protocols:
    - A system of rules that allows two or more parties to communicate
    - Define exactly how data travels across the Web

- Adress : https://restcountries.com/v3.1/all
  - https:// : Protocol (HTTP or HTTPS)
  - restcountries.com : Domain name
  - v3.1/all : Resource
- Step 1: DNS lookup

  - Brower make a request to a DNS
  - Domain name not a real adress of the server
  - DNS will match the web adress of the URL to the server's real IP adress
  - IP adress sent back to the browser

- Real address: https://104.27.142.889:443

  - https:// : Protocol (HTTP or HTTPS)
  - 104.27.142.889 : IP adress
  - :443 : Port number (Default `443` for HTTPS, `80` for HTTP )

- Step 2: TCP/IP socket connection

  - Together they are communication protocols that define exactly how data travels across the Web'
  - Fundamental control system

- Step 3: HTTP REQUEST
  [`GET /rest/v3.1/alpha/PT HTTP/1.1` (1)

  Host: www.google.com
  User-Agent: Mozilla/5.0 (2)
  Accept-Language: en-US

    <BODY> (3)
    ]

  - (1): **Start line**: HTTP method + request target + HTTP version
  - (2): **HTTP request headers**(many different possibilities)
  - (3): **Request body**(only when sending data to server e.g `POST`)

- Step 4: HTTP RESPONSE
  [`HTTP/1.1 200 OK` (1)

  Date: Fri, 18 Jan 2021
  Content-Type: text/html (2)
  Transfer-Encoding: chunked

  <BODY>  (3)
  ]

  - (1): **Start line**: HTTP version + status code + status message
  - (2): **HTTP response headers**(many different possibilities)
  - (3): **Request body**(most responses)

- Step 5: Scan and build
  - `index.html` is the first to be loaded
  - Scanned for assets: JS,CSS, images
    => Process is repeated for each file
