import React, { Component } from "react";
import Qinfo from './Qinfo';
import Result from './Result';

class Qlist extends Component {
  render() {
    const { i, maxi, data, onCounter, onNext, onResult, max1, max2, result } = this.props;
    if(!data) return null;
    
    // const list = data.map(
    //    info => (<Qinfo info={info} key={info.id}  onCounter={onCounter}/>)
    // )     
    return (
      <div className="q-list">
        {/*list*/} 
        {
          (i<maxi) ?
            <Qinfo i={i} info={data[i]} key={data[i].id} onCounter={onCounter} onNext={onNext}/>
            :
            <Result onResult={onResult} max1={max1} max2={max2} result={result}/>
        }
      </div>
    );
  }
}

export default Qlist;
