---
id: getting-started-tutorial
title: Your first Dark app
---

## Tutorial: Getting Started

Hello!

Welcome to Dark. We highly recommend trying this getting started project to setup an API + data storage first - it will get you through all the key concepts including Trace Driven Development, Live Values, and the Interactive Editor.

## Canvas

When you open Dark, you'll be able to access any canvas in your username by opening it in the browser (darklang.com/a/USERNAME-CANVASNAME). In this case, use darklang.com/a/USERNAME-gettingstarted. Each handler we'll build is replicated in [https://darklang.com/a/sample-gettingstarted](https://darklang.com/a/sample-gettingstarted), though we recommend writing the code yourself instead of copy pasting.

The canvas allows you to create each major component in Dark from the sidebar, or from the omnibox (click anywhere on the screen or hit cmd-k).

## Your first API Endpoint (HTTP GET)

**Concepts:** Structural elements, blanks, implicit returns, traces.

1. Create a new HTTP endpoint from the omnibox or sidebar.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.10.26_AM.png)

2. Specify that the verb is "GET" and the route is "/math."

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.11.23_AM.png)

3. You can now write any code in the blank. For instance, write 4.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.02_AM.png)

This results in an API that has the return value of 4. Click the hamburger in the upper right and select "open in new tab". Then, you see your API running in production.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.12.43_AM.png)

4. Go back to Dark to edit your code. Add + 5 to the end of the code and leave your cursor in line.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.14.25_AM.png)

- The "9" at the bottom shows you the return value for the handler (what your API will now return if you open it in the browser).
- The "5" on the left is showing the result of the expression where the cursor currently is (in this case, 5). This isn't very useful when it's an integer, but if it's a variable it will show you the result of the variable.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.16.06_AM.png)

5. Mouse over the white dots on the left. These dots are each time you have opened in the browser (if you re-open the tab from the hamburger, you'll see more appear).

Congratulations! You've shipped your first Dark API endpoint.

## Your first REPL

Concepts: REPLs, HttpClient Library, Play Buttons

1. Create a new REPL from the sidebar or the omnibox. This lets you write any code that you'd like to use for development.
2. Type "httpclient" in the REPL.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.20.25_AM.png)

This will show you all the standard library functions for HTTPClient, their signatures, and their docstrings.

3. Continue typing, until you have httpclientpost. Dark will autocomplete, so you do not need to get the exact text (see I did not capitalize or type ::):

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.21.21_AM.png)

4. Hit enter to add the expression.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.22.01_AM.png)

The expression automatically creates blanks for the four parameters that HttpClient::post takes, and when those are complete has a play button (grey triangle) that will allow you to run the expression from within the editor.

5. Let's call a new `/test` endpoint for the application we're developing. As we saw from the GET, our endpoints live at USERNAME-gettingstarted.builtwithdark.com, so enter a string like `"https://USERNAME-gettingstarted.builtwithdark.com/test"`.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_9.24.08_AM.png)

6. Now we need to add the body, query, and headers. Add `{test:"test1"}` for the body, empty object for the query, and json content type for the header. The editor will support you:

- For the body type {, hit enter, then add the key and the value.
- For the query type {
- For the header type json and autocomplete will give you the formatted header.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.41.50_AM.png)

7. Once we've filled in all the parameters, the play button next to the method (triangle) turns green, which means we can execute this code from within the editor.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.42.45_AM.png)

8. Hitting play we receive a 404 response. This is because there's no /test endpoint on our canvas (yet!)

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.43.39_AM.png)

9. Since we called it, the endpoint also appears in the 404 section on the sidebar.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.10_AM.png)

Congratulations! You've used your first REPL and written an HTTPClient expression.

## Your second API endpoint & first Data Store

We can use the trace of that HTTP request to build the endpoint. This is Trace Driven Development.

1. Hit the + button in the side bar to create the HTTP endpoint. The verb (POST) and route (/test) will be set for you.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png)

2. Hover over the white dot on the left hand side. Here, you'll see the full body of the incoming trace from when you posted to the endpoint from the REPL, including the body.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png)

3. Let's work with the request directly and save the incoming body to a record by typing `let data = request.body` again. The autocomplete will assist with the fieldnames.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png)

4. Let's put this in a datastore. Like our HttpClient library, typing "DB" in the blank will pull up all datastore functions.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png)

In this case, we want db::set, which takes three parameters.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png)

5. Now let's make our datastore. From the sidebar or the omnibox, create a new datastore called "requests" and give it two field names.

![assets/gettingstarted/datastore.png](assets/gettingstarted/datastore.png)

All datastores in Dark are key-value based and use keys as unique identifiers for the record. For instance, a possible set of records with keys in the above datastore would look like this:

    {
      key1: {
              data: {
                      test: "test2"
                    },
              time: <Date: 2020-02-11T18:54:39Z>
            },
      key2: {
              data: {
                      test: "test1"
                    },
              time: <Date: 2020-02-11T18:54:43Z>
            }
    }

6. Now that we have a datastore, let's finish our post endpoint.

The first parameter is the record we're inserting. This will match our schema of date & time. In Dark, all fields must be included for DB::set. We'll insert our data from above (seeing the live value to the left) and the Date::now function to get a time.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png)

7. We'll need a unique key for each object. In this case, by typing db, we get the built in db::GenerateKey function.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png)

8. Lastly, we'll use the autocomplete to add our datastore, Requests.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png)

9. To run the DB::set operation on our existing trace, we first need to run the two functions with side effects (db::generateKey and Date::now) by hitting the play button. After hitting those two play buttons, DB::set will be green:

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png)

10. Finally, hitting the play button for DB::set will insert the record into the datastore, and lock the schema.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png)

Try it out:

- Change your REPL to say "test3" instead of "test1" and then re-run the request.

    ![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.01_AM.png)

- A new trace dot will appear on the HTTP Post handler.

    ![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.07_AM.png)

- The record will be added to the datastore.

    ![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.12_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.04.12_AM.png)

Congratulations! You now have your first Dark application: an API that stores requests into a datastore.
