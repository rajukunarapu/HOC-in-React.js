import PropTypes from "prop-types"


function Child(props){
    return(
        <>
            <h1>Child Component</h1>
            <h2>Name: {props.name}</h2>
            <h2>Name: {props.age}</h2>
            <input type={"radio"} id="gender"/>
            <label htmlFor="gender" >Gender</label>
        </>
    )
  }
  
  
  Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number 
  }

  Child.defaultProps = {
    name:"Not Available",
    age : "Not Available"
  }

export default Child