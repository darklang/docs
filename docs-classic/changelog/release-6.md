# Darklang Release 6

October 1, 2022

_See the [blog post](https://blog.darklang.com/darklang-release-6/) for further
discussion._

## Major features

### Support for negative ints and floats

- Turn existing ints and floats negative by typing `-` in front
  ([#4498](https://github.com/darklang/dark/pull/4498))

![](https://user-images.githubusercontent.com/181762/192357264-7ae39197-3ec8-4516-9f43-930817b80b99.gif)

- Type negative ints and floats from scratch
  ([#4497](https://github.com/darklang/dark/pull/4497))

- Edit partials and turn them into ints and floats (including negatives)
  ([#4497](https://github.com/darklang/dark/pull/4497))

![](https://user-images.githubusercontent.com/181762/192331575-d4affbb3-127c-46c0-8e88-7a74c2e877db.gif)

### Show function deprecation info

- Display why functions are deprecated
  ([#4491](https://github.com/darklang/dark/pull/4491))

![](https://user-images.githubusercontent.com/181762/191844123-3c57f9a7-5240-4b84-8691-c91e7b8aee13.png)

### Expression backspacing/conversion

When you delete an `if`, `match`, or lambda (`\`) with one expression, replace
it with that expression ([#4457](https://github.com/darklang/dark/pull/4457))

![](https://user-images.githubusercontent.com/181762/188941656-b0a584be-d115-41cc-a956-28b79646fa89.gif)

## Editor improvements

### Tuples

_Tuples are in preview - enable them in **Settings/Contributor Settings**_

- Show Tuple2 and Tuple3 functions in the autocomplete
  ([#4482](https://github.com/darklang/dark/pull/4482))

- Add tuple pattern autocomplete completion
  ([#4465](https://github.com/darklang/dark/pull/4465))

![](https://user-images.githubusercontent.com/906686/189388902-82bf765f-a9f4-4629-9fda-8f99918d259c.gif)

- Allow copy/pasting tuple patterns
  ([#4469](https://github.com/darklang/dark/pull/4469))

- Allow you to press `)` to go over a tuple's closing parenthesis
  ([#4454](https://github.com/darklang/dark/pull/4454))

- Put cursor at _start_ of blank tuple pattern when removing elements
  ([#4455](https://github.com/darklang/dark/pull/4455))

- Don't allow tuple pattern parts to be overwritten by literals
  ([#4453](https://github.com/darklang/dark/pull/4453))

### Strings

- indent one more space to line up multiline strings
  ([#4477](https://github.com/darklang/dark/pull/4477))

- show slight background in strings to help see how they line up (it's subtle!)
  ([#4479](https://github.com/darklang/dark/pull/4479),
  [#4477](https://github.com/darklang/dark/pull/4477))

![](https://user-images.githubusercontent.com/181762/190904975-276ea41d-5880-460f-b68f-fedc70b1a0e1.png)

### Live values

- Show live values for lambdas properly (actually trace them and then display
  them)) ([#4456](https://github.com/darklang/dark/pull/4456))

- Display a lambda's runtime value as a live value
  ([#4456](https://github.com/darklang/dark/pull/4456))

![](https://user-images.githubusercontent.com/181762/188888447-62103469-5f6b-4eec-a4d3-fcc8f0fd9764.png)

- Show live values for literals instead of a spinner
  ([#4491](https://github.com/darklang/dark/pull/4491))

- Correctly show analysis for partials (the old value)
  ([#4491](https://github.com/darklang/dark/pull/4491))

- Show the correct live value for let definitions and record field names
  ([#4491](https://github.com/darklang/dark/pull/4491))

- Show pipe live value for current pipe entry
  ([#4491](https://github.com/darklang/dark/pull/4491))

- Don't spin when there's a pipe in a blank
  ([#4491](https://github.com/darklang/dark/pull/4491))

### Autocomplete

- Fix some standard library function descriptions - typos and punctuation
  ([#4491](https://github.com/darklang/dark/pull/4491))

- Better UI when a function has no description (affects functions in the package
  manager) ([#4491](https://github.com/darklang/dark/pull/4491))

- Fix fluid pattern autocomplete flashing
  ([#4462](https://github.com/darklang/dark/pull/4462))

- Fix bug when going further than 3 places down in the autocomplete for patterns
  ([#4462](https://github.com/darklang/dark/pull/4462))

- Don't confuse secrets and datastores
  ([#4491](https://github.com/darklang/dark/pull/4491))

### Misc Small fixes

- Fix a few places secrets weren't hidden
  ([#4456](https://github.com/darklang/dark/pull/4456))

- Allow users to use deprecated functions they already use in more cases
  ([#4482](https://github.com/darklang/dark/pull/4482))

- Error messages use less ugly representation of dicts and lists
  ([#4456](https://github.com/darklang/dark/pull/4456))

- Hide irrelevent GC error in analysis
  ([#4505](https://github.com/darklang/dark/pull/4505),
  [#4483](https://github.com/darklang/dark/pull/4483),
  [#4449](https://github.com/darklang/dark/pull/4449))

- When a handler's route changes, update "open-in-new-window" to use the new
  route ([#4502](https://github.com/darklang/dark/pull/4502))

- don't insert `0` when copy/pasting from the start of ints in patterns
  ([#4492](https://github.com/darklang/dark/pull/4492))

- Don't create empty patterns when creating match
  ([#4469](https://github.com/darklang/dark/pull/4469))

- put the cursor in right place after a string edit
  ([#4497](https://github.com/darklang/dark/pull/4497))

- convert partials to ints and floats
  ([#4497](https://github.com/darklang/dark/pull/4497))

- fix broken floats automatically
  ([#4497](https://github.com/darklang/dark/pull/4497))

## Standard library changes

- Add `Uuid::parse_v0` and deprecate `String::toUUID`
  ([#4480](https://github.com/darklang/dark/pull/4480))

## Internal improvements

- The dark repo is now
  [tagged for each release](https://github.com/darklang/dark/tags)

- Add IDs to debugger AST view
  ([#4491](https://github.com/darklang/dark/pull/4491))

- A number of fixes related to lambdas
  ([#4456](https://github.com/darklang/dark/pull/4456))

- Rebrand 'pattern' as 'match pattern' throughout client codebase
  ([#4487](https://github.com/darklang/dark/pull/4487))

- Refactor function representation
  ([#4485](https://github.com/darklang/dark/pull/4485))

- Use IDs more ([#4480](https://github.com/darklang/dark/pull/4480))
