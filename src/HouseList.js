import React from "react";
import axios from "axios";

export default class HouseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            area: 10.5,
            postalCode: 9000,
            subtypeProperty: "APARTMENT",
            buildingCondition: "AS_NEW",
            BedroomsCount: 3,
            fireplaceExists: "yes",
            hasGarden: "yes",
            hasSwimmingPool: "yes",
            hasTerrace: "yes",
            facadeCount: 4,
            outsideSpace: 10.5,
            landSurface: 7.5,
            hasFullyEquippedKitchen: "yes",
            prediction: 0
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.areaChange=this.areaChange.bind(this)
        this.postalCodeChange=this.postalCodeChange.bind(this)
        this.subtypeProperty=this.subtypePropertyChange.bind(this)
        this.BedroomsCount=this.BedroomsCountChange.bind(this)

    }

        handleSubmit(event) {
            event.preventDefault()
            console.log(this.state)
            axios.post("https://immoelizapredict.herokuapp.com/predict/", {"data": {"area":parseInt(this.state.area), "postal-code":parseInt(this.state.zipCode), "subtypeproperty":this.state.subtypeProperty, "rooms-number":parseInt(this.state.BedroomsCount)}})
            .then(function (response){
                console.log(response)
            })
        }
        areaChange(event) {
            this.setState({area: event.target.value})

        zipCodeChange(event) {
            this.setState({postalCode: event.target.value})
        }
        subtypeProperty(event) {
            this.setState({subtypeProperty: event.target.value})
        }
        BedroomsCount(event) {
            this.setState({BedroomsCount: event.target.value})
        }

        }

// export default class HouseList extends React.Component {
//     state = {
//       Houses: []
//     }

//     componentDidMount() {
//         axios.get("https://immoelizapredict.herokuapp.com")
//         .then((res) => {
//             console.log(res);
//             this.setState({houses: res.data})
//             console.log(res)
//         })
//     }

    render() {
        let button;
        if (this.state.prediction === 0) {
            button = <p>Please complete the form</p>
        }else{
            button = <p>Your prediction is {this.state.prediction} </p>
        }

        return(
            <div>
                <h1>It is working</h1>
                    <form method='POST' onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="Postal-code" onChange={this.postalCodeChange}/>

                    <input type="submit" />
                </form>
            </div>  
        )
    };
}