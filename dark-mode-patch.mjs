import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');

const replacements = [
  // Backgrounds
  { regex: /(?<!dark:)(bg-white)(?!\/)(?!\s*dark:bg-)/g, replacement: 'bg-white dark:bg-slate-800' },
  { regex: /(?<!dark:)(bg-slate-50)(?!\/)(?!\s*dark:bg-)/g, replacement: 'bg-slate-50 dark:bg-slate-900' },
  { regex: /(?<!dark:)(bg-slate-100)(?!\/)(?!\s*dark:bg-)/g, replacement: 'bg-slate-100 dark:bg-slate-800/80' },
  
  // Borders
  { regex: /(?<!dark:)(border-slate-200)(?!\/)(?!\s*dark:border-)/g, replacement: 'border-slate-200 dark:border-slate-700' },
  { regex: /(?<!dark:)(border-slate-300)(?!\/)(?!\s*dark:border-)/g, replacement: 'border-slate-300 dark:border-slate-600' },
  { regex: /(?<!dark:)(border-slate-100)(?!\/)(?!\s*dark:border-)/g, replacement: 'border-slate-100 dark:border-slate-800' },
  
  // Text
  { regex: /(?<!dark:)(text-slate-900)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-slate-900 dark:text-slate-100' },
  { regex: /(?<!dark:)(text-slate-800)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-slate-800 dark:text-slate-200' },
  { regex: /(?<!dark:)(text-slate-700)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-slate-700 dark:text-slate-300' },
  { regex: /(?<!dark:)(text-slate-600)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-slate-600 dark:text-slate-400' },
  { regex: /(?<!dark:)(text-blue-900)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-blue-900 dark:text-blue-200' },
  { regex: /(?<!dark:)(text-blue-800)(?!\/)(?!\s*dark:text-)/g, replacement: 'text-blue-800 dark:text-blue-300' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(componentsDir);
console.log('Dark mode patch complete.');
