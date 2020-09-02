import express from 'express';

export const handleExample = async (req: express.Request, res: express.Response) => {
  try {
    if (req.params?.errorId) {
      throw Error('Example error');
    }

    const data = ['first', 'second', 'third'];
    return res.status(200).send({ message: 'Retrieved examples', data });
  } catch (error) {
    const errorMsg = `Error retrieving example ${req.params?.errorId}`;
    // console.error(errorMsg, error);

    return res.status(500).send({ message: errorMsg, data: [] });
  }
};