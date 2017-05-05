# !/bash/bin

# isPrimetest

# 0 is true in this example

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

    echo "$bool_return"

    return $bool_return
}

number=4
result="cancer"
if ((4 % 2 == 0)); then
    result=1
fi

echo $result

notPrime=""
if commands-isPrime 2; then
     notPrime="win"
fi
echo "$notPrime"
