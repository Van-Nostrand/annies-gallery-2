#!/bin/bash

# take the search text
read -p "Enter the search text:" search

# Take the replace text
read -p "Enter the replace text:" replace

# rename all files that match with the pattern
$(rename "s/.$search/.$replace/" *)
echo "The files are renamed."
