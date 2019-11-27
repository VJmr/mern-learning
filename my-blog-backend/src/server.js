import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [],
    },
}

app.get('/hello', (request, response)=>{
    response.send('Hello!');
});

app.post('/api/articles/:name/upvote', (request, response) => {
    const articleName = request.params.name;

    articlesInfo[articleName].upvotes += 1;
    response.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`);
})

app.post('/api/articles/:name/add-comment', (request, response) => {
    const articleName = request.params.name;
    const { username, text} = request.body;
    articlesInfo[articleName].comments.push({username, text});
    response.status(200).send(articlesInfo[articleName]);
})


app.get('/api/articles/:name',(request, response) => {
    const articleName = request.params.name;
    response.status(200).send(articlesInfo[articleName]);
})

app.listen(8000, () => {
    console.log('listening on port 8000');
});