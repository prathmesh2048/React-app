import React from "react";
import  "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
/*
let App = ()=>{
  return (
            <h1> Sample React App</h1>     
  );

}
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:"Sample React App", isShowing: false}
  }
  render() {
    return(
      <section className='text-center'>
 
          <br/>
            <div>
              <h1>{this.state.title}</h1>     
              <button className='btn btn-primary btn-lg mx-auto m-2' onClick={()=>{this.setState({isShowing: !this.state.isShowing})}}>Toggle</button>
              <br/>
              {
                this.state.isShowing ?(
                  <img src="https://images.unsplash.com/photo-1601923784757-70a04d355afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                ):null
              }
              
            </div>
          
      
      </section>
    );
  }
}
// here we are using two curly braces one for javascript and one for
// defining the object
 // we are using 'className' beacause 'class' is reserved word
// instead of using -color or someting we use Colour
export default App;
 
