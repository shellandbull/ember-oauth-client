# Why Ember?

![](http://emberlondon.com/images/london-tomster.png)

I'd like to coin the term "Mongrel Framework" which is exactly what Ember is and it's also what makes Ember great. Ember is made up of a lot of previously known technologies.

Ember was previously known as [SproutCore](http://stackoverflow.com/questions/9425307/differences-between-sproutcore-and-ember) and it embodies an adopt-first approach. Basically Ember uses a lot of OSS code rather than re-writing known implementations, for example Ember uses [RSVP](https://github.com/tildeio/rsvp.js/) as it's de-facto promise library

The thing that made Ember big was it's command line interface, called [Ember-CLI](http://ember-cli.com/).

# Getting started

Now we're ready to officially start the course! Let's all make sure we have:

- [Node.js](https://nodejs.org/en/download/)
- [Bower](http://bower.io/)
- [Ember-CLI@2.4.2](http://emberjs.com/)

Now please go to your dev folder and create a new project called `training-ember`

`$ ember new training-ember`

Ember-CLI is available as an `npm` module, so you'll need to have `node` and `npm` installed for this tutorial.

#### Project structure

#### - START HERE -

I already have `ember-cli` on my machine, so I'll start this demo by generating a project invocating `ember new <project-name>`

**REMEMBER TO**

Swipte to item #2 on the keynote and show the structure:

`$ tree app/`

Then they'll see the `application/` route and template. So there will be a connection on the router file, whe opening everything on the browser.


This will generate a new ember project, with version control. In case you want to see the other generators that `ember-cli` provides run `ember generate --help`

Quick walkthrough of the `app` structure,

- Components: Reusable interface widgets, their behaviour resembles that one specified by[ Mozilla](https://developer.mozilla.org/en-US/docs/Web/Web_Components) They're isolated sections in a template that implement their own behaviour
- Controllers: Controllers are decorators to a view, they help you display information that doesn't necessarily belong on the model. They set properties on the template you're rendering
- Helpers: For those HTML snippets that you find reusing across the application, like inserting a span, or truncating text
- Models: The `M` in `MVC` they define the attributes and behaviour of the data you present to a user, they're resources in your domain, like a `post` or a `tweet`
- Router.js: Defines the routes that your ember app will cover, Similar to the `routes.rb` file in a rails application.
- Routes: A route will handle things like transitions into its associated template, which information will be rendered and will handle the actions that occur into it
- Styles Were your stylesheets reside
- Templates Were your views reside.


Now open the `/app` folder on your text editor. Show in the following order:

- `router.js` is well all the routes of the app reside
- `application.hbs` the App's main template, everything else will be yield into `{{outlet}}`
- `app.js` The script that builds the ember app.


#### -- CUT SCENE --

#### Generating your first route

It's time to make some magic happen, let's generate a new route using our generators

`ember g route tweets`

We see a new route has been added in our router file, and an according template. Let's open that,

```hbs
{{outlet}}
```

Those curly braces are Handlebars! if you're not familiar with them, they are a minimal templating engine that allows us to show information ellegantly on the view.

Declaring the word `outlet` on a template means that that template will also render its inmediate child, otherwise it won't

I'm going to add an `H1` to our `friends/` template, we can see that it now renders on the page, However if I remove the word `outlet` from our parent route, which is `application.hbs` we can see that the title's gone. We're still in that route but it's template is not being rendered.

**re-insert outlet in template**

#### What's Ember-data? and fetching information from the server(quite simple, 1 line of code )

#### - START HERE -

- Start on item #4
- Explain what ember-data does for you

Ember Data is a client-side persistence library for managing data in your Ember.js applications.

Ember Data is designed to be agnostic to the underlying persistence mechanism, so it works just as well with JSON APIs over HTTP as it does with streaming WebSockets or local IndexedDB storage.

Now let's generate a model, `tweet` which will have a `content` attribute which will be a string

`$ ember g model tweet content:string createdAt:date`

Now if we open `app/models/tweet.js`

We can see our model declaration, above you can see ES6 syntax, although it's not supported across browsers. Ember-CLI ships with `babel.js` a transpiler that allows you to use the future JavaScript today.

Speaking about the benefits of `ember-cli` and what it does for you:

- Transpiles ES6 on all browsers,
- Concatenates JS files
- Watches the directory on changes and reloads the project, courtesy of `watchman`

#### Showing the fetched information on the template

It's time to fetch some information from the server. We can do this by implementing the `model` hook on our route,


**REMEMBER `#findRecord`

```js
model() {
  return this.store.findRecord('tweet');
}
```

And in our template we'll iterate through that collection of tweets using the `{{each}} helper`

```
{{#each model as |tweet|}}
  <h2>{{tweet.content}} was created at {{tweet.createdAt}}</h2>
{{/each}}
```

Ember has a persistence library called `ember-data` which also ships as a dependency in `ember-cli` apps. It provides an interface to mediate between the server and the information that you've cached with the client. The store is available as a property in our routes.

**Go back to browser**

- Receive 404 - Ember is trying to make a get to `/tweets` with no success
- What `ember-data` is expecting
- Keynote and refresh information
- Up next some fresh information


#### - STOPS HERE -

#### The adapter

In Ember Data, the logic for communicating with a backend data store lives in the Adapter. Ember Data's Adapter has some built-in assumptions of how a REST API should look. If your backend conventions differ from these assumptions Ember Data makes it easy to change its functionality by swapping out or extending the default Adapter.

`ember g adapter application`

```javascript
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api'
});
```
We can see that Ember attempted to make `GET /tweets` which resolved in a 404. Now Let's generate an `http-mock` for it!

`ember g http-mock friends`

By default this will generate a minimal `node` server so we can serve some fixtures remotely, however they'll be namespaced under `api`. And our ember-app is not using that namespace, to specify it. We need to declare a namespace on our application's adapter.

Now if we restart our server we'll see that the collection is being rendered. And you can see that with a very minimal effort & setup Ember can give you all the things that you're looking for an in isomorphic javascript application.

**REMEMBER TO: remind the audience how ember-cli orchestrates everything.**


1 - Transpiles so you can use ES6
2 - Concatenates all the files
3 - Optmisies here and there
4 - serves the app. Compiled files go under `tmp`
