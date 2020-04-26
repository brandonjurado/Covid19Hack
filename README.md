# Earth Hack 2020 - Covid-19

<img src="https://medschool.cuanschutz.edu/images/librariesprovider45/covid-19/covid-banner.jpg" alt="covid 19 banner" align="center">


## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/brandonjurado/Covid19Hack.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._

### Starting the Stats/ML Models Frame Work

```
$ cd StatsModelsFW
$ pip install -r requirements.txt
$ python statsModelsAPI.py
# open your browser and go to https://localhost:5000
```
Build all of your models in BuildModels as separate python files
Then in statsModelsAPI.py
- import the new function as `from ModelBuilds.my_file import my_function`
- define a new route with `@app.route("/endpoint")`  
- have that route define a function that simply returns `my_function`

To test the homepage will automatically launch and /test_model will run through basic functionality and return a statistic.
AWS deployment instructions to come soon.

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, `styled-components`, redux-saga, FontFaceObserver</i></sub>

## Contributors

Thanks goes to these hackers:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/ArmSoriano"><img src="https://avatars0.githubusercontent.com/u/15078174?s=460&u=6bf0abd5631da8c2904a715903f399cb6104e756&v=4" width="80px;" alt="Armando Soriano"/><br /><sub><b>Armando Soriano</b></sub></a><br /><a href="https://github.com/react-boilerplate/react-boilerplate/commits?author=mxstbr" title="Code">💻</a> <a href="https://github.com/brandonjurado/Covid19Hack/commits?author=ArmSoriano" title="Documentation">📖</a> <a href="#ideas-ArmSoriano" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-mxstbr" title="Reviewed Pull Requests">👀</a> </td><td align="center"><a href="https://bjurado.com/"><img src="https://bjurado.com/img/profile.jpg" width="80px;" alt="Brandon Jurado"/><br /><sub><b>Brandon Jurado</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=brandonjurado" title="Code">💻</a> <a href="https://github.com/brandonjurado/Covid19Hack/commits?author=brandonjurado" title="Documentation">📖</a> <a href="#review-brandonjurado" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-brandonjurado" title="Maintenance">🚧</a></td><td align="center"><a href="https://github.com/mike168m"><img src="https://avatars2.githubusercontent.com/u/3809183?s=460&u=3f67cdb0fb78a371129fa6e91b3bce36a99e4cd0&v=4" width="80px;" alt="Michael Osei"/><br /><sub><b>Michael Osei</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=mike168m" title="Code">💻</a> <a href="#review-mike168m" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-mike168m" title="Maintenance">🚧</a></td><td align="center"><a href="https://github.com/psward"><img src="https://avatars3.githubusercontent.com/u/4258461?s=460&v=4" width="80px;" alt="Preston Ward"/><br /><sub><b>Preston Ward</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=psward" title="Code">💻</a> <a href="#ideas-ArmSoriano" title="Ideas, Planning, & Feedback">🤔</a> </td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Boilerplate Documentation

- [**The Hitchhiker's Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.
