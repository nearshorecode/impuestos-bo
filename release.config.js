module.exports = {
  npmPublish: true,
  branches: [
    'master',
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: 'BREAKING CHANGE',
            release: 'major',
          },
          {
            type: 'feat',
            release: 'minor',
          },
          {
            type: 'fix',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'revert',
            release: 'patch',
          },
          {
            scope: '/.skip ci/',
            release: false,
          },
          {
            type: '/.*/',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            {
              type: 'feat',
              section: ':sparkles: Features',
              hidden: false,
            },
            {
              type: 'fix',
              section: ':bug: Bug Fixes',
              hidden: false,
            },
            {
              type: 'docs',
              section: ':memo: Documentation',
              hidden: false,
            },
            {
              type: 'refactor',
              section: ':recycle: Refactors',
              hidden: false,
            },
            {
              type: 'perf',
              section: ':hourglass: Performance',
              hidden: false,
            },
            {
              type: 'test',
              section: ':green_book: Tests',
              hidden: false,
            },
            {
              type: 'ci',
              section: ':repeat: CI',
              hidden: false,
            },
            {
              type: 'chore',
              section: ':wrench: Chore',
              hidden: false,
            },
            {
              type: 'lint',
              section: ':sound: Others',
              hidden: false,
            },
            {
              type: '*',
              section: ':sound: Others',
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: 'Impuestos Bolivia Changelog',
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/asset.min.css',
            label: 'CSS distribution',
          },
          {
            path: 'dist/asset.min.js',
            label: 'JS distribution',
          },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'yarn.lock',
          'CHANGELOG.md',
        ],
      },
    ],
  ],
}
