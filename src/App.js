import React, { Component } from 'react'
import Transationlist from './component/Transationlist';
import _ from "lodash";

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchData : null
    }
  }
  
  search(key){
    fetch('https://api.zomato.com/v1/search.json?city_id='+key).then((data)=>{
      data.json().then((result)=>{
        console.log('result',result)
        this.setState({searchData:result})
      })
    })
  
  }
  render() {
    const data = _.get(this.state.searchData, "results.restaurants", []);
    return (
      <div>
        <Transationlist/>
        <h1>Zomato App</h1>
        <input type="text" onChange={(event)=>this.search(event.target.value)}/>
        <div>
          <div className="pankaj">
            {
              data.map((item)=> {
               return (<>
               <span>Text :- {item.description}<n/></span>
                {/* {console.log(item.text)} */}
                {/* <div>Text{item.text}</div> */}
                {/* <div>Description{item.description}</div> */}
                {/* <div>Image<img src={item.image_url} /></div> */}
                </>)
              }) 
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App;