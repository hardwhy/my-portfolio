// src/index.ts

'use server';
import('dotenv/config'); 
import 'dotenv/config'; // Load environment variables
import configureExpress from './config/express-config';
import { listRoutes } from './utils/others';

const app = configureExpress();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  listRoutes(app); 
});
