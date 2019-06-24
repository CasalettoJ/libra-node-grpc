## TODOs:

- proper Readme
- typescript
- libraclient grpc implementation
- build system for minifying, etc
- transcribe npm scripts into .sh files for convenience

## Sources

references from https://github.com/bonustrack/libra-grpc for basic npm grpc/protobuf handling and guidance on how to use admission control and https://github.com/phlip9/libra_example for some bash scripting references.

## Instructions

1. Install Libra: `git clone https://github.com/libra/libra.git && cd libra`
2. Set \$LIBRA environment variable to root libra project path
3. `npm run setup` will install node modules, find libra proto files, build js and flow files for them
4. `node src/main.js` will run a small client test with an empty update request.

run `npm run testnet` to quickly launch libra testnet cli as an unrelated convenience.

## Notes

If the setup script doesn't work for you it might be because of a different `sed` implementation (https://unix.stackexchange.com/questions/36795/find-sed-search-and-replace), try replacing the `copy-protos` script with this:

```
"copy-protos": "npm run test-libra-env-var && echo \"Copying Libra protobuf files...\"; sourcedir=$(pwd); find $LIBRA -name \"*.proto\" -execdir echo \"\tCopying {}...\" \\; -execdir cp \"{}\" $sourcedir/src/proto \\; -execdir sed -i 's#import \"shared/#import \"#g' $sourcedir/src/proto/{} \\;",
```

https://github.com/libra/libra/blob/master/scripts/cli/start_cli_testnet.sh <-- current address for testnet ac.testnet.libra.org:8000
