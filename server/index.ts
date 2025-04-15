import express from 'express';
import chatRouter from './routes/chat.js';
import cors from 'cors';
import morgan from 'morgan';
import { exec } from 'child_process';

const app = express();
const PORT = process.env.PORT || 3001;

exec('npx prisma db push', (err, stdout, stderr) => {
  if (err) console.error('❌ Prisma push failed:', stderr);
  else console.log('✅ Prisma DB synced:', stdout);
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/chat', chatRouter);

app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
