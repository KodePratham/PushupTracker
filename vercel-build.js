const { execSync } = require('child_process');

// Try to generate Prisma client through Node.js API to avoid permission issues
console.log('🔄 Setting up Prisma...');
try {
  // This will generate the Prisma client if needed
  require('@prisma/client');
  console.log('✅ Prisma client initialized');
} catch (error) {
  console.log('⚠️ Error initializing Prisma client:', error.message);
}

// Run Next.js build using npx which handles permissions better
console.log('🔄 Building Next.js application...');
try {
  execSync('npx next build', { stdio: 'inherit' });
  console.log('✅ Next.js build completed');
} catch (error) {
  console.error('❌ Next.js build failed');
  process.exit(1);
}