# New-Release Checklist

Every month, we "release" the work done in the previous month. While we
continuously deliver software, it's nice to reflect on and document the work
done more formally on at least a monthly basis.

Every month, we aim to:

- outline technical changes in [the Changelog](https://docs.darklang.com/changelog)
- publish a blog post reflecting on those changes
- update our users, via email and social media, of these changes
- reflect on the progress made within the past month, and discuss upcoming work

## Reporting on a Dark Release

Towards those results, this is an outline that covers most of the relevant
steps:

- [ ] create a new Issue in `darklang/docs` with these bullets

  "Publish Release {x}"

- [ ] create and fill in a new set of release notes
  - [ ] create a new `release-n.md` page in `docs/changelog`
  - [ ] use [the `dark-changelog` canvas](https://darklang.com/a/dark-changelog) to fill in a draft of the
        changelog this gather PRs merged throughout the month
  - [ ] add reference to new page in sidebar
  - [ ] create headers; move bullets to appropriate headers
  - [ ] merge like bullets where relevant
  - [ ] revise wording
  - [ ] review each item and fill in changelog with images, diagrams, screen
        recordings, etc.
- [ ] backfill docs with anything we've done in the past month (if there's not
      much, just edit it in the main PR; otherwise backfilling docs in separate
      PRs might make sense)
- [ ] publish changelog and docs updates
- [ ] write blog post
  - [ ] review each of the things we've done in the past month
  - [ ] consider
    - [ ] what were the major themes of the month?
    - [ ] what's immediately useful to our users?
    - [ ] what interesting technical challenges did we face?
  - [ ] can we link to any new docs/features?
  - [ ] what header image should we use?
- [ ] record (video/audio) a release review, and thoughts for he upcoming
      month(s)
- [ ] publish the recording to youtube (after minor editing?); update blog post
      with link
- [ ] draft email/tweet/toot
- [ ] publish blog post with missing/broken links at the bottom
- [ ] publish to mastodon, reddit, twitter, lobstrs, etc.
- [ ] update blog post with all of those links
- [ ] send email to users

It may be worth additionally considering:

- [ ] were there any emergencies (i.e. service interruptions) throughout the
      month? are they worth documenting within the changelog or during our
      normal release cycle? Check `#status` and `#operations` in Discord, for
      reference.

## Writing your PRs so the `dark-changelog` canvas will be able to parse the changelog

Both the `darklang/dark` and `darklang/docs` repos have PR templates included,
which start off with:

> Changelog:
>
> ```markdown
> Area of change
> - details
> ```
>
> alternatively:
>
> No changelog

If you believe the PR has changes worth reporting on within the release notes,
remove the "Alternatively: no changelog" part at the end. Then, update the (\`)
backtick-surrounded section with notes on what has changed, grouped into areas
of change (e.g. "Editor," "Language and Standard Library," and "Internal.")

Otherwise, leave the PR starting off with just "No changelog"
