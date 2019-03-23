# Description

For this assignment, we would like to see a form component developed, containing an input component that consists of multiple input fields (e.g. postal code, license plate, money with cents etc). The following functionalities should be implemented:
- the form should be unaware of the component's multiple separate input fields, the input should be accessible as a single, combined value.
- the form should only be submittable when the combined value passes a self-chosen pattern / validation.
- basic input behaviour / state should apply (e.g. disabled, required).

Attached you will find a quickstart of the assignment, to eliminate the need to spend a lot of time on writing boilerplate code. This comes with a basic setup, configuration for stencil, unit tests and bdd.


# Goal

The goal of this assignment is to get a general understanding of your approach on component development and an idea of your creativity and meticulousness. There is no expectation for this assignment to take multiple days. We would like to see your current skillset, keep it simple and show what you've got. This assignment should not take more than 4-6 hours of your time.


# Requirements

- You use our Starter Pack
- Usage of StencilJS for component development.
- Apply proper component logic and behaviour, follow best practises.
- No usage of other frameworks or libraries.
- Pay attention to presentation / styling (styled form and fields).
- Minimal Unit / BDD test coverage (coverage with at least one test where applicable).
- Handle unexected user input.


# Guidelines

Remember this component could be implemented in a corporate environment, used throughout the organisation, so:
- Write readable, consistent code.
- Write basic documentation.
- Commit early, write proper commit messages. Resulting in clean history.
- Try to give an estimation on worked hours / time logging.

----

# Implementation

# Commit linting
Checks if your commit messages meet the conventional commit format. Note: Please check [rules](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md) / [rules](https://conventional-changelog.github.io/commitlint/#/reference-rules)  before using it.

In general the pattern mostly looks like this:

`type(scope?): subject` (scope is optional)

Real world examples can look like this:

`chore: run tests on travis ci`

`fix(server): send cors headers`

`feat(blog): add comment section`

---

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) (based on the the Angular convention) can be:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

These can be modified by your own [configuration](https://github.com/conventional-changelog/commitlint#config).

You still can commit with `git commit`, however the recommended way to do it is by using **cli-prompt** for commits.

Implemented with [commitlint](https://github.com/conventional-changelog/commitlint)

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c544f7796142c1efdc3edd0/f8c47b856c62436587298256cff0ae77/Screen_Shot_2018-12-05_at_11.06.23.png)

---

# CLI prompt for commits

You still can commit with git commit, however the recommended way to do it is by using cli-prompt for commits - commitizen-cli. Run `yarn commit` to open 
a prompt with a step-by-step wizard with hints to properly fill in the commit data.

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c544f7796142c1efdc3edd0/b7a3e5a846f7b88247d8e5da3285e81f/Screen_Shot_2018-12-05_at_11.23.31.png)

Implemented with [commitizen](https://github.com/commitizen/cz-cli)

Following conventional commit format will allow us to automatically generate changelog from commit history, that would have chapters (features, bugfixes, etc.) and would look like [this](https://github.com/angular/material2/releases)

# Recommended version bump
Run `yarn recommended:bump` to find out what is the reccomended version for bump.

Implemented with [recommended bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)

# Changelog generation
Run `yarn changelog` to generate a changelog (will overwrite any previous changelog if exists). Generates a changelog based on commits since the last semver tag that match the pattern of a "Feature", "Fix", "Performance Improvement" or "Breaking Changes". Conventional commits are a necessary prerequisite, enabling automatic changelog generation from commit history.

Implemented with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog).

![](https://trello-attachments.s3.amazonaws.com/5c544e9a28eba76fabf3dedb/5c54672549044a1837c0364c/aff687d86a74b45704cb8556ce242452/2019-02-01_16-48-48.png)

---
Recommended flow:

1. Run `yarn recommended:bump` to find out what is the reccommended version for bump
2. Depending on which version you want to bump, run one of the following (this will also create git tag):
    ```	
    yarn version --major 
    yarn version --minor
    yarn version --patch
    ```
3. Generate changelog with `yarn changelog`
4. Commit `package.json` and `CHANGELOG.md` files
5. Push including tags with `git push --follow-tags`
6. Manually create a release draft in Github and copypaste changelog’s release markdown to it

# Enforce gitflow branches
Implemented with [enforce-gitflow-branches](https://github.com/Dacrol/EnforceBranchNames)

![](https://trello-attachments.s3.amazonaws.com/5c546d7eddb4a82f52f14917/970x1572/915f284c485422b5aab05baa832bbb8b/image.png)

# Enforce node version (.nvmrc)
Implemented according [to](https://medium.com/@hebet/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245)

# Editorconfig
Implemented with [editorconfig](https://editorconfig.org/)
