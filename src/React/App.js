import React, { Component } from 'react';
import {connect} from "react-redux";
import {getArticles} from "../Redux/action"

const flexStyle ={
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}


function mapStateToProps(state){
  return {
    articles: state
  }
} 


class App extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(getArticles())
  }
  
  render() {
    console.log('rerendere')
    console.log(this.props.articles)
    let data
    if (!this.props.articles){
      data = <div>Loading</div>
    } else{
        data = this.props.articles.map((article)=> {
          return (
            <div className=" card z-depth-4" style={{height:'auto',margin:'18px',textAlign:'center'}}>
          
            <div style={{...flexStyle, color: "white", flexDirection: 'column',padding:'5px' ,height:'auto',background: 'linear-gradient(to right, #642B73 0%, #C6426E 100%)'}}>
              <h3 style={{fontFamily: "Lobster"}}>{article.title}</h3>
              <p style={{fontFamily: "Josefin Sans"}}>{article.description}</p>
              <p style={{fontStyle:"italic", fontFamily: "Cormorant Garamond"}}>-{article.author}</p>
              <hr/>
              <p style={{fontFamily: "Cinzel"}}>Scroll down for more</p>
            </div>
            </div>
          )
        })
      }
    return (
      <div>
        {data}
      <div style={{...flexStyle, flexDirection: 'column' ,height:'100vh',background: 'linear-gradient(to right, #7F00FF 0%, #E100FF 100%)'}}>
        <button className="waves-effect amber btn"  onClick={this.handleClick}>Get News</button>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
