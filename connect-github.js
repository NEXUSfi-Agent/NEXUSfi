const { execSync } = require('child_process');

try {
  console.log('Testing SSH connection to GitHub...');
  try {
    const sshOutput = execSync('ssh -T git@github.com', { encoding: 'utf8', stdio: 'pipe' });
    console.log(sshOutput);
  } catch (sshError) {
    // SSH test usually returns error code 1, but if output contains "successfully authenticated" then it's successful
    if (sshError.stdout && sshError.stdout.includes('successfully authenticated')) {
      console.log('SSH connection successful!');
    } else {
      console.error('SSH connection failed:', sshError.message);
      process.exit(1);
    }
  }

  console.log('Executing Git operations...');
  console.log('Adding all files...');
  execSync('git add .', { stdio: 'inherit' });
  
  console.log('Committing changes...');
  execSync('git commit -m "NEXUSfi V1.02"', { stdio: 'inherit' });
  
  console.log('Pushing to GitHub...');
  execSync('git push origin master', { stdio: 'inherit' });
  
  console.log('Git operations completed successfully!');
} catch (error) {
  console.error('Error during execution:', error.message);
  process.exit(1);
} 