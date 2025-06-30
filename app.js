const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/collab-docs', { useNewUrlParser: true, useUnifiedTopology: true });

// Document schema
const Document = mongoose.model('Document', new mongoose.Schema({
  _id: String,      // <-- Add this line to use string IDs
content: String,
}));

// REST endpoint to get or create a document
app.get('/api/document/:id', async (req, res) => {
let doc = await Document.findById(req.params.id).catch(() => null);
if (!doc) {
    doc = await Document.create({ _id: req.params.id, content: '' });
}
res.json(doc);
});

app.post('/api/document/:id', async (req, res) => {
const { content } = req.body;
await Document.findByIdAndUpdate(req.params.id, { content });
res.sendStatus(200);
});

// Socket.IO for real-time collaboration
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
socket.on('join', (docId) => {
    socket.join(docId);
});

socket.on('send-changes', ({ docId, content }) => {
    socket.to(docId).emit('receive-changes', content);
});
});

server.listen(5000, () => console.log('Backend running on http://localhost:3000'));