---
title: Queues
sidebar_label: Queues
---

Darklang's built-in queues allow programs to be run in the background.
Developers call `emit` to add events into a named queue, which will be executed
asynchronously by a handler of the same name.

Events are stored in a system-wide queue and run on separate worker machines,
whose capacity is shared with other users. We automatically scale these workers
up, and you should expect your events to be run promptly.

Cron jobs are also run using the same infrastructure.

## Running an event

When a Worker handler runs, the event that was `emit`ed will be available as an
`event` parameter available in the Worker.

When viewing a handler, you can see the number of items in the queue. When an
event is completed, a trace will be stored where you can view the execution.

### Success criteria

Events are considered successful if they run to completion, and will not be
retried based on the result of the worker's expression, even if that value is a
Type error, `incomplete`, `false`, or any other "negative value".

If you wish to retry when there is an error of some sort, you should handle this
explicitly in your code, perhaps `emit`ing a new event.

### Concurrency

Events are run as quickly as we can, you cannot be assured that an event will
wait for a previous event to complete before running - in fact, it probably will
not.

Events are also not guaranteed to process in the order they are `emit`ed.

## Pausing

Handlers can be paused. When handlers are paused, they will continue to allow
events to be `emit`ed, but they will not run the event. When handlers are
unpaused, all the events will start to run as soon as possible.

### Blocking

Darklang admins may `block` handlers that are causing operational issues. Queues
that are causing a operation issue (perhaps even just setting off an internal
alarm) may be blocked while we investigate. When (and if) we rectify the issue,
we may unblock the problematic queue, which acts just like unpausing.

## Retries

Events in the queue will be retried if something goes wrong in the
infrastructure. We will attempt to run an event until it succeeds, trying at
most 5 times for each event. This only happens with infrastructure issues, which
you do not have visibility into, so you cannot predict how many retries a event
will get.

The most common situation is if an event runs longer than 25 seconds, and runs
while the Darklang infrastructure is being redeployed. In this case, some of the
code may be executed more than once - however much got completed on the first
try, and then however much got completed in the retry. While unlikely, events
like this could be retried more than once. The best way to avoid this is to have
your events complete more quickly.

Events which have no handler or where the canvas has been deleted will not be
retried.

## Technical details

You can read the
[technical detail and implementation of our queues](https://github.com/darklang/dark/blob/main/docs/eventsV2.md).
