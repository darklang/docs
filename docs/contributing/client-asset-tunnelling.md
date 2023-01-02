---
id: client-asset-tunnelling
title: Client Asset Tunnelling
---

The best way to work on the Dark client is by building it against the production
Dark APIs. In the future as we move more part of the editor to be built in Dark,
it will become the only way to work on the Dark client.

![Client asset tunnelling](/img/contributing/client-asset-tunnelling.gif)

## Host the static assets locally

First, you'll need a web server on your machine to host the static assets. The
editor's build artifacts are hosted in `backend/static`, so you'll need to host
that directory. Many tools can be used to accomplish this task - here's how to
do this with the [static-server](https://www.npmjs.com/package/static-server)
npm package.

- `cd backend/static`
- `npx static-server --cors '*' --port [port]`

You can choose any port available locally, and `--cors '*'` instructs the server
to include `access-control-allow-origin: *` headers for all requests.

## Create the tunnel to expose this web server to the internet

Now, create a tunnel to expose the webserver to the internet.

- Install [ngrok](https://ngrok.com) on your machine
- `ngrok http [port]` to create the tunnel on the port where your webserver is
  serving the static assets

Alternative tools include [localtunnel.me](https://localtunnel.me) and
[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/).

## Register the tunnel in the Editor

Finally, use the tunnel in the editor:

- Go to Settings (from the icon in the top-right of the editor)
- Go to the Contributing tab
- Enter the hostname provided to you by your tunnel
- Choose to "Use tunneled assets"

This will cause a refresh of the editor, with static assets being served through
the tunnel from your local dev environment.
