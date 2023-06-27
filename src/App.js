import React from 'react';

 const commentData = {
    title: "The Law of Contract",
    author: "Itse Sagay",
    comments: [
      {
        id: 1,
        text: "You cannot build something on nothing and expect it to stand.",
        author: "Niki Tobi, JSC",
        children: [
          {
            id: 2,
            text: "Commercial Law",
            author: "Johnny Ray",
            children: [
              {
                id: 3,
                text: "Islamic Law",
                author: "A.B. Salami",
                children: []
              }
            ]
          }
        ]
      },
      { id: 4,
        text: "Legal Method",
        author: "The Law",
        children: []
        }
    ]
 }

  function Comment ( {comment}) {
      const nestedComments = (comment.children || []).map (comment => {
        return <Comment key = {comment.id} comment = {comment} type = "child" />
      })

      return (
        <div style = {{"marginLeft" : "25px", "marginTop" : "10px"}}>
          <div>{comment.text}</div>
           {nestedComments}
        </div>
      )
  }

  function App () {
    return (
      <div>
        {
          commentData.comments.map( (comment) => {
            return (
              <Comment key = {comment.id} comment = {comment} />
            )
          }
          )
        }
      </div>
    )
  }

   export default App;