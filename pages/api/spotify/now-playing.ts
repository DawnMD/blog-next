import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'succed' });
  } else {
    res.status(422).json({ message: 'Cannot post' });
  }
};

export default handler;
