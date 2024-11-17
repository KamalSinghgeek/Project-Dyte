#!/bin/bash
# Loop over all commits
for commit_hash in $(git log --reverse --pretty=format:"%H")
do
    # Checkout to the commit
    git checkout $commit_hash

    # Push the commit
    git push origin HEAD

    # Optionally, pause between pushes
    sleep 1
done

