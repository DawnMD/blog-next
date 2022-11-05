import fs from 'fs';
import path from 'path';

export const writeCache = (data: any) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'data', 'devtoBlogData.ts'),
    JSON.stringify(data)
  );
};

export const readCache = () => {};
