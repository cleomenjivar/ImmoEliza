import React from "react";
import axios from "axios";

export default class HouseList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            area: 10,
            postalCode: 9000,
            subtypeProperty: "APARTMENT",
            buildingCondition: "AS_NEW",
            BedroomsCount: 3,
            fireplaceExists: "yes",
            hasGarden: "yes",
            hasSwimmingPool: "yes",
            hasTerrace: "yes",
            facadeCount: 4,
            outsideSpace: 10,
            landSurface: 7,
            hasFullyEquippedKitchen: "yes",
            prediction: 0
        }


        this.handleSubmit=this.handleSubmit.bind(this)
        this.areaChange=this.areaChange.bind(this)
        this.postalCodeChange=this.postalCodeChange.bind(this)
        this.subtypePropertyChange=this.subtypePropertyChange.bind(this)
        this.buildingConditionChange=this.buildingConditionChange.bind(this)
        this.BedroomsCountChange=this.BedroomsCountChange.bind(this)
        this.fireplaceExistsChange=this.fireplaceExistsChange.bind(this)
        this.hasGardenChange=this.hasGardenChange.bind(this)
        this.hasSwimmingPoolChange=this.hasSwimmingPoolChange.bind(this)
        this.hasTerraceChange=this.hasTerraceChange.bind(this)
        this.facadeCountChange=this.facadeCountChange.bind(this)
        this.outsideSpaceChange=this.outsideSpaceChange.bind(this)
        this.landSurfaceChange=this.landSurfaceChange.bind(this)
        this.hasFullyEquippedKitchenChange=this.hasFullyEquippedKitchenChange.bind(this)
    }

        handleSubmit(event) {
            event.preventDefault()
            console.log(this.state)
            axios.post("https://immoelizapredict.herokuapp.com/predict/", {"data": {"area":parseFloat(this.state.area),
            "postal-code":parseInt(this.state.postalCode),
            "subtype-property": this.state.subtypeProperty,
            "building-condition": this.state.buildingCondition,
            "Bedrooms-count":parseInt(this.state.BedroomsCount),
            "fireplace-exist":this.state.fireplaceExists,
            "has-garden":this.state.hasGarden,
            "has-swimming-pool":this.state.hasSwimmingPool,
            "has-terrace":this.state.hasTerrace,
            "facade-count":parseInt(this.state.facadeCount),
            "outside-space":parseFloat(this.state.outsideSpace),
            "land-surface":parseFloat(this.state.landSurface),
            "has-fully-equipped-kitchen": this.state.hasFullyEquippedKitchen
            }})
            .then(response =>{
                console.log(response.data.prediction)
                this.setState({prediction: response.data.prediction})
            })
            .catch((error) => {
                console.log(error)
            })
        }
        areaChange(event) {
            this.setState({area: event.target.value})
        }
        postalCodeChange(event) {
            this.setState({postalCode: event.target.value})
        }
        subtypePropertyChange(event) {
            this.setState({subtypeProperty: event.target.value})
        }
        buildingConditionChange(event) {
            this.setState({buildingCondition: event.target.value})
        }
        BedroomsCountChange(event) {
            this.setState({BedroomsCount: event.target.value})
        }
        fireplaceExistsChange(event) {
            this.setState({fireplaceExists: event.target.value})
        }
        hasGardenChange(event) {
            this.setState({hasGarden: event.target.value})
        }
        hasSwimmingPoolChange(event) {
            this.setState({hasSwimmingPool: event.target.value})
        }
        hasTerraceChange(event) {
            this.setState({hasTerrace: event.target.value})
        }
        facadeCountChange(event) {
            this.setState({facadeCount: event.target.value})
        }
        outsideSpaceChange(event) {
            this.setState({outsideSpace: event.target.value})
        }
        landSurfaceChange(event) {
            this.setState({landSurface: event.target.value})
        }
        hasFullyEquippedKitchenChange(event) {
            this.setState({hasFullyEquippedKitchen: event.target.value})
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
                    <h1>FORM</h1>
                        <form method='POST' onSubmit={this.handleSubmit}>
                        <input type="number" placeholder="Area" onChange={this.areaChange}/>
                        <input type="number" placeholder="Postal Code" onChange={this.postalCodeChange}/>
                        <select onChange={this.subtypePropertyChange}>
                            <option value="APARTMENT">APARTMENT</option>
                            <option value="HOUSE">HOUSE</option>
                            <option value="MANSION">MANSION</option>
                            <option value="VILLA">VILLA</option>
                            <option value="STUDIO">STUDIO</option>
                            <option value="HOUSE_GROUP">HOUSE GROUP</option>
                            <option value="EXCEPTIONAL_PROPERTY">EXCEPTIONAL PROPERTY</option>
                            <option value="MIXED_USE_BUILDING">MIXED USE BUILDING</option>
                            <option value="APARTMENT_BLOCK">APARTMENT BLOCK</option>
                            <option value="BUNGALOW">BUNGALOW</option>
                            <option value="CASTLE">CASTLE</option>
                            <option value="COUNTRY_HOUSE">COUNTRY HOUSE</option>
                            <option value="TOWN_HOUSE">TOWN HOUSE</option>
                            <option value="MANOR_HOUSE">MANOR HOUSE</option>
                            <option value="GROUND_FLOOR">GROUND FLOOR</option>
                            <option value="PENTHOUSE">PENTHOUSE</option>
                            <option value="KOT">KOT</option>
                            <option value="CHALET">CHALET</option>
                            <option value="FARMHOUSE">FARMHOUSE</option>
                            <option value="PAVILION">PAVILION</option>
                            <option value="DUPLEX">DUPLEX</option>
                            <option value="LOFT">LOFT</option>
                            <option value="SERVICE_FLAT">SERVICE FLAT</option>
                            <option value="TRIPLEX">TRIPLEX</option>
                        </select>
                        <select onChange={this.buildingConditionChange}>
                            <option value="AS_NEW">AS NEW</option>
                            <option value="GOOD">GOOD</option>
                            <option value="TO_RENOVATE">TO RENOVATE</option>
                            <option value="JUST_RENOVATED">JUST RENOVATED</option>
                            <option value="TO_BE_DONE_UP">TO BE DONE UP</option>
                            <option value="TO_RESTORE">TO RESTORE</option>
                        </select>
                        <label>Bedrooms:</label>
                        <select onChange={this.BedroomsCountChange}>
                                <option value="0"> 0 </option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                                <option value="6"> 6 </option>
                                <option value="7"> 7 </option>
                                <option value="8"> 8 </option>
                                <option value="9"> 9 </option>
                                <option value="10"> 10 </option>
                        </select>

                        <input type="number" placeholder="Facade Count" onChange={this.facadeCountChange}/>
                        <input type="number" placeholder="Outside Space" onChange={this.outsideSpaceChange}/>
                        <input type="number" placeholder="Land Surface" onChange={this.landSurfaceChange}/>

                        <input type="submit" />
                    </form>
                    {button}
                </div>  
        );
    }
}