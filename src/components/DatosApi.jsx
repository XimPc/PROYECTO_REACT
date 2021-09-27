import { render } from "@testing-library/react";
import axios from "axios";
import React, {Component} from "react";
export default
class DatosApi extends Component{

    constructor(props){
        super (props);
        this.state ={
            posts:[]
        }
    }

    // componentDidMount(){

    //     fetch('https://my-json-server.typicode.com/XimPc/JSON_API/characters', {method:'get'})
    //     .then(response=> response.json())
    //     .then(dataResponse=> {
    //         this.setState({
    //             posts:dataResponse
    //         })
    //     });
    //     }

componentDidMount(){
    axios.get('https://my-json-server.typicode.com/XimPc/JSON_API/characters')
    .then(resp=>{
        this.setState({
            posts:resp.data
        })
    })
}

render(){
    const {posts}= this.state 
    return (

        <>
        <div>
            {
                posts.map ( u=> (
                    
                    <>
                   
                    <div className="card mt-3" key={u.id} style={{ width: '18rem' }}>
                        <img src={u.image} className="card-img-top" alt={u.id} style={{ width: '100%', height: '250px' }} />
                        <div className="card-body mt-2">
                            <h5 className="card-title text-center">{u.title}</h5>
                            <p className="card-text">{u.body}</p>
                        </div>
                    </div>
                    <hr/>

                    </>
                ))
            }
        </div>
        </>
    
    )
}
}
