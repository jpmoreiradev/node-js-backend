import dotenv from 'dotenv';
import express from 'express';
import { getPackageCorreios } from './correio-service';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8899;

app.get('/package/:packageId', async (req : express.Request, res : express.Response) => {
  const { packageId } = req.params;
  // const now = new Date();
  const packageInfo = await getPackageCorreios(packageId);
  // const end = new Date();

  // console.log(`Elapsed ${end.getTime() - now.getTime()}ms`);
  res.json(packageInfo);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Serve running at ${PORT}`);
});
