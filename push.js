const { spawnSync } = require('child_process');

// Simple function to run a command and log output
function runCmd(cmd, args) {
  console.log(`Running: ${cmd} ${args.join(' ')}`);
  const result = spawnSync(cmd, args, { encoding: 'utf8' });
  
  if (result.error) {
    console.error(`Error: ${result.error.message}`);
    return false;
  }
  
  console.log(`stdout: ${result.stdout}`);
  if (result.stderr) console.error(`stderr: ${result.stderr}`);
  
  return result.status === 0;
}

console.log('Starting Git operations...');

// Add all files
if (!runCmd('git', ['add', '.'])) {
  console.error('Failed to add files to Git staging area.');
  process.exit(1);
}

// Commit changes
if (!runCmd('git', ['commit', '-m', 'NEXUSfi V1.02'])) {
  console.error('Failed to commit changes.');
  process.exit(1);
}

// Push to GitHub
if (!runCmd('git', ['push', 'origin', 'master'])) {
  console.error('Failed to push changes to GitHub.');
  process.exit(1);
}

console.log('Git operations completed successfully!'); 