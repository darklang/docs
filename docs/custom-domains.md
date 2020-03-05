---
id: custom-domains
title: Set a Custom Domain
sidebar_label: Set a Custom Domain
---

If you'd like to use a custom domain instead of `<canvas>.builtwithdark.com`, you can!

- We'll manage SSL for you - no need to buy your own cert.
- You need to set up a CNAME from your desired domain to `canvas.builtwithdark.com`.
    - Note: this cannot be an apex (`foo.com`); using `www.foo.com` is the usual
    way, though you could use `app` or `api` or another subdomain instead of
    `www`. Why? Netlify has a post about this
    ([https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/](https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/)), but tl;dr apex
    CNAMEs aren't supported by the DNS spec, and A records remove some of our
    options for providing stable and resilient infrastructure.

- You can, if you wish, also set up an A record pointing the apex (`foo.com`) to
`35.227.208.117`; we cannot currently provide an SSL cert for that, but we can
redirect to your main subdomain (usually `www`). If your DNS provider supports
ALIAS records (like CNAME, but permitted on an apex), that also works - though
again, for redirects, not SSL certs.

- Once DNS resolves, [contact us](support) with your domain and canvas, and
  we'll set things up on our end.
