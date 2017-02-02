---
layout: page
title: About
permalink: /about/
---

Entreprise applications are characterized by their size. They are usually splitted in several solutions to help developers deal with this fact but this poses serious problems when it's time to build and do refactoring. Time passes on and projects are less and less maintainable due to abondance of solution files, heavy NuGet coupling, build times, lack of consistency and difficulties to refactor applications. Follows difficulties to ship, because changing something without a good grasp is not an easy task. 

### But let's face the facts
  
  * NuGet is awful when used to store teams artifacts - it's a waste of time to upgrade, check compatibility and eventually modify code due to breaking changes
  * Solution files fail to manage enterprise point of view (global consistency) and developer point of view (local development) are those 100 projects worthful ?
  * Difficulties to compile whole source code from scratch render poor confidence in ability to ship
  * Build times are too long
  * No code review/sanity check before commits
  * Green should be the norm but it's not

So here is full-build: a smart build system to help you manage the increasing complexity of your (big) software and keep using tools you know and love. full-build only provide method and safety belt for your developments to get things done faster but in a reliable way.

### full-build key tenets

  * No private NuGet packages allow only 3rd parties dependencies in a central file, fixed version for all source code for auditing and dependencies analysis
  * Create solutions on demand: keep your developers focused with ability to check for code regression easily
  * Develop fast: no need to clone or recompile lots of sources to get started. Fetch latest binaries and start working immediately (including compiling, testing, packaging app, understanding dependencies)
  * Debug fast: debugging any application with _all_ production source code in a matter of minutes not hours
  * Build fast: knowing about projects structure helps being smart at build
  * Ship fast: know exactly which applications are impacted by changes
  * CI server and developers use exactly same build process
  * Favor continuous delivery the safe way above all

### Work on standard development platforms

  * Windows, macOS, Linux
  * .net, Mono
  * Visual Studio 2015+, Xamarin Develop 6+

# Contribute !
Source code as well documentation are available on [GitHub](https://github.com/full-build) licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

[![build status](https://ci.appveyor.com/api/projects/status/github/full-build/full-build?branch=master&svg=true)](https://ci.appveyor.com/project/full-build/full-build/branch/master) on [AppVeyor](https://ci.appveyor.com/project/full-build/full-build).

Binary distribution is available on [GitHub](https://github.com/full-build/full-build/releases) and [NuGet](https://www.nuget.org/packages/full-build/).

### Contributors

  * [Pierre Chalamet](https://github.com/pchalamet) (creator & project lead)
  * [Sergii Salata](https://github.com/sergii-s)

# Copyright & license agreement

full-build is open source software and licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

(c) 2014-2017 [Pierre Chalamet](https://www.linkedin.com/in/pierrechalamet)