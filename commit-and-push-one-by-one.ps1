# PowerShell script to commit and push all changes one by one in a Git repository

# Check if there are any changes
$status = git status --porcelain
if (-not $status) {
    Write-Output "No changes to commit."
    exit 0
}

# Loop through each file with changes
$files = $status -split "`n" | ForEach-Object { ($_ -split "\s+")[1] }
foreach ($file in $files) {
    Write-Output "Committing $file..."

    # Stage the file
    git add $file

    # Commit the file with a message
    git commit -m "Committing changes for $file"

    # Push the commit to GitHub
    git push

    Write-Output "Committed and pushed $file"
}

Write-Output "All changes committed and pushed one by one!"
