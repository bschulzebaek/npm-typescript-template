# npm-typescript-template

 [![Unit](https://github.com/bschulzebaek/npm-typescript-template/actions/workflows/test.yml/badge.svg)](https://github.com/bschulzebaek/npm-typescript-template/actions/workflows/test.yml) [![Build](https://github.com/bschulzebaek/npm-typescript-template/actions/workflows/build.yml/badge.svg)](https://github.com/bschulzebaek/npm-typescript-template/actions/workflows/build.yml) ![PRs](https://img.shields.io/badge/PRs-Welcome-informational)


* [How to use](#how-to-use)
* [Local development](#local-development)
* [Available commands](#available-commands)

## How to use

This repository is a template for creating npm packages with TypeScript. Simply add your project details to the corresponding files (double-check the root dir) and start developing.

The directory `.github/workflows/` contains two GitHub actions for validating the build and running Jest tests.

The third action file `publish.yml` can be used to automate the publishing process to [npm](https://www.npmjs.com/). Simply add a secret named `NPM_TOKEN` to your GitHub repository. The required secret can be create in your npm profile.
Don't forget to remove the option `dry-run` to

## Local Development

```shell

git clone git@github.com:bschulzebaek/npm-typescript-template.git
cd npm-typescript-template
npm install
```

## Available Commands

| Command | Description |
|--|--|
| npm run build | Runs the TypeScript compiler. Output can be found in `lib/` |
| npm run test | Starts the Jest runner. Coverage reports can be found in `coverage/` |
| npm run prepare | Used by the publish workflow. This command will be executed before `npm publish` |