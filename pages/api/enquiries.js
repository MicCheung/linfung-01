

import { getSession } from 'next-auth/react';
import Appoint from '@/models/Appoint';
import db from '@/utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: 'signin required' });
  }
  await db.connect();
  const orders = await Appoint.find().sort({"updatedAt":-1});
  await db.disconnect();
  res.send(orders);
};

export default handler;