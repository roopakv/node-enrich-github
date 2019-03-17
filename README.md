# enrich-github

NPM module which makes it easy to work with enrich-github.

At the moment, enrich github supports the following 3 APIs. Open issues on this
repository, for other features you would like to see.

## Usage

Get a token for enrich github by going to [].

Instantiate enrichgithub with your token and repo name

```javascript
const token = process.env.ENRICH_GITHUB_TOKEN;
const repo = roopakv/node-enrich-github;
const enrichGithub = require('enrich-github')(token, repo);
```

All methods take in an options object. The structure of each API is described
below.

### addCommit

This is used to add a commit on github. Currently this method supports adding
only one file change at a time.

A commit may either be added to an existing branch, or a new branch can be
branched off of an existing branch.

```javascript
await enrichGithub.addCommit({
  file_path: 'lib/README.md',
  file_content: 'The new contents for lib/README.md',
  message: 'The commit message',
  branch: 'roopakv/sample', // The branch this commit will be added to
  create_branch: true, // Deafaults to false.
  base: 'master' // needed only if create_branch is true
});
```

### openPR

Opens a pull request on github.

```javascript
await enrichGithub.openPR({
  title: 'The title of the PR',
  branch: 'roopakv/sample',
  body: 'The body for the PR' // optional
  base: 'master' // defaults to master.
})
```

### postCheck

This works with github check runs API. This API is pretty much a pass thru to
the github check runs api, and all that enrich github does here is
makes hitting this API eaiser.

Read about the post checks endpoint [here](https://developer.github.com/v3/checks/runs/#create-a-check-run)

```javascript
await enrichGithub.postCheck({
  post_body: {
    name: ...
    head_sha: ...,
    details_url: ...
    ...
  }
})
```
