TODOs:

-   Readme
-   libraclient grpc implementation
-   build system for minifying, etc

references from https://github.com/bonustrack/libra-grpc for basic npm grpc/protobuf handling and guidance on how to use admission control and https://github.com/phlip9/libra_example for some bash scripting references.

1. Install Libra: `git clone https://github.com/libra/libra.git && cd libra`
2. Set \$LIBRA environment variable to root libra project path
3. `npm run setup` will install node modules, find libra proto files, build js and flow files for them

run `npm run testnet` to quickly launch libra testnet cli
