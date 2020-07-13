---
id: first-datastore
title: Your first Datastore
---

In the last section, we made a HTTP request that created a 404. We'll use _the
trace_ of that HTTP request to build an endpoint, a technique we call **Trace
Driven Development**.

1. Hit the plus (+) button in the 404 section of the sidebar. This creates a
   HTTP endpoint with the HTTP verb (POST) and path (/test) set from the request
   that creates the 404.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png)

2. Hover over the white dot on the left hand side. Here, you can see the full
   body of the incoming trace from when you posted to the endpoint from the
   REPL, including the body.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png)

3. Let's save the `request` body to a variable by typing
   `let data = request.body`. As you can see, the autocomplete knows the field
   names of `request` from the trace, and will complete them for you.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png)

4. Let's put this in a datastore. Like we saw with the `HttpClient` library,
   typing "DB" in the blank will pull up all datastore functions.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png)

In this case, we want `DB::set`, which takes three arguments.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png)

5. Now let's make our datastore. From the sidebar or the omnibox, create a new
   datastore called "Requests", with fields `data` and `time`.

![assets/gettingstarted/datastore.png](assets/gettingstarted/datastore.png)

Dark's datastores are key-value stores; each record has a unique key that is
used to store and retrieve the value. For instance, a possible set of records
with keys in the above datastore would look like this:

```text
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
```

6. Now that we have a datastore, let's finish our post endpoint.

   The first argument is the record we're inserting. This needs to match the
   schema, and so it needs to include both `date` and `time` (you cannot insert
   records that are missing fields). Insert our data from above (seeing the live
   value to the left) and use the `Date::now` function to get the `time` field.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png)

7. We need a unique key for each record that we store. The `DB::generateKey`
   function generates random keys &ndash; this is useful when your record has no
   obvious unique identifier.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png)

8. The final argument is the Datastore: `Requests`.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png)

9. To call the `DB::set` function, we first need to run the two functions with
   side effects (`DB::generateKey` and `Date::now`) by hitting the play button.
   After hitting those two play buttons, the `DB::set` play button will be
   enabled:

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png)

10. Finally, hitting the play button for `DB::set` inserts the record into the
    datastore. This locks the datastore, preventing us from changing the schema,
    which we see indicated by the red lock (🔒) icon.

![assets/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png](assets/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png)
