const API_BASE = 'https://us-central1-gh-check.cloudfunctions.net/';

const APIS = {
  addCommit: 'add_commit',
  branchOff: 'branch_off',
  openPullRequest: 'open_pull_request',
  postCheck: 'post_check',
};

module.exports = { API_BASE, APIS };
