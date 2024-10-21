import Child from "./proptype"

function Hoc(Component){
  let Authentecate = false
  return (props)=>{
    if(Authentecate){
      return <Component {...props}/>
    }
    else{
      return <Login {...props}/>
    }
  }
}

let Wrapper = Hoc(User)

function User({message1}){              //props destructuring
  return(
    <>
      <h1>user Component</h1>
      <h2>Name: {message1}</h2>
    </>
  )
}

function Login({message2}){
  return(
    <>
      <h1>Login Component</h1>
      <h2>Name: {message2}</h2>
    </>
  )
}





function App(){
  return(
    <>
      <Wrapper message1="you've already logined" message2="Want to sign up" />
      <Child  />
    </>

  )
}


export default App
