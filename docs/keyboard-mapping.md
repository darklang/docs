---
id: keyboard-mapping
title: Keyboard Mapping
sidebar_label: Keyboard Mapping
---

## Canvas mode

| Key               | Command                    |
| ----------------- | -------------------------- |
| Cmd/Ctrl-K, Enter | Open Omnibox / Search      |
| Left              | Scroll canvas left         |
| Right             | Scroll canvas right        |
| Up                | Scroll canvas up           |
| Down              | Scroll canvas down         |
| Ctrl-A            | Scroll page left one page  |
| Ctrl-E            | Scroll page right one page |
| Ctrl-B, PgUp      | Scroll canvas up one page  |
| Ctrl-F, PgDn      | Scroll page down one page  |

## Code editing (Dark specific)

| Key                                      | Context                            | Command                                               |
| ---------------------------------------- | ---------------------------------- | ----------------------------------------------------- |
| Cmd/Ctrl-S, Alt-X, Cmd/Ctrl-\            |                                    | Open command / refactoring palette                    |
| Tab, Shift-Tab                           |                                    | Move to next / previous blank                         |
| Tab, Shift-Tab                           | In autocomplete                    | Complete and go to next / previous blank              |
| Enter                                    | In autocomplete                    | Complete and stay in same place                       |
| Space                                    | In autocomplete                    | Complete and move forward one space                   |
| Escape                                   | In autocomplete                    | Close autocomplete                                    |
| `\` | In blank | Start lambda expression |
| `,`                                      | In lambda                          | Add lambda parameter                                  |
| `[`                                      | In blank                           | Create list                                           |
| `]`                                      | In list, before closing `]`        | Skip `]`                                              |
| `,`                                      | In list                            | Add new list entry                                    |
| `[`                                      | Before variable, integer, etc      | Wrap in list                                          |
| `,`                                      | Autocomplete in list               | Complete list entry and add new list entry            |
| `.`                                      | On variable                        | Create fieldaccess                                    |
| `.`                                      | Selecting variable in autocomplete | Complete variable and begin fieldaccess               |
| `.`                                      | In integer                         | Convert integer to a float                            |
| `=`                                      | Cursor on `=` in a `let`           | Skip over assignment                                  |
| `{`                                      | In blank                           | Start record                                          |
| `}`                                      | In record, before closing `}`      | Skip `}` at end of record                             |
| `:`                                      | Cursor on `:` in a record          | Skip over `:`                                         |
| Enter                                    | In a record                        | Add record entry                                      |
| `"`                                      | In blank                           | Start string                                          |
| `"`                                      | In string, before closing `"`      | Skip `"`                                              |
| `->`                                     |                                    | Skip over `->` in a match                             |
| Enter                                    | In a match                         | Add match entry                                       |
| \|>                                      |                                    | Start pipe using current line                         |
| Shift-Enter                              |                                    | Start pipe using selected code                        |
| Enter                                    | In a pipe                          | Add line to pipe                                      |
| Enter                                    | In body of a `let`                 | Wrap current expression in `let _ =`, go to next line |
| Enter                                    | Between `let` expressions          | Insert a new line with a `let`                        |

## Code editing (similar to other editors)

| Key            | Alternative key              | Command                                      |
| -------------- | ---------------------------- | -------------------------------------------- |
| Cmd/Ctrl-Z     |                              | Undo                                         |
| Shift-Cmd-Z    |                              | Redo (MacOS)                                 |
| Ctrl-Y         |                              | Redo (Windows / Linux)                       |
| Cmd/Ctrl-X     |                              | Cut to clipboard                             |
| Cmd/Ctrl-C     |                              | Copy to clipboard                            |
| Cmd/Ctrl-V     |                              | Paste from clipboard                         |
| Left, Right    |                              | Move one, skipping over keywords and indents |
| Up, Down       |                              | Move up/down, preserving column              |
| Cmd/Ctrl-A     |                              | Select all                                   |
| Cmd/Ctrl-Left  | Ctrl-A (Mac only), Ctrl-Home | Go to start of line                          |
| Cmd/Ctrl-Right | Ctrl-E, Ctrl-End             | Go to end of line                            |
| Ctrl-Left      | Alt-Left (Mac only)          | Go to start of word                          |
| Ctrl-Right     | Alt-Right (Mac only)         | Go to end of word                            |
