# The Extend Challenge

This is bare-bones version of our backend codebase, where we ask candidates to make a small contribution. The goal: give both the candidate and the Extend team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation, for the team and the candidate to decide if its a good fit.

## Setup

- Install [Homebrew](https://brew.sh/).

- Install the [Node Version Manager](https://github.com/creationix/nvm).

- Install [yarn](https://www.npmjs.com/package/yarn)

  ```bash
  brew install yarn
  ```

- Copy this repository to your own private repository on GitHub.

- Make sure you're on the correct version of NodeJS.

  ```bash
  nvm use
  ```

- Install the app

  ```bash
  yarn
  ```

- Run all tests

  ```bash
  yarn test
  ```

- Confirm our a compiled-build of our sample Lambda handler works

  ```bash
  yarn test:lambda
  ```

## Challenge

Follow these steps to create a new API endpoint in this codebase:

- create a new branch from `master`.

- use this [public endpoint](https://dog.ceo/api/breeds/list/all) to pull breeds of dogs

- in `src/lambdas`, add a new `handler` module, in a file called something like `breeds-get.ts`, along with a `breeds-get.test.ts`.

- use [`node-fetch`](https://github.com/node-fetch/node-fetch) (already installed) to pull from the [dogs-list endpoint](https://dog.ceo/api/breeds/list/all). 

- organize the files and directory structure in a way that could scale if the codebase were to grow.

- the endpoint handler should return a response object, containing a list of all breeds as a flat array of strings. If a breed does not have sub-breeds include the breed. If a breed has sub-breeds include each sub-breed as a separate element. For example, `english sheepdog`, `shetland sheepdog` and `beagle` should all be on the list. However, `sheepdog` should not be included.

- in your handler tests `breeds-get.test.ts`, create a way to mock the results of the external API call, so the handler can be tested without an internet connection.

- test the happy path.

- test the case of the external call timing out.

- run `yarn lint` and `yarn build` to check for warnings and errors. The challenge is not complete until issues are addressed, either through fixing the code, or leaving a comment in the code to explain why it is not fixed. Do not change the lint or Typescript configuration, as part of the challenge is to work within a set of rules, to simulate real working conditions.

- submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) in your repository, with a descriptive message, and no more than a few commits (each with a clear purpose).

- before the next interview, we will provide PR feedback, to give you a chance to improve your solution before the call.

- feel free to ask questions, as we want to simulate working with the team.
