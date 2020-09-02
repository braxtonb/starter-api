## Starter API

#### Overview

Starter API typescript template.

#### Setup

* Clone the repo
* Install dependencies, `npm install`
* [Without container] Run `npm run dev` to start the application on port 8080
* [With container] Run `npm run createImage` to create a local docker image
* [With container] Run `npm run runContainer` to run a local docker container

#### Endpoints

All endpoints use basic authentication. To access any endpoint a valid username / password combination is expected.

|Endpoint|Method|Description|
|:---|:---|:---|
|/|GET|hello world|
|/api/example|GET|example controller and router setup|

#### ESLint

The Starter API is configured to use ESLint. Please setup the [ESLint integration](https://eslint.org/docs/user-guide/integrations) for your editor.

#### Resources

* [express web framework](https://github.com/expressjs/express#readme)
* [Typescript documention](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [ESLint](https://eslint.org/)