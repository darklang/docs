# New-Release Checklist

Every month, we "release" the work done in the previous month. While we
continuously deliver software, it's nice to reflect on and document the work
done more formally on at least a monthly basis.

Every month, we aim to:

- outline technical changes in
  [the Changelog](https://docs.darklang.com/changelog)
- publish a blog post reflecting on those changes
- update our users, via email and social media, of these changes
- reflect on the progress made within the past month, and discuss upcoming work

The easiest way to step through this is to create an issue using the
[release issue template](https://github.com/darklang/docs/tree/main/.github/issue_template.md)

## Writing your PRs so the `dark-changelog` canvas will be able to parse the changelog

Both the `darklang/dark` and `darklang/docs` repos have PR templates included,
which start off with:

> Changelog:
>
> ```markdown
> Area of change
>
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
