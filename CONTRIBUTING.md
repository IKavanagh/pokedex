# Contributing Guidelines

This guide includes the guidelines and best practices to follow when contributing to projects within IPT.

## Branch Naming Conventions

Branch names should use the following conventions to ensure integration with the other tools in our workflow.

- **Standard format**: `{type}/{short-description}`

`{type}` should be one of

- **feat**: new features
- **fix**: bug fixes
- **docs**: documentation changes
- **style**: formatting-only changes (no code behavior changes)
- **refactor**: code changes that neither fix a bug nor add a feature
- **perf**: performance improvements
- **test**: adding or correcting tests
- **build**: changes that affect build system or external dependencies
- **ci**: changes related to configuration and deployments
- **chore**: maintenance tasks not modifying src or tests
- **revert**: reverts a previous commit

## Commit Message Guidelines

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. This allows us to automate the generation of changelogs and versioning.

### Commit Message Format

Precise rules over formatting commit messages leads to more readable messages that are easy to follow when reviewing the project history.

Each commit message consists of a `header` and a `body`. The header has a special format that includes a `type`, a `scope` and a `subject`:

```plaintext
{type}({scope}?): {summary}

{body}
```

The **header** is mandatory but the **scope** is optional.

Any line of the commit message should not be longer than 80 characters. This allows the message to be easier to read.

The type can be one of:

- **feat**: new features or changes to existing features
- **fix**: bug fixes and hot fixes
- **docs**: documentation updates
- **style**: formatting-only changes (no code behavior changes)
- **refactor**: code changes that neither fix a bug nor add a feature
- **perf**: performance improvements
- **test**: testing details
- **build**: build system or dependency changes
- **ci**: configuration and deployment updates
- **chore**: maintenance changes
- **revert**: reverts a previous commit

The scope should clearly define the area the change touches. Multiple words should use `camelCase`.

Examples:

- `feat(auth): add JWT authentication support`
- `fix(login): correct token expiration handling`
- `docs(readme): update setup instructions`

#### Revert

If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Summary

The summary contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalise the first letter
- no dot (.) at the end

#### Body

Use the imperative, present tense: "change" not "changed" nor "changes".

Include the motivation for the change in the body. The commit message should explain why the change is being made. A comparison with previous behaviour can be included.

#### Breaking Changes

Should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

## Contributing Process

### Getting Started

To contribute code follow these instructions:

1. Create a branch off the `main` branch using the [branch naming conventions](#branch-naming-conventions)
2. Commit changes using the [commit message guidelines](#commit-message-guidelines)
3. Create a pull request and fill out the description
4. When the PR has full approval status, merge it in and delete the original branch

## Code Style Guidelines

All changes should follow the Code Style Guide. Code that follows industry standards and established guidelines is easier to understand, maintain and extend.

## Testing

All code contributed should have corresponding unit tests and should not break existing tests.

New tests should be added for new features and bug fixes.

## Documentation

Update documentation to reflect any changes in functionality, including README files, inline comments, and any other relevant docs.
