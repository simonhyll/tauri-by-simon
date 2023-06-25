# Custom URI schema

A custom URI schema allows you to register extra routes essentially that Tauri will intercept before they actually reach the network, send to a local function, then respond to as if it has been fetched from the internet. If you are familiar with how service workers function it's a lot like that.

## What is a "URI schema protocol"?

A URI is a "Uniform Resource Identifier". A schema protocol is something along the lines of `asset://`. You probably recognize it from `https://`. They're essentially the same thing, ways of telling the system how it should handle the request being made. By registering your own custom protocol you can tell the system to let you make HTTP style requests to resources at that protocol as per usual, but have non-standard applications handle the actual request made.

## Today we learned...

- **URI**:
