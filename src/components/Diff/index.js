import React from 'react'

class Diff extends React.Component {
    state = {
        arr: [1, 2]
    }
    add(){
        this.setState({
            arr:[1,2,3]
        })
    }
    render() {
        return <><div>
          {
              this.state.arr.map(v => {
                  return <div key={v}>{v}</div>
              })
          }
        </div>
         <button onClick={()=>this.add()}>增加节点</button> 
        </>
    }
}
export default Diff
