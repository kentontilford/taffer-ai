import fs from 'fs';
import path from 'path';
export const loadPersona = (name: string) => {
  const filePath = path.join(__dirname, `../../docs/\${name}_profile.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};