module.exports = {
  name: "lazy-load",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/lazy-load/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
