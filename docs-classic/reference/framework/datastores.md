# Datastores

## Overview

Datastores in Darklang are key-value based (persistent hash-maps). When you create a
new datastore, you specify the schema for the record.

![Empty Datastore](/img/datastores/empty.png)

The key is the unique identifier for each record, and is always of type
`string`. **The key is not visible when looking at the Datastore's schema on the
canvas.** You cannot mark a record field as the key, but you can use the same
value for the field and the key when using `Db::set`. An expected response when
retrieving a set of records, with keys, is as following:

`[{key: { key1: value1, key2: value2} }, {key: { key1: value3, key2: value4}]`

You query datastores in four ways:

- By key (`DB::get` family)
- By specific field (`DB::queryExactField` family)
- By criteria for a specific field (`DB::query` family)
- By gathering information about the entire datastore

Datastores return one or many results, with or without keys.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_LqlHR55GZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Keys

The schema is the same for all of these key examples:

![Datastore Schema](/img/datastores/schema.png)

Some common key choices:

- A unique field (like `userId`). If the field is not already a string use
  `toString`. The key is shown in the preview data.

`[{"1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"2": { userId: 2, name: "Paul", pets: []}]`

- A unique derivative of a field (like name and `UserId`, or a slug).

`[{"ellen1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"paul2": { userId: 2, name: "Paul", pets: []}]`

- A unique identifier generated programmatically (`DB::generateKey`).

`[{"dee09c7e-6ede-402d-9ea4-4ee8fe843688": { id: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"ac7d4f1f-a164-4450-96f3-728b087bb9f4": { id: 2, name: "Paul", pets: []}]`

### Values

The datastore holds records. In the future, datastores will be defined by type,
but for now you manually create the schema. Available types are: String, Int,
Bool, Float, Password, Date, UUID, Dict (and lists of those).

## DB Functions

Datastore operators are built into the language. All functions are independently
versioned. In your canvas you will see the latest version, as well as any
versions you are currently using.

A list of all datastore functions is available
[in the function reference](https://ops-documentation.builtwithdark.com/?pretty=1).

### Adding a record to a Datastore

To add items into a datastore, use `DB::set`. `DB::set` takes three parameters
(the record to be added, its unique key, and the datastore).

![DBset](/img/datastores/dbset_empty.png)

For the earlier example datastore, using this with `userID` as the key would
look as follows:

![DBset](/img/datastores/dbset.png)

Using the a generated key with `DB::generateKey` would look like this instead:

![DBset](/img/datastores/dbset_genkey.png)

### Datastore meta-actions

Some datastore functions provide ability to do something to the entire
datastore, and only require the datastore as the parameter.

Any datastore function that includes 'with keys' returns both the key and the
value, a list of nested dictionaries
`[{"1": { userId: 1, name: "Ellen", pets: ["Gutenberg"]} }, {"2": { userId: 2, name: "Paul", pets: []}]`

Functions that do not include 'with keys' return just the values, a list of
dictionaries
`[{ userId: 1, name: "Ellen", pets: ["Gutenberg"]} , {userId: 2, name: "Paul", pets: []}]`

These include:

- `DB::count`
- `DB::deleteAll`
- `DB::getAll`
- `DB::getAllwithKeys`
- `DB::keys`
- `DB::schemaFields`
- `DB::schema`

To easily see is in your Datastore, create a REPL and running `DB::getAll`.

### Querying by key, `DB::get`

The key is a good way to be able to find information in the datastore. DB::get
finds records by key (reminder: `withKeys` returns nested dictionaries including
keys, so `DB::get` does not return the key). Datastore functions that allow
action based on key are:

- `DB::delete`
- `DB::get`
- `DB::getMany`
- `DB::getManywithKeys`

<iframe width="560" height="315" src="https://www.youtube.com/embed/qNA8FzGkdWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Querying by record field, `DB::queryExactField`

Using `DB::queryExactField` checks for a specific field within the record.
`DB::queryOnewithExactField` finds one response, whereas `DB::queryExactFields`
will return as many as exist. (reminder: `withKeys` returns nested dictionaries
including keys).

- `DB::queryExactFields`
- `DB::queryExactFieldswithKey`
- `DB::queryOnewithExactField`
- `DB::queryOneWithExactFieldWithKey`

### Querying by criteria, `DB::query` (experimental SQL Compiler)

For being able to run more effective datastore queries, we also have a query
compiler. More about this feature is in this
[blog post](https://blog.darklang.com/compiling-dark-to-sql).

This allows you to write a function that can be evaluated for the datastore.

![DBset](/img/datastores/dbquery.png)

DB::query allows taking a datastore and a block filter. Note that this does not
check every value in the table but rather is optimized to find data with
indexes. Errors at compile-time if Darklang's compiler does not yet support the code
in question (please let us know when you hit this, and which function you wanted
to use!)

You can also use `DB::querywithKey` to get both the key and record,
`DB::queryOne` to get only one response, and `DB::queryOnewithKey` to get only
one response, with the key and record.

### Creating References Between DBs

This canvas shows the way to create a reference between two datastores: in this
case between Darklang employees and their pets:
[https://darklang.com/a/sample-datastore](https://darklang.com/a/sample-database)

Users have a pets field, which is a list of strings. The keys for the pets are
added to that list.

## Migrations, Locking, and Unlocking

You can edit the DB’s schema (col names and types) until it has data in it, at
which point it “locks.” Once a datastore is locked, there are several options
for changing the schema.

If you are still in development and don’t need the data, creating a REPL and
deleting all data in a DB will unlock it (`DB::deleteAll`).

To change your schema without deleting the data, you can use a live migration
process. In the future, this will be built into Darklang, but for now you can follow
[Paul Shen's excellent guide](https://www.notion.so/paulshen/Datastore-migration-in-Dark-e8d50f81366b48fc92c980372f68d316)
to the process.

## Using an External Datastore

We strongly recommend using this built-in datastore. If you have an external
database, you can [connect to it via REST](/walk-throughs/external-db).
