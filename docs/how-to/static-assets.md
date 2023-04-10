---
id: static-assets
title: How to host Static Assets on Darklang
sidebar_label: How to host Static Assets
---

Darklang supports hosting your static assets.

Our static assets service is designed to be simple, easy to understand, as well
as composable and configurable. As such, a static assets deploy uploads your
assets to our cloud CDN, and we provide powerful tools in Darklang to serve and
configure them.

A
[GitHub Action](https://github.com/marketplace/actions/upload-static-assets-to-dark-canvas)
to automate this process is now available thanks to one of our fantastic
community members, Greg Brimble!

## Simple Use Case

_Note: You can see the finished product at
[https://darklang.com/a/sample-static-assets](https://darklang.com/a/sample-static-assets)_

We have a single page app, written in react. It talks to our API, written in
Darklang. Now we’d like to deploy that app so that customers can use it too.
This also works in a similar way for Vue applications, with a few caveats called
out in line.

Here’s how we want our app to work:

- we have an API, served from `/api/`
- `/` serves our `index.html` page from our assets
- `index.html` should point to our static assets host to fetch other assets

**We’ll focus on the last two things we want our app to do in this document.**

At a high level, here are the steps:

1. deploy the assets using the dark-cli app
2. load the index page
3. configure your react app

## Deploying Assets

We have a command-line app to allow you to deploy your assets.

### Installation

1. Go to
   [https://dark-cli.storage.googleapis.com/index.html](https://dark-cli.storage.googleapis.com/index.html),
   and download the appropriate binary for macOS, Windows, or Linux.
2. On macOS or Linux,

   ```shell
   chmod +x dark-cli-apple
   ```

   or

   ```shell
   chmod +x dark-cli-linux
   ```

   to make it executable.

3. To confirm it works, run it with `-—help`:

   macOS:

   ```shell
   ./dark-cli-apple --help
   ```

   Linux:

   ```shell
   ./dark-cli-linux --help
   ```

   Windows:

   ```shell
   ./dark-cli.exe --help
   ```

4. On some versions of macOS, you may get one of the the following popups:

   ![Not downloaded from the app store popup](/img/staticassets/macos-popup1.png)

   ![Developer cannot be verified popup](/img/staticassets/macos-popup2.png)

   to resolve this, press `Ok` or `Cancel` and open
   `System Preferences -> Security & Privacy -> General`.

   ![System Preferences -> Security & Privacy -> General -> Allow Anyway](/img/staticassets/macos-allow.png)

   Press `Allow Anyway` and repeat step 3.

### Configure your client

At the moment, our CDN does not support the use of absolute URLs in the
generated files. For example, if your CSS file links an image at
`/static/myimage.png`, that file will not load. You need to use relative URLs
instead, in this case `./myimage.png`.

Your `index.html` likely loads other assets, such as `app.css` or `app.js`. For
speed, you will load these directly from the Darklang CDN, not via your Darklang
handler. As such, we’ll need to make some edits to your assets to ensure they’re
always pointing at the CDN for other assets.

During the deployment of the assets, our backend replaces the string
`DARK_STATIC_ASSETS_BASE_URL` in all of your assets with the actual URL of this
deployment.

When not using a framework, prefix asset paths with Darklang's magic string, for
example:

```html
<img src="DARK_STATIC_ASSETS_BASE_URL/logo.svg" />
```

In React, when compiling your react application, you can use `PUBLIC_URL`:

```bash
PUBLIC_URL=DARK_STATIC_ASSETS_BASE_URL npm run build
```

If using Angular, you can run the following command:

```bash
ng build --prod --deploy-url DARK_STATIC_ASSETS_BASE_URL/
```

If using Vue, you likely want to set `PUBLIC_PATH` instead:

```bash
PUBLIC_PATH=DARK_STATIC_ASSETS_BASE_URL
```

Additionally, Vue assumes relative paths. If you are having an issue with your
assets, check to make sure that `index.html` has not added leading path notation
(`/PUBLIC_PATH`). If it has, you can manually remove and redeploy. More on using
this for Vue here:

[vuejs/vue-cli](https://github.com/vuejs/vue-cli/tree/dev/docs/config#publicpath)

### Deploy

1. To deploy, select the directory you want to upload. In this case, we’ll use
   React’s default directory `build`.
2. Run:

   ```bash
    # The single quotes - around mypass help protect against shell escaping and interpolation.
    # If your password contains a single quote or a backslash don't forget to escape it with a \
   ./dark-cli-apple --canvas myusername-mycanvas --password 'mypass' --user myusername build
   ```

(If you want to avoid shell escaping issues entirely, we also support putting
your creds in `~/.netrc`; the format for that is documented at
[https://ec.haxx.se/usingcurl/usingcurl-netrc](https://ec.haxx.se/usingcurl/usingcurl-netrc)
for machine `darklang.com`).

On success, we’ll show you the deploy hash, a URL, and a long URL. These are
where your static assets now live! You can see your static assets in the Routing
table in your canvas:

![ticassets/image1.png](/img/staticassets/image1.png)

## Set up your App to Load your Assets

If your SPA framework generates an `index.html`, or you write one yourself, you
can load that for the `/` route in Darklang.

- Add a handler for `/` to load your `index.html` page using
  `StaticAssets::serveLatest "index.html"`.
- If you’re using client-side routing, you can also add a handler serving
  `index.html` for `/:rest` which will be a catch-all handler for any URL
  (besides `/`) that doesn’t have another handler defined for it. This will
  allow your users to load your assets from any of your app’s URLs.

You can copy and paste this example from
[https://darklang.com/a/sample-static-assets](https://darklang.com/a/sample-static-assets).

## Implementing a Fallback in the Case of a 404

If you’re looking to serve a fallback asset, you can use a match statement:

![ticassets/image2.png](/img/staticassets/image2.png)

## Advanced: Feature Flags and Continuous Delivery

We’ve shown you how to deploy new assets that appear immediately. However, you
often want to control the rollout of those assets, perhaps seeing them yourself,
or only showing them to users who have opted into beta features. As a result, it
is easy to use Darklang Static Assets with feature flags.

Instead of calling `HttpClient::serveLatest`, you can call `HttpClient::serve`,
and use the deploy hash from your command line.

## Reference

### Functions

- `urlFor <deployHash : String> <file : String> -> String`
  - Returns a URL to a file for the current canvas and the given `deployHash`:
  - `StaticAssets::urlFor "o6vs1aqcbx" "foo.html"` ->
    `"https://ismith-staticassets.darksa.com/stgbcg3kez_zb9-wlbtgta563t8/o6vs1aqcbx/foo.html"`
- `urlForLatest <file : String> -> String`
  - Returns a URL to a file for the current canvas and the latest deploy:
  - `StaticAssets::urlForLatest "foo.html"` ->
    `"https://ismith-staticassets.darksa.com/stgbcg3kez_zb9-wlbtgta563t8/o6vs1aqcbx/foo.html"`
- `fetch <deployHash : String> <file : String> -> String`
  - Returns the contents of a file for the current canvas and the given
    `deployHash`:
  - `StaticAssets::fetch "o6vs1aqcbx" "foo.html"` ->
    `"<html><body>Hello, world!</body></html>"`
- `fetchLatest <file : String> -> String`
  - Returns a URL to a file for the current canvas and the latest deploy:
  - `StaticAssets::fetchLatest "foo.html"` ->
    `"<html><body>Hello, world!</body></html>"`
- `serve <deployHash : String> <file : String> -> String`
  - Returns the contents of a file for the current canvas and the given
    `deployHash`:
  - `StaticAssets::serve "o6vs1aqcbx" "foo.html"` -> responds with the file
    `foo.html` and the headers that the static assets CDN provided
- `serveLatest <file : String> -> String`
  - Returns a URL to a file for the current canvas and the latest deploy:
  - `StaticAssets::serveLatest "foo.html"` -> responds with the file `foo.html`
    and the headers that the static assets CDN provided

### Command line reference

```shell
./dark-cli-apple
error: The following required arguments were not provided:
  <paths>
  --canvas <canvas>
  --password <password>
  --user <user>

USAGE:
dark-cli-apple [FLAGS] <paths> --canvas <canvas> --password <password> --user <user>
```
