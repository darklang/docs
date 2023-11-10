---
title: "Tutorial: Create a tool in a REPL"
sidebar_label: Create a tool in a REPL
id: create-tool-repl
---

REPLs in Darklang are general-purpose coding blocks. They're typically to create
reusable tools, experiments, one-off commands, or admin dashboards, in a similar
way that you might use scripts or REPLs in other languages.

We'll run you through creating a REPL, experimenting with the `HttpClient`
library to make API calls.

1. Open the omnibox by pressing (`Ctrl-K`/`Cmd-K`), and create a new REPL.

2. Type "httpclient" in the REPL (lowercase, no spaces)

![gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png)

This will show you all the standard library functions for `HttpClient`, their
signatures, and their docstrings.

3. Continue typing, until you have "httpclientpost". Darklang autocompletes on
   substrings so getting the exact text isn't important:

![gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png)

4. Hit enter to add the function into the handler.

![gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png)

Darklang automatically creates spaces for the four arguments that
`HttpClient::post` requires. We display a gray play button beside the function
&ndash; it will turn green when all the arguments are complete, allowing you to
run the function from within the editor.

5. Let's call a new `/test` endpoint for the application we're developing. As we
   saw from the GET, our endpoints live at
   USERNAME-gettingstarted.builtwithdark.com, so enter a string like
   `"https://USERNAME-gettingstarted.builtwithdark.com/test"`.

![gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png)

6. Next let's add the arguments. The structured editor simplifies creation of
   the arguments we want:

- For the body, we want to pass the value `{ test : "test1" }`. To do so, type
  `{` to start a record, then hit enter and add the key and the value.

- For the query, we want an empty dictionary. Type `{` to create one.

- For the header, we want the JSON content-type, so type "json" and the
  autocomplete will offer you a function to use.

![gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png)

7. Once we've filled in all the arguments, the play button (▶️) next to the
   function turns green, which means we can execute this code from within the
   editor.

![gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png)

8. Hitting play we receive a 404 response. This is because there's no `/test`
   endpoint on our canvas (yet!)

![gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png)

9. 404s in Darklang appear in the 404 section of the sidebar. We'll discuss that
   more later.

![gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png](/img/gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png)

Congratulations! You've built a Darklang REPL and which calls the Darklang HTTP
Client function.
