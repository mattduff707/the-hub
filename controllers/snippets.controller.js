const fs = require('fs');

const express = require('express');

exports.getSnippetsList = function (req, res) {
  fs.readFile('./database/snippets.database.json', (err, data) => {
    if (err) throw err;
    const { snippetsList } = JSON.parse(data);
    res.send(snippetsList);
  });
};
