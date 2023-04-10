---
title: "Tutorial: Call an external API"
sidebar_label: "Call an external API"
id: call-external-api
---

Darklang has built-in standard libraries for working with external HTTP Calls
(`HTTP` and `HttpClient`). This allows you to work with any external REST APIs.

In this Tutorial, we'll send the Daily Report we created to Airtable, so other
team members can see it.

If you don't feel like setting up an Airtable account, this step can be safely
skipped, and you can continue to the [final step](./complete-first-application).

1. Set up Airtable (~10 minutes).

- Go to [Airtable](https://airtable.com) and create a new base.
- In the base, create two columns, one for date (field type is date) and one for
  requests (field type is number). You can see our sample
  [here](https://airtable.com/invite/l?inviteId=invOadxgcpBKaCQiv&inviteToken=e7492a049bf7e4cd1c475b43efac35d296578f66198bff549ca99af6ee5821b4).
  ![gettingstarted/newworker.png](/img/gettingstarted/airtable_base.png)
- Generate an API key on the [Account page](https://airtable.com/account). Put
  the API key in a function in your Darklang canvas.
  ![gettingstarted/newworker.png](/img/gettingstarted/airtable_key.png)
- Airtable's full API documentation for your base will be available on the
  [API page](https://airtable.com/api). Within this page, go to Create Records
  in the left hand navigation to copy the URI from the right hand side.
  ![gettingstarted/newworker.png](/img/gettingstarted/airtable_url.png)

2. Add the HTTP POST call to the `storeReport` worker so it will run
   asynchronously. Hit `return` after the `Db::set` function. `DB::set` will
   still run as a side effect, and we can add the new function.

![gettingstarted/newworker.png](/img/gettingstarted/apiworker_newline.png)

3. The `HttpClient::post` function takes four arguments. Paste the URI from
   Airtable from the base into the first argument.

![gettingstarted/newworker.png](/img/gettingstarted/api_httpclientpost.png)

4. Above `HttpClient::post` declare a new variable, `airtable_header`. Use the
   `HttpClient::bearerToken` and pass your API key function as the argument.
   Then, pipe `|>` into `Dict::merge` and merge with
   `HttpClient::jsonContentType`. The `airtable_header` will now be a nicely
   formatted header for the Airtable API.

![gettingstarted/newworker.png](/img/gettingstarted/api_header.png)

5. The query can be empty for this particular request, but we do need to provide
   an argument, such as `{}`.

6. Add the information from the report to the body (the date and number of
   requests). Airtable expects the following format:
   `records : [{fields : {Date : date, Requests : count}}]`

![gettingstarted/newworker.png](/img/gettingstarted/api_body.png)

7. Run the API request in the editor by hitting the play button next to
   `HttpClient::post`. If the request is successful, a success will be returned
   and you'll see the record in your Airtable base.

![gettingstarted/newworker.png](/img/gettingstarted/api_success.png)

If the request is not successful, the error message will be displayed in line,
and you'll see the `Error` on the error rail. In this case, the format of the
date passed did not expect what Airtable expected.

![gettingstarted/newworker.png](/img/gettingstarted/api_error.png)

8. Each time your cron runs (daily, or when triggered) a record will be added to
   your Airtable base.
