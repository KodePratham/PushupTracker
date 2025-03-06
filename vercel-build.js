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

// Build Next.js application programmatically to avoid permission issues
console.log('🔄 Building Next.js application...');
try {
  // Use Next.js programmatic API instead of CLI
  const nextBuild = require('next/dist/build').default;
  const dir = process.cwd();
  
  // Run the build with default options
  nextBuild(dir, {}).then(() => {
    console.log('✅ Next.js build completed');
  }).catch((err) => {
    console.error('❌ Next.js build failed:', err);
    process.exit(1);
  });
} catch (error) {
  console.error('❌ Failed to start Next.js build:', error);
  process.exit(1);
}