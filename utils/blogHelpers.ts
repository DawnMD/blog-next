import fs from 'fs';
import path from 'path';
import { blogSchemaType } from 'schema/blogSchema';

export const writeCache = (data: any) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'data', 'devtoBlogData.ts'),
    JSON.stringify(data)
  );
};

export const readCache = () => {
  const cache = fs.readFileSync(
    path.join(process.cwd(), 'data', 'devtoBlogData.ts'),
    'utf-8'
  );
  const cacheContents = JSON.parse(cache) as blogSchemaType;
  return cacheContents;
};
