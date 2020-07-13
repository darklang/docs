---
id: first-function
title: Your first Function
---

Let's look at creating a function to return a human readable summary of the
number of reports for each day.

The best way to create a function is by writing the code you want as part of
your handler, and then extracting the working code to a function. This ensures
that whatever code you write has traces and live data.

1. Start by creating a new REPL.

2. In the REPL, call `DB::getAll` to get the reports from the datastore. Run the
   function using the play button (▶️).

![gettingstarted/newworker.png](/docs/img/gettingstarted/dbgetalldaily.png)

3. Open a pipeline by typing `|>`, and pipe into a `List::map`, and create
   variables `date` and `count`.

![gettingstarted/newworker.png](/docs/img/gettingstarted/functionmapvariable.png)

4. Pipe `val.count` into `toString` (shift-enter on a selected area also pipes
   that expression).

![gettingstarted/newworker.png](/docs/img/gettingstarted/valcounttostring.png)

5. Return `date ++ ": " ++ count` in the last line of the block.

![gettingstarted/newworker.png](/docs/img/gettingstarted/blockend.png)

6. We now have the code to generate our formatted report.

   Let's extract that code into a function. Select all the code within the REPL.

![gettingstarted/newworker.png](/docs/img/gettingstarted/selectall.png)

7. Type `Ctrl-\` (Control-Backslash) to open the command palette, then select
   `extract-function`.

![gettingstarted/newworker.png](/docs/img/gettingstarted/extractfunction.png)

8. This creates the function, and replaces the existing code with a call to the
   new function.

![gettingstarted/newworker.png](/docs/img/gettingstarted/extractedfunction.png)

9. Click on the function reference on the right hand side of the handler to go
   to the function and rename it.

![gettingstarted/newworker.png](/docs/img/gettingstarted/functionspace.png)

Functions do not live on the main canvas. They are reusable and can be called
from any handler.

This function does not have any parameters. When you add parameters, the editor
will automatically create blanks for the arguments everywhere the function is
called.

10. Go back to the primary canvas via the sidebar, the mini-map, or a reference
    on the right-hand-side of the function. Once back, create a new HTTP GET
    handler and call the function. This creates an API endpoint which returns
    the daily reports.

![gettingstarted/newworker.png](/docs/img/gettingstarted/functioncall.png)
