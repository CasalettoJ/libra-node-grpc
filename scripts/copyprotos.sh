#!/bin/bash
# .sh version of the messy npm script.

if [ -z "$LIBRA" ]; then
    echo "\$LIBRA environment variable missing."
    echo "Please set \$LIBRA to the Libra Core root path"
    exit 1
fi

echo "Copying Libra protobuf files..."
find "$LIBRA" -name "*.proto" -exec cp {} dist/proto/ \;