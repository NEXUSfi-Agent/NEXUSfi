Write-Host 'Generating SSH key...'
ssh-keygen -t ed25519 -f "$HOME\.ssh\id_github_nexusfi" -C 'NEXUSfiNEXUSfi@163.com' -N '"'
Write-Host 'Key generation completed!'
