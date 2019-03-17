const { APIS } = require('./constants');

class EnrichGithubError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EnrichGithubError';
  }
}

function addCommit(transport, options) {
  if (!options.file_path || !options.file_content || !options.message
      || !options.branch) {
    throw new EnrichGithubError('Need file_path, file_content, message & '
      + 'branch');
  }

  if (options.create_branch && !options.base) {
    throw new EnrichGithubError('Cannot create new branch without base');
  }

  return transport.post(APIS.addCommit, options);
}

function openPR(transport, options) {
  if (!options.branch || !options.title) {
    throw new EnrichGithubError('Cannot open PR without title and branch');
  }

  return transport.post(APIS.openPullRequest, options);
}

function postCheck(transport, options) {
  if (!options.post_body) {
    throw new EnrichGithubError('Need body to post check');
  }

  return transport.post(APIS.postCheck, options);
}

module.exports = { addCommit, openPR, postCheck };
