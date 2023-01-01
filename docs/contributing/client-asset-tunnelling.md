---
id: client-asset-tunnelling
title: Client Asset Tunnelling
---

It's often useful to test local editor/client changes against the production
backend. The editor includes a "Tunnel" feature to support this.

## Host the static assets locally

First, you'll need a web server on your machine to host the static assets. The
editor's build artifacts are hosted in `backend/static`, so you'll need to host
that directory. Many tools can be used to accomplish this task - here's how to
do this with the [static-server](https://www.npmjs.com/package/static-server)
npm package.

- `cd backend/static`
- `npx static-server -c '*' -p [port]`

You can choose any port available locally, and `-c '*'` instructs the server to
include `access-control-allow-origin: *` headers for all requests.

## Create the tunnel to expose this web server to the internet

Now, create a tunnel to expose the webserver to the internet.

- Install [ngrok](https://ngrok.com) on your machine
- `ngrok http [port]` to create the tunnel on the port where your webserver is
  serving the static assets

Alternative tools include [localtunnel](https://localtunnel.me).

## Register the tunnel in the Editor

Finally, copy/paste the hostname provided to you by your tunnel, and choose to
"Use tunneled assets" in the Contributing tab of the Editor's settings. This
will cause a refresh of the editor, with static assets being served through the
tunnel from your local dev environment.
