import React, { Component } from 'react';

class ArmorRating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            armor: 50
        }
    }

    handleUpdateArmor(event){
        this.state({
            armor: event.target.value
        })
    }

    


    render() {
        return(
            <div className='ArmorRating'>
                <h1>Armor Rating: {this.state.armor}</h1>
                <div className="ColorBox"><h1>     .    </h1></div>
            </div>
        )
    }
}

export default ArmorRating;