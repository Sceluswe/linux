#!/bin/bash

version="v0.0.1"
SCRIPT="commands"

#set -x
#trap read debug

# Function returns true(true=1) if number is prime or false(false=0)
function isPrime
{
    # Check if a number is a prime number.
    local input=$1
    local i=2
    local bool_return=1

    while [ "$i" -lt "$input" ]; do
        if (( input % i == 0 )); then
            bool_return=0
        fi
        i=$((i + 1))
    done

    echo $bool_return
}

# Finds the first prime number argument can be divided by.
# Uses said prime to divide argument until division results in a float.
# while x % prime result += "prime " if !(x % prime) result += "x "
function commands-factor
{
    local input=$1
    # Check if a number is a prime number.
    if (( ! $(isPrime "$input" ) )); then
        local prime=2
        local primefactors=""

        while [ "$prime" -le "$input" ]; do
            if (( $(isPrime $prime) )); then
                while (( input % prime == 0 )); do
                    primefactors="$primefactors $prime"
                    input=$(( input / prime ))
                done
            fi
            prime=$((prime + 1))
        done

        echo "$1:$primefactors"
        shift
    else
        echo "$1: $1"
        shift
    fi
}

while (( "$#" )); do
    case "$1" in
        --help | -h )
        txt=(
    "Utility $SCRIPT for doing stuff."
    "Usage: $SCRIPT [options] <command> [arguments]"
    ""
    "Command:"
    "  reverse [anything]   Reverses provided string."
    "  factors [number(s)]  Displays all primenumbers dividable by supplied number(s)"
    ""
    "Options:"
    "  --help, -h     Print help."
    "  --version, -h  Print version."
        )

        printf "%s\n" "${txt[@]}"
        exit 0
        ;;

        --version | -v )
            echo $version
            exit 0
        ;;

        reverse )
            shift # remove the "reverse" part of the argument list.
            echo "$*" | rev
            exit 0
        ;;

        factors )
            shift # remove the "factors" part of the argument list.
            while (( "$#" )); do
                commands-factor "$1"
                shift
            done
            exit 0
        ;;

        * )
            echo "Type --help, -h to get help."
            exit 0
        ;;
    esac
done
