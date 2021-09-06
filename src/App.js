import React from 'react'

const App =()=> {
    return (
      <>
    <input type="text" onChange={()=>console.log("clicked")}/>
    <Cat/>
    <Cat/>
    <Cat/>
      </>
  )
}

const Cat = () => <div>にゃー</div>

export default App;
