#!/bin/bash

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

# Takes a value. And finds the prime factors of that number.
function findPrimeFactors
{
    # Check if a number is a prime number.
    local input=$1
    local prime=2
    local primefactors=""

    #while [ "$i" <= "$input" ]; do
    #    if isPrime $i && (( input % i )); then
    #        primefactors=$( echo "primefactors $i")
    #        input=$(( input / i ))
    #    else
    #        i=$(($i + 1))
    #    fi
    #done

    while [ "$prime" -le "$input" ]; do
        if (( $(isPrime $i) )); then
            while (( input % prime == 0 )); do
                primefactors="$primefactors $prime"
                input=$(( input / prime ))
            done
        fi
        prime=$((prime + 1))
    done

    echo "$1: $primefactors"
}


findPrimeFactors 1225
