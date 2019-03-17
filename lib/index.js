const Transport = require('./transport');
const api = require('./api');

class EnrichGithub {
  constructor(token, repo) {
    this.transport = new Transport(token, repo);
  }

  /**
   * Adds a commit on github.
   *
   * @param {Object} options
   * @param {string} [options.file_path] The file being added in the commit.
   * @param {string} [options.file_content] The content of the file.
   * @param {string} [options.message] The commit message
   * @param {string} [options.branch] The branch to which the commit should be
   *   added.
   * @param {boolean} [options.create_branch] If set, creates the branch instead
   *   of trying to update an existing branch.
   * @param {string} [options.base] If creating the branch, which branch to
   *   base off.
   */
  addCommit(options = {}) {
    return api.addCommit(this.transport, options);
  }

  /**
   * Opens a Pull Request.
   *
   * @param {Object} options
   * @param {string} [options.branch] The branch being opened as a PR
   * @param {string} [options.title] Title of the PR.
   * @param {string} [options.base=master] The base branch to compare against.
   * @param {string} [options.body] The body of the PR.
   */
  openPR(options = {}) {
    return api.openPR(this.transport, options);
  }

  /**
   * Posts a check run on github. More about the checks API can be seen in
   * the github docs here: https://developer.github.com/v3/checks/runs/#create-a-check-run
   *
   * @param {Object} options
   * @param {Object} options.post_body This body is passed transparently to the
   *   create a check run call.
   */
  postCheck(options = {}) {
    return api.postCheck(this.transport, options);
  }
}

module.exports = EnrichGithub;
