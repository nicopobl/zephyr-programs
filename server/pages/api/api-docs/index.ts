import { NextApiRequest, NextApiResponse } from 'next';
import swaggerUi from 'swagger-ui-express';
import { load } from 'js-yaml';
import * as fs from 'fs';


import { createServer } from 'http';
import next from 'next';

const swaggerDocument = load(fs.readFileSync('./swagger.yaml', 'utf8'));

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const app = next({ dev: process.env.NODE_ENV !== 'production' });
  const server = createServer((req, res) => {
    swaggerUi.serve(req, res, () => {
      swaggerUi.setup(swaggerDocument);
    });
  });
  app.prepare().then(() => {
    server.listen(3000);
  });
};

export default handler;
