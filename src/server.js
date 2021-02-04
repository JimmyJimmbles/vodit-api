import express from 'express';
import 'dotenv/config';

/**
 * Main server component
 */
const server = async () => {
  // MongoDB URI
  const mongoURI = `mongodb+srv://${process.envDB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ctn42.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  // Init express
  const app = express();

  // Set up port
  const port = process.env.PORT || 5000;

  app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
  });

  app.listen(port, () => console.info(`Server started, listening on port: ${port}`));
};

export default server;
