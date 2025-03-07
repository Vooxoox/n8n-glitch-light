const { exec } = require('child_process');

exec('n8n', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  process.exit(0);
});
