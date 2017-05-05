# !/bin/bash

# Creating and testing commands-factor

# Function returns true(true=0) if number is prime or false(false=1)
function commands-isPrime
{
    # Check if a number is a prime number.
    local number=$1
    local i=2
    local bool_return=0

    while [ "$i" -lt "$number" ]; do
        if ((number % i == 0)); then
            bool_return=1
        fi
        i=$((i + 1))
    done

    return $bool_return
}

# Finds the primenumbers that argument 1 can be divided by and prints them.
function commands-factor
{
    local number=$1
    local i=2
    # The string to be printed.
    local primValues=""

    # Find each prime number that number can be divided by.
    while [ "$i" -le "$number" ]; do
        # If $i is a primenumber then
        if commands-isPrime $i; then
            # check if prime number can be divided by $number.
            if ((number % i == 0 )); then
                # Add $number to list of primenumbers that $number can be divided by.
                primValues="$primValues $i"
            fi
        fi
        i=$((i + 1))
    done

    # Print $number and all primenumbers that can divide it.
    echo "$number:$primValues"
}
#5: 5
#6: 2 3
#16: 2 2 2 2
commands-factor 5
commands-factor 6
commands-factor 11
commands-factor 13
commands-factor 15
commands-factor 16
commands-factor 22
