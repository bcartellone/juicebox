const express = require('express');
const tagsRouter = express.Router();
const { getAllTags } = require('../db');

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();
  
    res.send({
        "tags": []
    });
  });


  tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const tags = await getAllTags();    
    
    try {
      // use our method to get posts by tag name from the db              <----- ????
      // send out an object to the client { posts: // the posts }         <----- ????

      res.send({
        "posts": "/posts"

      });
    } catch ({ name, message }) {
    }
  });

module.exports = tagsRouter;