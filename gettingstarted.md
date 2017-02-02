---
layout: page
title: Getting Started
permalink: /gettingstarted/
---
The full build is usually running on your CI server. This build produces all the artifacts required for partial builds. Partial builds are running on development computers - based on artifacts produced by the full build.

To achieve this, full-build lets you define the universe of all projects (it's called an anthology) - it can be splitted among different repositories (if you have different teams working on different products). Note that projects are converted to work with full-build. They are still regular *proj using MsBuild but are adapted in a way to allow partial builds (you can still use MsBuild, XBuild, VisualStudio 2015+ or Xamarin Studio 6+).

Once the anthology is built, developers can work using partial builds and still resynchronize with master build when they are required to.

Download following tools, unzip them in your tools folder and ensure they are available in your path:

  * [full-build](https://github.com/full-build/full-build/releases)
  * [Paket](https://fsprojects.github.io/Paket)
  * [NUnit3](http://www.nunit.org)
  * MSBuild : version must be greater than 12 (>= Visual Studio 2013)

To use full-build, you will need to create:

  * master repository : first of all, create an empty repository (either Git, Gerrit or Mercurial). This will be the master repository. Ensure developers have read access. Allow write access to people in charge of configuration.
  * master artifacts : then create a public share. Full build artifacts will be pushed there and should be available to anyone. Ensure everyone has read access. Allow write access to people in charge of configuration (including CI).

In tutorial, you will learn to configure full-build and use it on two repositories:

  * [cassandra-sharp](https://github.com/pchalamet/cassandra-sharp)
  * [cassandra-sharp-contrib](https://github.com/pchalamet/cassandra-sharp-contrib)

The goal is to setup a workspace using given repositories, getting rid of NuGet packages and build everything from sources only.

# Tutorial
This tutorial assumes following configuration:

  * master repository : https://github.com/pchalamet/cassandra-sharp-full-build
  * master artifacts : \\buildartifacts\buildoutput

Create a new workspace using command:
{% highlight Batchfile %}
fullbuild setup git https://github.com/pchalamet/cassandra-sharp-full-build \\buildartifacts\buildoutput c:\src\myworkspace 
cd c:\src\myworkspace
{% endhighlight %}

Under c:\src\myworkspace, full-build has initialized everything to start a new anthology configuration from scratch. Now, you can start adding external repositories. They have to be converted later to be compatible with full-build. 

Add nuget sources:
{% highlight Batchfile %}
fullbuild nuget add https://www.nuget.org/api/v2/
{% endhighlight %}

Add repositories using command:
{% highlight Batchfile %}
fullbuild repo add cassandra-sharp https://github.com/pchalamet/cassandra-sharp 
fullbuild repo add cassandra-sharp-contrib https://github.com/pchalamet/cassandra-sharp-contrib
{% endhighlight %}

Now clone all repositories:
{% highlight Batchfile %}
fullbuild clone *
{% endhighlight %}

It's now time to convert everything and see the benefits of full-build:
{% highlight Batchfile %}
fullbuild convert *
{% endhighlight %}

If everything is ok, you have now successfuly added projects to the anthology !


You can now start building and check if everything is ok:
{% highlight Batchfile %}
fullbuild view all * 
fullbuild build all
fullbuild test all
{% endhighlight %}

And voilà, you are all set! Eventually commit and push everything to start collaborating with your teams:

{% highlight Batchfile %}
fullbuild exec --all "echo *** committing %FB_NAME% && git co -m conversion" 
fullbuild push
{% endhighlight %}

# Steps to configure Continuous Integration (CI role is to build all sources)
Following steps must be orchestrated on CI:

  * clone master repository (_fullbuild init folder master repository_)
  * cd folder
  * clone all respositories using full-build (_fullbuild clone *_)
  * generate a view with all sources (_fullbuild view all *_`)
  * build all sources (_fullbuild build all_)
  * test assemblies (_fullbuild test all_)
  * generate change log (_fullbuild history_)
  * generate a new version (_fullbuild publish_)

# Steps to create partial build (Developer environment or CI partial build)

  * clone master repository (_fullbuild init folder master repository_)
  * cd folder
  * clone required repositories (_fullbuild clone repoName_)
  * build a view with sources selection filter (_fullbuild view mypartialview repoName/*_)
  * build view sources (_fullbuild build mypartialview_)
  * test view sources (_fullbuild test mypartialview_)
