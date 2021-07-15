import React from 'react';
import CharacterEquiped from './blankInventory';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      armor: 0,
      helmet: 'Empty',
      shoulders: 'Empty',
      torso: 'Empty',
      cloak: 'Empty',
      gauntlets: 'Empty',
      gloves: 'Empty',
      belts: 'Empty',
      pants: 'Empty',
      shoes: 'Empty'
    }

    //{bindings}
    //{Helmets}
    this.equipHelmetOne = this.equipHelmetOne.bind(this)
    this.equipHelmetTwo = this.equipHelmetTwo.bind(this)
    this.equipHelmetThree = this.equipHelmetThree.bind(this)
    this.equipHelmetFour = this.equipHelmetFour.bind(this)
    //{Shoulders}
    this.equipShouldersOne = this.equipShouldersOne.bind(this)
    this.equipShouldersTwo = this.equipShouldersTwo.bind(this)
    this.equipShouldersThree = this.equipShouldersThree.bind(this)
    this.equipShouldersFour = this.equipShouldersFour.bind(this)
    //{Chest}
    this.equipTorsoOne = this.equipTorsoOne.bind(this)
    this.equipTorsoTwo = this.equipTorsoTwo.bind(this)
    this.equipTorsoThree = this.equipTorsoThree.bind(this)
    this.equipTorsoFour = this.equipTorsoFour.bind(this)
    //{Cloak}
    this.equipCloakOne = this.equipCloakOne.bind(this)
    this.equipCloakTwo = this.equipCloakTwo.bind(this)
    this.equipCloakThree = this.equipCloakThree.bind(this)
    this.equipCloakFour = this.equipCloakFour.bind(this)
    //{Gauntlet}
    this.equipGauntletOne = this.equipGauntletOne.bind(this)
    this.equipGauntletTwo = this.equipGauntletTwo.bind(this)
    this.equipGauntletThree = this.equipGauntletThree.bind(this)
    this.equipGauntletFour = this.equipGauntletFour.bind(this)
    //{Gloves}
    this.equipGlovesOne = this.equipGlovesOne.bind(this)
    this.equipGlovesTwo = this.equipGlovesTwo.bind(this)
    this.equipGlovesThree = this.equipGlovesThree.bind(this)
    this.equipGlovesFour = this.equipGlovesFour.bind(this)
    //{Belts}
    this.equipBeltsOne = this.equipBeltsOne.bind(this)
    this.equipBeltsTwo = this.equipBeltsTwo.bind(this)
    this.equipBeltsThree = this.equipBeltsThree.bind(this)
    this.equipBeltsFour = this.equipBeltsFour.bind(this)
    //{Pants}
    this.equipPantsOne = this.equipPantsOne.bind(this)
    this.equipPantsTwo = this.equipPantsTwo.bind(this)
    this.equipPantsThree = this.equipPantsThree.bind(this)
    this.equipPantsFour = this.equipPantsFour.bind(this)
    //{Shoes}
    this.equipShoesOne = this.equipShoesOne.bind(this)
    this.equipShoesTwo = this.equipShoesTwo.bind(this)
    this.equipShoesThree = this.equipShoesThree.bind(this)
    this.equipShoesFour = this.equipShoesFour.bind(this)
    //{Resets}
    this.resetInventory = this.resetInventory.bind(this)
  }

  //{helmet equips}
  equipHelmetOne() {
    this.setState({
      helmet: 'Veil of Steel'
    })
  }
  equipHelmetTwo() {
    this.setState({
      helmet: 'Leather Hood'
    })
  }
  equipHelmetThree() {
    this.setState({
      helmet: 'Prides Fall'
    })
  }
  equipHelmetFour() {
    this.setState({
      helmet: 'Chain Hood'
    })
  }
  //{Shoulder Equips}
  equipShouldersOne() {
    this.setState({
      shoulders: 'Pauldrons of the Skeleton King'
    })
  }
  equipShouldersTwo() {
    this.setState({
      shoulders: 'Shoulder Gaurds'
    })
  }
  equipShouldersThree() {
    this.setState({
      shoulders: 'Razeths Volition'
    })
  }
  equipShouldersFour() {
    this.setState({
      shoulders: 'Borns Impunity'
    })
  }
  //{Torso Equips}
  equipTorsoOne() {
    this.setState({
      torso: 'Cloth Tunic'
    })
  }
  equipTorsoTwo() {
    this.setState({
      torso: 'Leather Doublet'
    })
  }
  equipTorsoThree() {
    this.setState({
      torso: 'Hide Tunic'
    })
  }
  equipTorsoFour() {
    this.setState({
      torso: 'Aquila Cuirass'
    })
  }
  //{Cloak Equips}
  equipCloakOne() {
    this.setState({
      cloak: 'Common Cape'
    })
  }
  equipCloakTwo() {
    this.setState({
      cloak: 'Tabard'
    })
  }
  equipCloakThree() {
    this.setState({
      cloak: 'Cloak of Deception'
    })
  }
  equipCloakFour() {
    this.setState({
      cloak: 'Beckon Sail'
    })
  }
  //{Wrist Equips}
  equipGauntletOne() {
    this.setState({
      gauntlets: 'Bracers'
    })
  }
  equipGauntletTwo() {
    this.setState({
      gauntlets: 'Leather Cuffs'
    })
  }
  equipGauntletThree() {
    this.setState({
      gauntlets: 'Vambraces'
    })
  }
  equipGauntletFour() {
    this.setState({
      gauntlets: 'Aughilds Ultimatum'
    })
  }
  //{gloves}
  equipGlovesOne() {
    this.setState({
      gloves: 'Leather Gloves'
    })
  }
  equipGlovesTwo() {
    this.setState({
      gloves: 'Hide Gloves'
    })
  }
  equipGlovesThree() {
    this.setState({
      gloves: 'Gloves of Worship'
    })
  }
  equipGlovesFour() {
    this.setState({
      gloves: 'Plated Gauntlets'
    })
  }
  //{belts}
  equipBeltsOne() {
    this.setState({
      belts: 'Sash'
    })
  }
  equipBeltsTwo() {
    this.setState({
      belts: 'Hide Belt'
    })
  }
  equipBeltsThree() {
    this.setState({
      belts: 'Saffron Wrap'
    })
  }
  equipBeltsFour() {
    this.setState({
      belts: 'Hellcat WaistGaurd'
    })
  }
  //{pants}
  equipPantsOne() {
    this.setState({
      pants: 'Cloth Pants'
    })
  }
  equipPantsTwo() {
    this.setState({
      pants: 'Rough Hide Leggings'
    })
  }
  equipPantsThree() {
    this.setState({
      pants: 'Plate Leggings'
    })
  }
  equipPantsFour() {
    this.setState({
      pants: 'Chausses'
    })
  }
  //{shoes}
  equipShoesOne() {
    this.setState({
      shoes: 'Shoes'
    })
  }
  equipShoesTwo() {
    this.setState({
      shoes: 'Boots'
    })
  }
  equipShoesThree() {
    this.setState({
      shoes: 'Lut Socks'
    })
  }
  equipShoesFour() {
    this.setState({
      shoes: 'Silk Shoes'
    })
  }
  //{Resets}
  resetInventory() {
    this.setState({
      armor: 0,
      helmet: 'Empty',
      shoulders: 'Empty',
      torso: 'Empty',
      cloak: 'Empty',
      gauntlets: 'Empty',
      gloves: 'Empty',
      belts: 'Empty',
      pants: 'Empty',
      shoes: 'Empty'
    })
  }

  render() {
    return (
      <div>
        <CharacterEquiped
        //{Current Inventory State}
        helmet={this.state.helmet}
        shoulders={this.state.shoulders}
        torso={this.state.torso}
        cloak={this.state.cloak}
        gauntlets={this.state.gauntlets}
        gloves={this.state.gloves}
        belts={this.state.belts}
        pants={this.state.pants}
        shoes={this.state.shoes}
        //{Equip Buttons}
        //{Helmets}
        equipHelmetOne={this.equipHelmetOne} equipHelmetTwo={this.equipHelmetTwo} equipHelmetThree={this.equipHelmetThree} equipHelmetFour={this.equipHelmetFour}
        //{Shoulders}
        equipShouldersOne={this.equipShouldersOne} equipShouldersTwo={this.equipShouldersTwo} equipShouldersThree={this.equipShouldersThree} equipShouldersFour={this.equipShouldersFour}
        //{Torso}
        equipTorsoOne={this.equipTorsoOne} equipTorsoTwo={this.equipTorsoTwo} equipTorsoThree={this.equipTorsoThree} equipTorsoFour={this.equipTorsoFour}
        //{Cloak}
        equipCloakOne={this.equipCloakOne} equipCloakTwo={this.equipCloakTwo} equipCloakThree={this.equipCloakThree} equipCloakFour={this.equipCloakFour}
        //{Gauntlet}
        equipGauntletOne={this.equipGauntletOne} equipGauntletTwo={this.equipGauntletTwo} equipGauntletThree={this.equipGauntletThree} equipGauntletFour={this.equipGauntletFour}
        //{Gloves}
        equipGlovesOne={this.equipGlovesOne} equipGlovesTwo={this.equipGlovesTwo} equipGlovesThree={this.equipGlovesThree} equipGlovesFour={this.equipGlovesFour}
        //{Belts}
        equipBeltsOne={this.equipBeltsOne} equipBeltsTwo={this.equipBeltsTwo} equipBeltsThree={this.equipBeltsThree} equipBeltsFour={this.equipBeltsFour}
        //{Pants}
        equipPantsOne={this.equipPantsOne} equipPantsTwo={this.equipPantsTwo} equipPantsThree={this.equipPantsThree} equipPantsFour={this.equipPantsFour}
        //{Shoes}
        equipShoesOne={this.equipShoesOne} equipShoesTwo={this.equipShoesTwo} equipShoesThree={this.equipShoesThree} equipShoesFour={this.equipShoesFour}
        //{Resets}
        resetInventory={this.resetInventory} />
      </div>
    )
  }


}

export default App;