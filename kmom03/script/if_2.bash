# !/bin/bash

arg1=$1

if [ "$arg1" -gt "5" ]; then
    echo "Higher!"
elif [ "$arg1" -lt "5" ]; then
    echo "Lower!"
elif [ "$arg1" -le "5" ]; then
    echo "Same!"
else
    echo "Argument must be a number."
    exit 1
fi

exit 0
