import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

/**
 * Main server component
 */
const server = async () => {
  // Init express
  const app = express();

  // Set up port
  const port = process.env.PORT || 5000;

  // MongoDB URI
  const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ctn42.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  // Set up DB connection and start listening on server
  mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => app.listen(port, () => console.info(`Server started, listening on port: ${port}`)))
    .catch(err => console.error(err));

  // Middleware
  app.use(morgan('dev'));

  app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
  });
};

export default server;
