require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/jokes',(req,res) =>{
res.send([
    {
        "link": "https://www.reddit.com/r/Jokes/comments/3y2gz5/a_deaf_couple_wants_to_know_when_to_have_sex/",
        "id": 1,
        "title": "A deaf couple wants to know when to have sex...",
        "mature": true,
        "author": "Servedabitch2times",
        "content": "The wife says, \"If you want to have sex, squeeze my tits once.  If you don't want to have sex, squeeze my tits twice.\"    The husband says, \"OK if you want to have sex, pull my dick once.  If you don't want to have sex, pull my dick 437 times.\""
      },
      {
        "link": "https://www.reddit.com/r/Jokes/comments/3rqx4e/my_mom_laughed_at_me_when_i_said_i_was_going_to/",
        "id": 2,
        "title": "My mom laughed at me when I said I was going to build a car out of spaghetti.",
        "mature": false,
        "author": "CurrentlyCurious",
        "content": "You should have seen her face as I drove pasta."
      },
      {
        "link": "https://www.reddit.com/r/Jokes/comments/33qli6/no_one_should_have_been_surprised_by_the_rise_of/",
        "id": 3,
        "title": "No one should have been surprised by the rise of the USSR after World War II.",
        "mature": false,
        "author": "Waltzer64",
        "content": "I mean, there were red flags everywhere."
      }
])
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})