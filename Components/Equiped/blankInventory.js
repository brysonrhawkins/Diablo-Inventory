import React from 'react';

class CharacterEquiped extends React.Component {
    render() {
      return (
          <div className='whole-app'>
            <ul>
            <div class="dropdown">
  <button class="dropbtn">Currently Equiped</button>
  <div class="dropdown-content">
    <a>Helmet: {this.props.helmet}</a>
    <a >Shoulders: {this.props.shoulders}</a>
    <a>Chest: {this.props.torso}</a>
    <a>Cloak: {this.props.cloak}</a>
    <a>Gauntlets: {this.props.gauntlets}</a>
    <a>Gloves: {this.props.gloves}</a>
    <a>Belts: {this.props.belts}</a>
    <a>Pants: {this.props.pants}</a>
    <a>Shoes: {this.props.shoes}</a>
    <button onClick={this.props.resetInventory}>Un-Equip All</button>
  </div>
</div>
        </ul>
          <ul className='ItemsList'>
            <div className='ColumnOne'>
              <h1>Helmets: </h1>
              <li>Veil of Steel<button onClick={this.props.equipHelmetOne}>Equip</button></li>
              <li>Leather Hood<button onClick={this.props.equipHelmetTwo}>Equip</button></li>
              <li>Prides Fall<button onClick={this.props.equipHelmetThree}>Equip</button></li>
              <li>Chain Hood<button onClick={this.props.equipHelmetFour}>Equip</button></li>
              <br />
              <h1>Shoulders: </h1>
              <li>Pauldrons of the Skeleton King<button onClick={this.props.equipShouldersOne}>Equip</button></li>
              <li>Shoulder Gaurds<button onClick={this.props.equipShouldersTwo}>Equip</button></li>
              <li>Razeths Volition<button onClick={this.props.equipShouldersThree}>Equip</button></li>
              <li>Borns Impunity<button onClick={this.props.equipShouldersFour}>Equip</button></li>
              <br />
              <h1>Chest Pieces:  </h1>
              <li>Cloth Tunic<button onClick={this.props.equipTorsoOne}>Equip</button></li>
              <li>Leather Doublet<button onClick={this.props.equipTorsoTwo}>Equip</button></li>
              <li>Hide Tunic<button onClick={this.props.equipTorsoThree}>Equip</button></li>
              <li>Aquila Cuirass<button onClick={this.props.equipTorsoFour}>Equip</button></li>
              <br/>
              </div><div className='ColumnTwo'>
              <h1>Cloaks:  </h1>
              <li>Common Cape<button onClick={this.props.equipCloakOne}>Equip</button></li>
              <li>Tabbard<button onClick={this.props.equipCloakTwo}>Equip</button></li>
              <li>Cloak of Deception <button onClick={this.props.equipCloakThree}>Equip</button></li>
              <li>Beckon Sail<button onClick={this.props.equipCloakFour}>Equip</button></li>
              <br/>
              <h1>Gauntlets: </h1>
              <li>Bracers<button onClick={this.props.equipGauntletOne}>Equip</button></li>
              <li>Leather Cuffs<button onClick={this.props.equipGauntletTwo}>Equip</button></li>
              <li>Vambraces<button onClick={this.props.equipGauntletThree}>Equip</button></li>
              <li>Aughilds Ultimatum<button onClick={this.props.equipGauntletFour}>Equip</button></li>
              <br/>
              <h1>Gloves:  </h1>
              <li>Leather Gloves<button onClick={this.props.equipGlovesOne}>Equip</button></li>
              <li>Hide Gloves<button onClick={this.props.equipGlovesTwo}>Equip</button></li>
              <li>Gloves of Worship<button onClick={this.props.equipGlovesThree}>Equip</button></li>
              <li>Plated Gauntlets<button onClick={this.props.equipGlovesFour}>Equip</button></li>
              <br/></div><div className='ColumnThree'>
              <h1>Belts:  </h1>
              <li>Sash<button onClick={this.props.equipBeltsOne}>Equip</button></li>
              <li>Hide Belt<button onClick={this.props.equipBeltsTwo}>Equip</button></li>
              <li>Saffron Wrap<button onClick={this.props.equipBeltsThree}>Equip</button></li>
              <li>Hellcat WaistGaurd<button onClick={this.props.equipBeltsFour}>Equip</button></li>
              <br/>
              <h1>Pants:  </h1>
              <li>Cloth Pants<button onClick={this.props.equipPantsOne}>Equip</button></li>
              <li>Rough Hide Leggings<button onClick={this.props.equipPantsTwo}>Equip</button></li>
              <li>Plate Leggings<button onClick={this.props.equipPantsThree}>Equip</button></li>
              <li>Chausses<button onClick={this.props.equipPantsFour}>Equip</button></li>
              <br/>
              <h1>Shoes:  </h1>
              <li>Shoes<button onClick={this.props.equipShoesOne}>Equip</button></li>
              <li>Boots<button onClick={this.props.equipShoesTwo}>Equip</button></li>
              <li>Lut Socks<button onClick={this.props.equipShoesThree}>Equip</button></li>
              <li>Silk Shoes<button onClick={this.props.equipShoesFour}>Equip</button></li>
              </div>
          </ul>
        </div>
      )
    }
  }
  
  export default CharacterEquiped

  