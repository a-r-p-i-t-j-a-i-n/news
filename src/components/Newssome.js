import React, { Component } from 'react'
import Itemnews from './Itemnews'



export class Newssome extends Component {
   
    constructor() {
        super();
        console.log("I am constructor");
        this.state = {
          articles: [], // Initialize articles as an empty array
          loading: false,
          page: 1
        };
      }
    async componentDidMount(){
   let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816"
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        this.setState({articles:parsedata.articles})
    }
    handlenext=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816&page=${this.state.page+1}`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        // this.setState({})
        this.setState({
            page:this.state.page+1,
            articles:parsedata.articles
        })
    }
    handleprev=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816&page=${this.state.page-1}`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        // this.setState({})
        this.setState({
            page:this.state.page-1,
            articles:parsedata.articles
        })
    }
  render() {
    return (
      <div className="container my-3">
       <h2>News- Top Headlines</h2>
       
       <div className='row'>
       {this.state.articles.map((element)=>{
       return  <div className='col-md-3' key={element.url}>
<Itemnews key={element.url} title={element.title} description={element.description} Imageurl={element.urlToImage} />
</div>

       })}

    
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleprev} type="button" class="btn btn-dark">Previous</button>
      <button type="button" disabled={this.state.page>=this.page} onClick={this.handlenext} class="btn btn-dark">Next</button>
      </div>
      </div>
    )
  }
}

export default Newssome