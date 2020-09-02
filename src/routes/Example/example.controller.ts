import express from 'express';

export const handleExample = async (req: express.Request, res: express.Response) => {
  try {
    const data = ['first', 'second', 'third'];
    return res.status(200).send({ message: 'Retrieved examples', data });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving examples' });
  }
};