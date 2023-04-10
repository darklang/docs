# Cron

Darklang supports scheduled jobs via a Cron component. Use a Cron when you want to
schedule something to occur on a timed interval.

![Cron Intervals](/img/cron/intervals.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ffObUyM1jc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Cron Basics

- Crons run automatically once per interval. (Note: due to the distributed
  nature of the Darklang platform, it's possible that a Cron may erroneously run
  more than once per interval.)
- There is currently no guarantee when within an interval that the Cron will
  run. Eg, A Cron created at `09:15` and marked as `Every 1 hour` will run
  roughly every hours, but there is no guarantee the next run will be at exactly
  `10:15`. We plan to eventually add more fine-grained scheduling.
- The trace information on Cron will show the most recent 10 times the Cron has
  run. A Cron never has input data, so the trace will always say
  `No input parameters`.
- To run a Cron on-demand, use the replay button the upper right. Running
  on-demand does not affect the next scheduled runtime.
- Crons will not alert you of failures unless you write logic to do so.

## FAQ

### Can I set the exact time my Cron will run?

No, not currently. We plan to eventually support this.

### Can I pause a Cron to keep it from running?

No, not currently. We plan to eventually support this.

### Will a Cron ever be executed more than once in parallel?

Yes, if the cron takes longer to complete than its scheduling interval, multiple
executions could overlap and be running in parallel. (See the next question
also.)

### Does the execution time of my Cron affect its scheduling?

No. Scheduling happens independently from execution of the Cron's code. Even if
execution of a `Every 1 min` Cron takes 2 minutes to complete, the Cron will
still be scheduled every 1 minute.

### My `Every 1min` Cron is not running every minute. Help?

Please let us know the canvas, Cron name, and approximate time of the problem
and we can look into it.

## Future Improvements

- Granular scheduling, allowing more complex and more precise scheduling (every
  other hour at 15 minutes past the hour)
