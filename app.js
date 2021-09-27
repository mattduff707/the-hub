const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const snippetsRouter = require('./routes/snippets.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api', snippetsRouter);

app.post('/api/snippets', (req, res) => {
  const newFile = `./markdown/${req.body.test}.md`;
  fs.writeFile(newFile, `# IT WORKED`, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${newFile} written!!!!!!`);
  });
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
