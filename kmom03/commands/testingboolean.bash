# !/bin/bash

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

check=1

if (( check )); then
    echo "true"
fi

if (( check % 1 == 0 )); then
    echo "true"
fi

prime=2
echo "$prime"
if (( $(isPrime $prime) )); then
    echo "true"
fi
