const { execSync } = require('child_process');
const path = require('path');

// Run Prisma migrations
try {
  console.log('Running Prisma migration deploy...');
  execSync('npx prisma migrate deploy', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });
  console.log('Prisma migration deploy completed successfully.');
} catch (error) {
  console.error('Error during Prisma migration deploy:', error);
}

// Generate Prisma client
try {
  console.log('Generating Prisma client...');
  execSync('npx prisma generate', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });
  console.log('Prisma client generated successfully.');
} catch (error) {
  console.error('Error during Prisma client generation:', error);
}
