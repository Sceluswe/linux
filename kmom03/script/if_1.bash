# !/bin/bash

arg1=$1

if [ "$arg1" -gt "5" ]; then
    echo "$arg1 is greater than 5"
elif [ "$arg1" -le "5" ]; then
    echo "$arg1 is NOT greater than 5"
else
    echo "Argument must be a number."
    exit 1
fi

exit 0
