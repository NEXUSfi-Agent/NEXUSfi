const { execSync } = require('child_process');

console.log('Running Git operations...');

try {
  // Add all files
  execSync('git add .');
  console.log('Files added to staging area');

  // Commit changes
  execSync('git commit -m "NEXUSfi V1.01"');
  console.log('Changes committed');

  // Push to remote repository
  execSync('git push origin master');
  console.log('Changes pushed to remote repository');

  console.log('Git operations completed successfully!');
} catch (error) {
  console.error('Error executing Git operations:', error.message);
} 