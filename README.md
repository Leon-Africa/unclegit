UncleGit
==

UncleGit is a git automation master helping you sharpen redundant or complexg git commands to easy one liners.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ug.svg)](https://npmjs.org/package/ug)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Leon-Africa/unclegit?branch=master&svg=true)](https://ci.appveyor.com/project/Leon-Africa/unclegit/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/ug.svg)](https://npmjs.org/package/ug)
[![License](https://img.shields.io/npm/l/ug.svg)](https://github.com/Leon-Africa/unclegit/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ug
$ ug COMMAND
running command...
$ ug (-v|--version|version)
ug/0.0.0 win32-x64 node-v14.17.0
$ ug --help [COMMAND]
USAGE
  $ ug COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ug hello [FILE]`](#ug-hello-file)
* [`ug help [COMMAND]`](#ug-help-command)

## `ug hello [FILE]`

describe the command here

```
USAGE
  $ ug hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ug hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Leon-Africa/unclegit/blob/v0.0.0/src/commands/hello.ts)_

## `ug help [COMMAND]`

display help for ug

```
USAGE
  $ ug help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
