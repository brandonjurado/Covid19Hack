# Earth Hack 2020 🌎 Covid-19 🦠

<img src="https://medschool.cuanschutz.edu/images/librariesprovider45/covid-19/covid-banner.jpg" alt="covid 19 banner" align="center">

An informative and highly scalable wep application covering Covid-19 that is available without an internet connection the instant a user loads the app.

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/brandonjurado/Covid19Hack.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._

###The Stats/ML Models Frame Work with Login Server Load Balancing
In the interest of quick delivery of information with almost infinite scalability, we decided to employ the "Kubeless" archictecture so that login systems would never become bogged down, and we could then provide a fast and easy mechansim for data scientists and others to get information out quickly and efficiently.  This is built on top of AWS Lambdas and Serverless.

To build we are going to assume that you have a kubernetes cluster already set up and configured with kubectl and eksctl.  You will also need AWS Lambdas setup with AWS Fargate and the CLI tools installed and ready to go.
From there, you are going to run:
```
$ kubectl create ns kubeless
$ kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.6/kubeless-v1.0.6.yaml
```
This will take some time, but it creates a new namespace called kubeless and then creates services in that namespace.
Once completed install:
`
$ git clone https://github.com/serverless/serverless-kubeless
$ npm install serverless -g
`
This will get the plugin from serverless for kubeless and install it globably.
After that, your Kubernetes and AWS administrators will need to provide you with IAM user profiles as well as config files that need to be put in the proper place.  Once everything is done, we have provided an example of the boiler plate endpoint setups, and when you have modidifed them to your needs simply run:
`
$ serverless deploy
`
It will automatically take care of provision of everything from S3 to lambdas and provide you with a reverse proxy to the endpoint!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/ArmSoriano"><img src="https://avatars0.githubusercontent.com/u/15078174?s=460&u=6bf0abd5631da8c2904a715903f399cb6104e756&v=4" width="80px;" alt="Armando Soriano"/><br /><sub><b>Armando Soriano</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=mxstbr" title="Code">💻</a> <a href="#ideas-ArmSoriano" title="Ideas, Planning, & Feedback">🤔</a> </td><td align="center"><a href="https://bjurado.com/"><img src="https://bjurado.com/img/profile.jpg" width="80px;" alt="Brandon Jurado"/><br /><sub><b>Brandon Jurado</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=brandonjurado" title="Code">💻</a> <a href="https://github.com/brandonjurado/Covid19Hack/commits?author=brandonjurado" title="Documentation">📖</a> <a href="#review-brandonjurado" title="Reviewed Pull Requests">👀</a> </td><td align="center"><a href="https://github.com/mike168m"><img src="https://avatars2.githubusercontent.com/u/3809183?s=460&u=3f67cdb0fb78a371129fa6e91b3bce36a99e4cd0&v=4" width="80px;" alt="Michael Osei"/><br /><sub><b>Michael Osei</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=mike168m" title="Code">💻</a> <a href="#review-mike168m" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/psward"><img src="https://avatars3.githubusercontent.com/u/4258461?s=460&v=4" width="80px;" alt="Preston Ward"/><br /><sub><b>Preston Ward</b></sub></a><br /><a href="https://github.com/brandonjurado/Covid19Hack/commits?author=psward" title="Code">💻</a> <a href="#ideas-ArmSoriano" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/brandonjurado/Covid19Hack/commits?author=psward" title="Documentation">📖</a> </td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.
