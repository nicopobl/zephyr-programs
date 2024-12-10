import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger 
 * /api/test
 *   get:
 *     description: API for test purposes
 *     responses: 
 *       200:
 *         description: Hello World!
 *       400:
 *         description: Not Found
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.json("Hello world!");
}

export default handler;
