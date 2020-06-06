---
id: feature-flags
title: Use Feature Flags
sidebar_label: Use Feature Flags
---

In Dark, all changes are made in production, on your real infrastructure. If you'd like to develop for testing, without things immediately going to users, make the changes within a feature flag.

## Build a first version

Before you have users, you can just write code within handlers.

![Feature Flag](assets/featureflag/write.png)

## Add a Feature Flag

Open the command palette while selecting the code you want to modify (`ctrl-\` or `alt-x`). In this case, "hello world."

![Feature Flag](assets/featureflag/add.png)

## Choose a "When" Condition

By default, the code you write within the flag will not be run. All traffic will still see the result of "Hello World." To have your new code run, specify a condition.

![Feature Flag](assets/featureflag/when.png)

In this case, the new code will run if the traffic specifies a `queryParam` `name=Ellen`.

![Feature Flag](assets/featureflag/whenellen.png)

Since the new execution code has not been written, if you run the code with `name=Ellen` an error results.

![Feature Flag](assets/featureflag/error.png)

## Write New Code

Write new code for the section you're looking to change, and try it out.

![Feature Flag](assets/featureflag/newcode.png)

![Feature Flag](assets/featureflag/newexecution.png)

For any case other than the specific condition, the old code will continue to run.

For instance, if another name is chosen in the query param:
![Feature Flag](assets/featureflag/whensam.png)

Or if there is not a name:
![Feature Flag](assets/featureflag/whenblank.png)

## Edit Condition & Code

Adjust the condition to test any additional cases, or write more code.

Running the new code for any name:
![Feature Flag](assets/featureflag/notnull.png)

Making the new code take into account if a name exists or not:
![Feature Flag](assets/featureflag/additionallogic.png)

Live values and traces work for analysis within feature flags, but still appear to the left of the original code.

## Commit or Discard

Once you're done, re-open the command palette (`ctrl-\` or `alt-x` and commit or discard the code).

![Feature Flag](assets/featureflag/commit.png)

When you commit, the feature flag code now runs for all cases. When you discard, you return to the previous version of the code.

![Feature Flag](assets/featureflag/committed.png)

## Limitations

Currently, you can only have one feature flag per component. There is not yet a way to see the past history of flags (instead they are just part of the undo stack, `cmd-z` or `ctrl-z`.)
