
import React, { Component } from 'react'


export default class Additem extends Component {
    constructor(props){
        super(props);
        this.itemSubmit=this.itemSubmit.bind(this);
        
        this.state={
            err:""
        }
    }

    itemSubmit(e) {

        const value = e.target.elements.itemtext.value;
      
        //    const err=props.additem(value);
        //burada class olsa component state tanımlayıp err nin içini olduracaktık TodoApp deki return ile dönen hata içerikleriyle
        const err=this.props.additem(value);
        this.setState({err:err})
        
        e.preventDefault();
    }

  render() {
    return (
        <>
    

        <div className='container mt-5'>
        {this.state.err &&  <div className="alert alert-warning" role="alert">{this.state.err}
            </div>}
            
            <div className="card">
                <div className="card-header text-center">TodoApp</div>
                <div className="card-body">
                    <form onSubmit={this.itemSubmit}>
                        <div className="input-group">
                            <input type="text" name='itemtext' className="form-control" aria-describedby='deletebtn' />
                            <button type='submit' className="btn btn-success" id='deletebtn'>additem</button>
                         </div>
                    </form>
                  
                </div>

            </div>

        </div>

    </>
    )
  }
}





