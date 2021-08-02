import React from "react";
import axios from "axios";

export default class HouseList extends React.Component {
    state = {
        Houses: []
    }

    //POST & OBJECT
    componentDidMount() {
        axios.get("https://immoelizapredict.herokuapp.com/")
        .then((res) => {
            console.log(res);
            this.setState({houses: res.data})
            console.log(res)
        })
    }
    render(){
        return(
            <h1>Hello</h1>  
        )
    }

}

