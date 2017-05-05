#!/bin/bash

# Uppgift 2
#LINUX_PORT=1337
#LINUX_SERVER=localhost

# Only for windows environment:
#LINUX_PORT=1337
#LINUX_SERVER=192.168.1.13 # When on debian use localhost.

# ${var+x} is a parameter expansion which evaluates to null
# if var is unset and substitutes the string "x" otherwise
if [[ ${LINUX_PORT+x} && ${LINUX_SERVER} ]]; then
    port=$LINUX_PORT
    server=$LINUX_SERVER
else
    port=1337
    server=localhost
fi

while (( "$#" )); do
    case "$1" in
        "hello" )
            output=$(curl -s $server:$port/)
            echo "$output"
            exit 0
        ;;

        "html" )
            output=$(curl -s $server:$port/index.html)
            echo "$output"
            exit 0
        ;;

        "status" )
            output=$(curl -s $server:$port/status)
            echo "$output"
            exit 0
        ;;

        "sum" )
            # remove "sum" argument
            shift
            query="$1"
            shift

            while (( "$#" )); do
                query="$query&$1"
                shift
            done

            curl -s $server:$port/sum?"$query"
            exit 0
        ;;

        "filter" )
            # remove "filter" argument
            shift
            query="$1"
            shift

            while (( "$#" )); do
                query="$query&$1"
                shift
            done

            curl -s $server:$port/filter?"$query"
            exit 0
        ;;

        "all" )
            echo ""
            echo "Home Command: curl -s $server:$port/"
            echo "Home Response: $(curl -s $server:$port/)"
            echo ""
            echo "About Command: curl -s $server:$port/index.html"
            echo "About Response: $(curl -s $server:$port/index.html)"
            echo ""
            echo "Status Command: curl -s $server:$port/status"
            echo "Status Response: $(curl -s $server:$port/status)"
            echo ""
            echo "Sum Command: curl -s $server:$port'/sum?58&96&2&5&3'"
            echo "Sum Response: $(curl -s $server:$port'/sum?58&96&2&5&3')"
            echo ""
            echo "404 Command: curl -Is $server:$port/404"
            echo "404 Response: $(curl -s $server:$port/404)"
            curl -Is $server:$port/404
            echo ""
            echo "Filter Command: curl -s $server:$port'/filter?58&96&2&5&3'"
            echo "Filter Response: $(curl -s $server:$port'/filter?58&96&2&5&3')"
            echo ""
            exit 0
        ;;

        * )
            curl -s $server:$port/404
            curl -I $server:$port/404
            exit 0
        ;;
    esac
done
