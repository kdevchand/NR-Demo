const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://db-service:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({ message: String });
const Message = mongoose.model('Message', messageSchema);

app.get('/message', async (req, res) => {
  const message = await Message.findOne();
  res.json(message);
});

app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});
