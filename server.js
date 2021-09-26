const express = require('express');
// const fs = require('fs');
const app = express();
const path = require('path');
// app.use(express.json());

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });
// app.use(express.urlencoded({ extended: false }));

// let snippets = ['snippet 1', 'snippet 2', 'snippet 3'];
// app.get('/api/snippets', (req, res) => {
//   fs.readdir('./markdown', 'UTF-8', (err, text) => {
//     if (!err) {
//       const cleanedLinks = text.map((e) => e.split('.').slice(0, -1).join('.'));
//       res.send(cleanedLinks);
//     }
//   });
// });
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.post('/api/snippets', (req, res) => {
//   const newFile = `./markdown/${req.body.test}.md`;
//   fs.writeFile(newFile, `# IT WORKED`, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log(`${newFile} written!!!!!!`);
//   });
// });

// app.listen(process.env.PORT, () => console.log(`Server started on port ${port}`));
