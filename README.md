# Development Tool Test

## Install

```bash
yarn
```

Install the following packages。

- [shfmt](https://github.com/mvdan/sh)
- [shellcheck](https://github.com/koalaman/shellcheck)

## Tools

### Lint / Formatter

- [prettier](https://github.com/prettier/prettier)

  - Used to format Markdown and YAML. The table shaping of Markdown is useful.
  - Plugins
    - [prettier-plugin-md-nocjsp](https://github.com/tats-u/prettier-plugin-md-nocjsp)
      - Used to prevent Prettier from inserting spaces between Japanese and alphabets or numbers.

- [textlint](https://github.com/textlint/textlint)
  - Plugins
    - [textlint-rule-ja-space-between-half-and-full-width](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-between-half-and-full-width)
      - Used to insert spaces between Japanese and alphabets or numbers. It is more customizable than prettier.
- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [shfmt](https://github.com/mvdan/sh)
- [shellcheck](https://github.com/koalaman/shellcheck)
- [OpenAPI Validator](https://github.com/IBM/openapi-validator)
- [Secretlint](https://github.com/secretlint/secretlint)
- [sqlfluff](https://github.com/sqlfluff/sqlfluff)

### Other checker

- [NPM License Checker](https://github.com/davglass/license-checker)

### Other

- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
