# rum-tester
Rumbullion test-runner. Basically a wrapper around the ava test-runner

## Install
I prefer installation per package. But you can also install it global to link the make-rum command systemwide.
```
npm i -D @rnd7/rum-tester
```

## Run
Configure it within the package.json file of your project. If present the directory setting in the rum.tester config will define the entry point otherwise it defaults to 'test'.
```json
{
  "name": "myPackage",
  "rum": {
    "tester": {
      "directory": "test"
    }
  },
  "scripts": {
    "test": "test-rum"
  },
  "devDependencies": {
    "@rnd7/rum-tester": "^1.0.0"
  }
}
```

And afterwards you can run the script using

```bash
npm test
```

Or execute it via npx from your project root, while it still uses the package.json for configuration

```bash
npx test-rum
```

You might also invoke it by poiting node towards the bin js, though it is only recommended for development purposes or to test the rum-tester using rum-tester.

```bash
node bin/test-rum.js
```

## License
See the [LICENSE](https://github.com/rnd7/rum-tester/tree/master/LICENSE.md) file for software license rights and limitations (MIT).
