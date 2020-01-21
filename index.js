const app = require('./app');
const config = require('config');
const PORT = config.get('port') || 5000;

const mongoose = require('mongoose');

const MongoDBRun = () => {
  try {
    mongoose.connect(
      config.get('mongo_uri'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
      .then(() => {
        console.log('mongoDB started ...');
        app.listen(PORT, () => console.info(`Server has been started on port ${PORT}`));
      })
      .catch(err => {
        console.log(err);
        process.exit(1)
      });
  } catch (error) {
    console.log(err);
    process.exit(1)
  }
};

MongoDBRun();
