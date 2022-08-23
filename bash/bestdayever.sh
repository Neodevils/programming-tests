#!/bin/bash

# these are the parameters for executing the script
name=$1
compliment=$2

# commands inside variables
user=$(whoami)
whereami=$(pwd)
date=$(date)

echo "Good morning $name!"

sleep 1

echo "You're looking good $name!"

sleep 1

echo "You have the best $compliment I have ever seen $name!"

sleep 2

echo "You are $user, and you're in $whereami. By the way, today is $date."
