---
title: Using an External DB
sidebar_label: Using an External DB
---

Your project may require a more complex data structure than our datastores. If a
key-value store works, we strongly recommend using the built-in datastore to
take advantage of language functions.

If you already have (or otherwise require) an external database, any external
database that provides a REST API can be used. For the purposes of this
tutorial, we will be using [restdb.io](https://restdb.io).

## Set Up

1. Create a new database.

![external-db/create-db.png](/img/tutorials/external-db/create-db.png)

2. Select **Developer Mode** in the upper right, and then choose
   **Collections +**

![external-db/add-collection.png](/img/tutorials/external-db/add-collection.png)

3. Enter the information for your new collection and click **Save**.

![external-db/collection.png](/img/tutorials/external-db/collection.png)

4. Add Name and Description text fields to your database by clicking **Add
   Fields +**.

![external-db/add-field.png](/img/tutorials/external-db/add-fields.png)

![external-db/fields.png](/img/tutorials/external-db/fields.png)

5. Grab your API Key by clicking on API Docs and finding the value labeled
   `x-apikey:`. Save it as a function in your Darklang canvas.

6. Optionally, also grab the URL at the top of your page (in my case, its
   `https://mydatastore-e7f9.restdb.io/rest/mydata`) and save it as another
   function in your Darklang canvas.

## POST a New Record

1. Create your header by doing a `Dict::merge` on `HttpClient::jsonContentType`
   and a dict containing your API Key

2. Write an `HttpClient::post` using your URL, your fields (note: the field
   names are case sensitive) and your header, and then run it.

![external-db/post.png](/img/tutorials/external-db/post.png)

3. Your data will appear in the restdb.io console.

![external-db/data.png](/img/tutorials/external-db/data.png)

## GET All Data

1. Create your header by doing a `Dict::merge` on `HttpClient::jsonContentType`
   and a dict containing your API Key.

2. Write an `HttpClient::get` using your URL and header, and then run it.

![external-db/get-all.png](/img/tutorials/external-db/get-all.png)

3. Your handler will return all of the data in your database.

![external-db/get-all-data.png](/img/tutorials/external-db/get-all-data.png)
