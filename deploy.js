const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Execute command and print output
function runCommand(command) {
  console.log(`Executing command: ${command}`);
  try {
    const output = execSync(command, { encoding: 'utf8' });
    console.log(output);
    return output;
  } catch (error) {
    console.error(`Command execution failed: ${error.message}`);
    console.error(error.stdout);
    console.error(error.stderr);
    throw error;
  }
}

// Main function
async function main() {
  try {
    console.log('Starting GitHub deployment process...');
    
    // Check if SSH key exists
    const sshKeyPath = path.join(process.env.USERPROFILE || process.env.HOME, '.ssh', 'id_github_nexusfi');
    const sshKeyExists = fs.existsSync(sshKeyPath);
    
    if (!sshKeyExists) {
      console.log('SSH key not found, generating new key...');
      runCommand(`ssh-keygen -t ed25519 -f "${sshKeyPath}" -C "NEXUSfiNEXUSfi@163.com" -N ""`);
      console.log('SSH key generation completed!');
      
      // Print public key, user needs to add to GitHub
      const publicKey = fs.readFileSync(`${sshKeyPath}.pub`, 'utf8');
      console.log('\nPlease add the following public key to your GitHub account:');
      console.log(publicKey);
      console.log('Press any key to continue after adding...');
      
      // Wait for user to confirm key has been added
      await new Promise(resolve => {
        process.stdin.once('data', () => resolve());
        console.log('Waiting for user confirmation...');
      });
    }
    
    // Verify SSH connection
    try {
      console.log('Testing SSH connection to GitHub...');
      runCommand('ssh -T git@github.com');
    } catch (error) {
      // GitHub SSH verification usually returns exit code 1, but still indicates successful connection
      if (!error.stdout.includes('successfully authenticated') && !error.stderr.includes('successfully authenticated')) {
        throw new Error('SSH connection to GitHub failed');
      }
    }
    
    // Check remote repository configuration
    console.log('Checking Git remote repository configuration...');
    const remoteOutput = runCommand('git remote -v');
    
    if (!remoteOutput.includes('git@github.com:NEXUSfi-Agent/NEXUSfi.git')) {
      console.log('Configuring Git remote repository...');
      runCommand('git remote set-url origin git@github.com:NEXUSfi-Agent/NEXUSfi.git');
    }
    
    // Execute Git operations
    console.log('Adding all changes to Git staging area...');
    runCommand('git add .');
    
    console.log('Committing changes...');
    runCommand('git commit -m "NEXUSfi V1.02"');
    
    console.log('Pushing to GitHub...');
    runCommand('git push origin master');
    
    console.log('All Git operations completed successfully!');
  } catch (error) {
    console.error('Error during deployment process:', error.message);
    process.exit(1);
  }
}

// Execute main function
main(); 