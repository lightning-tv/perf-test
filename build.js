import * as fs from 'fs';
import { execSync } from 'child_process';

// lookup frameworks
const dirs = fs.readdirSync('./frameworks', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

if (dirs.length === 0) {
    console.error('No frameworks to build, please ensure you have at least one framework enabled in the .env file');
    process.exit(1);
}

// clear dist
execSync('rm -rf docs', { shell: true  });
execSync('mkdir docs', { shell: true  });
execSync('cp index.html docs/', { shell: true  });

// build & copy
dirs.forEach((name) => {
  console.log('Building', name, '...');
  execSync(`cd frameworks/${name} && pnpm install && pnpm build`, { shell: true  });
  execSync(`cp -r frameworks/${name}/dist docs/${name}`);
});