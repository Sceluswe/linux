#!/bin/bash

while (( $# )); do
    case "$1" in
        d )
            date
            exit 0
        ;;
        n )
            echo {1..20}
            exit 0
        ;;
        a )
            if [ "$#" -ge "2" ]; then
                echo "$2"
                exit 0
            else
                echo "Missing argument"
                exit 1
            fi
        ;;
        --help | -h )
        txt=(
    "Utility argument_2 for doing stuff."
    "Usage: argument_2 [options] <command> [arguments]"
    ""
    "Command:"
    "  d        Display date."
    "  n        Display numbers from 1..20"
    "  a        Echoes the second input argument."
    ""
    "Options:"
    "  --help, -h     Print help."
    "  --version, -h  Print version."
        )
        printf "%s\n" "${txt[@]}"
        ;;
        * )
            echo "unkown command type --help for commands"
            exit 0
        ;;
    esac
done
