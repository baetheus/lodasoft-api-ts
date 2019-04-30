This directory contains the generated library. Any file landed here will likely be overwritten.

## Publishing Workflow

Most of this will eventually be automated, however the lodasoft swagger def is not always serializable and ofter requires slight modification.

Generate TS : Pulls from ```process.env.API_URL``` or http://devapi.lodasoft.com/swagger/docs/v1

```npm run generate```

Prettify output (rough lint) : Cleans up api files

```npm run prettier```

Run Test : Sanity check to ensure compilation

```npm run test```

Add and Commit : Be sure to document api feature changes and breakages

```git add -A```

```git commit -a```

Release : Bump version and populate changelog

```npm run release```

Push and Publish

```git push --follow-tags origin master && npm publish```