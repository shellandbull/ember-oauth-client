# Intro

This goal of this course course is to provide a strong and thorough introduction to modern web development in 2016 using [Ember.js](http://emberjs.com/) and it's command line tool [Ember-CLI](http://ember-cli.com/).

# About me

##  A little bit of history first

Modern front-end development had is inception in late 2013 when
Airbnb posted that famous article [about isomorphic Javascript](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/). Even though the concept is not about modern web development it did gathered all the ideas people have come up with recently.

In the past, browsing through a website would follow more or less the following flow:

- 1) A user sends a request to a server using the browser
- 2) The server interprets the request
- 3) The server writes an HTML document and sends it back

Which worked perfectly fine for static sites! However as technology developed, and more people started using the internet, achieving great experiences was something that one could only achieve with natively developed applications.

Enter a few years in the future, browsers now have amazing Javascript at runtime and new HTML/CSS features enable developers to deliver experiences just as if they developed an application natively.

## The single page application

A "pattern" that emerged thanks to modern web technologies.

Developers didn't needed to request an entire new page every-time an interaction happened. They could either fetch only a portion of it and re-insert in the DOM or exclusively just limit themselves on fetch data from an API. Gmail is a great example of this.

# Overview of JS frameworks

There's numerous JS frameworks out there, we're only cover Ember in this course, however is important to highlight other major frameworks - Angular, React, Meteor - since one maybe ideal over the other based on the requirements at hand.

## Angular

![](http://photos2.meetupstatic.com/photos/event/b/5/6/0/global_341146432.jpeg)

Angular is a client-side MVC/MVVM framework maintained by the peeps down at Google. Who's features include:

- Data-bindings.
- Declarative user interfaces.
- Imperative business logic.
- Client-side rendering.

#### Pros

- It's the framework with the biggest community out there
- There's a high demand for AngularJS in the market.
- Big ecosystem for addons

#### Cons

- No defined project structure, all angular projects are very different from each other
- Angular 1 and Angular 2 are really different from each other [really different](https://dzone.com/articles/typed-front-end-with-angular-2)
- Backwards compatiblity was severely affected by the introduction of 2.0 which was entirely written in [TypeScript](http://www.typescriptlang.org/)
- Angular is [known to have rendering issues](https://docs.angularjs.org/api/ng/directive/ngCloak)

## React

![](https://assets.toptal.io/uploads/blog/category/logo/291/react.png)

React is a small library maintained down at the peeps at Facebook. Defined as [*The V in MVC*](https://facebook.github.io/react/) which abstracts the DOM as it's own virtual entity, allowing really fast client-side rendering.

React is not actually a framework, but it's been labelled as such.

*Frameworks provide a methodology to work. Libraries provide interfaces and components that developers can plug into their software*

#### Pros

- Really lightweight, standing at only about 26kb(min+gzipped)
- Tiny API
- Only abstracts one layer, quite easy to learn.

#### Cons

- No data layer
- No extra AJAX capacities whatsoever, no promises.
- High level of fragmentation in the community, everyone implements the same thing in different ways.

## Meteor

![](http://meteortips.com/assets/images/meteor-logo.png)

Meteor is the only full-stack framework here, like Rails it also offers a backend to go along with your clients. Out of all in this list, it's the only one I've never actually tried myself.

#### Pros

- Same language across the entire stack
- Modularity across realms, i.e: you can share a validation in both client & server.
- Fosters reactive programming.

#### Cons

- Meteor is a privately held institution
- Very small userbase, everything is really new.
- Requires you to use [MongoDB](http://cryto.net/~joepie91/blog/2015/07/19/why-you-should-never-ever-ever-use-mongodb/)

And finally, the one we've all been waiting for today:

## Ember

![](http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200)

Ember.js is a client-side MVC framework that strives to help you build robust and modern web applications! We'll be diving into the ember world today.

#### Pros

- Opinionated, convention-over-configuration ethos. All Ember codebases share a lot in common.
- Comes with a command line interface - [Ember-CLI](http://ember-cli.com/) - offering a suite of tools and generators.
- Hot CSS code reloading, Babel support, integrated test suite. All out of the box
- Strong community and addon ecosystem behind it. https://emberobserver.com

#### Cons

- Steep learning curve, it's a big framework with lots to learn.
- High barrier to entry migrating projects to Ember-CLI is not a quick process.

But that's why [Creatif Labs](#TODO) :sun_with_face: is here for.
