import React from 'react';

//Helmets
const helmetOne = {
    name: 'Veil of Steel',
    armor: 21,
    MagicProps: null,
    rarity: 'Common'
}

const helmetTwo = {
    name: 'Leather Hood',
    armor: 22,
    MagicProps: null,
    rarity: 'Magical'
}

const helmetThree = {
    name: 'Prides Fall',
    armor: 38,
    MagicProps: null,
    rarity: 'Legendary'
}

const helmetFour = {
    name: 'Chain Hood',
    armor: 72,
    MagicProps: null,
    rarity: 'Rare'
}

//Shoulders
const shouldersOne = {
    name: 'Pauldrons of the Skeleton King',
    armor: 58,
    MagicProps: null,
    rarity: 'Legendary'
}

const shouldersTwo = {
    name: 'Shoulder Gaurds',
    armor: 48,
    MagicProps: null,
    rarity: 'Common'
}

const shouldersThree = {
    name: 'Razeths Volition',
    armor: 68,
    MagicProps: null,
    rarity: 'Legendary'
}

const shouldersFour = {
    name: 'Borns Impunity',
    armor: 62,
    MagicProps: null,
    rarity: 'Set Item'
}

//Torso
const torsoOne = {
    name: 'Cloth Tunic',
    armor: 3,
    MagicProps: null,
    rarity: 'Common'
}

const torsoTwo = {
    name: 'Leather Doublet',
    armor: 18,
    MagicProps: null,
    rarity: 'Common'
}

const torsoThree = {
    name: 'Hide Tunic',
    armor: 27,
    MagicProps: null,
    rarity: 'Magical'
}

const torsoFour = {
    name: 'Aquila Cuirass',
    armor: 68,
    MagicProps: null,
    rarity: 'Legendary'
}

//Cloaks
const cloakOne = {
    name: 'Common Cape',
    armor: 60,
    MagicProps: null,
    rarity: 'Common'
}

const cloakTwo = {
    name: 'Tabard',
    armor: 84,
    MagicProps: null,
    rarity: 'Common'
}

const cloakThree = {
    name: 'Cloak of Deception',
    armor: 35,
    MagicProps: null,
    rarity: 'Legendary'
}

const cloakFour = {
    name: 'Beckon Sail',
    armor: 217,
    MagicProps: null,
    rarity: 'Legendary'
}

//Wrists
const wristOne = {
    name: 'Bracers',
    armor: 9,
    MagicProps: null,
    rarity: 'Common'
}

const wristTwo = {
    name: 'Leather Cuffs',
    armor: 16,
    MagicProps: null,
    rarity: 'Common'
}

const wristThree = {
    name: 'Vambraces',
    armor: 33,
    MagicProps: null,
    rarity: 'Rare'
}

const wristFour = {
    name: 'Aughilds Ultimatum',
    armor: 102,
    MagicProps: null,
    rarity: 'Set Braces'
}

//Hands
const handsOne = {
    name: 'Leather Gloves',
    armor: 16,
    MagicProps: null,
    rarity: 'Common'
}

const handsTwo = {
    name: 'Hide Gloves',
    armor: 32,
    MagicProps: null,
    rarity: 'Magic'
}

const handsThree = {
    name: 'Gloves of Worship',
    armor: 55,
    MagicProps: null,
    rarity: 'Legendary'
}

const handsFour = {
    name: 'Plated Gauntlets',
    armor: 87,
    MagicProps: null,
    rarity: 'Rare'
}

//Waist
const waistOne = {
    name: 'Sash',
    armor: 6,
    MagicProps: null,
    rarity: 'Common'
}

const waistTwo = {
    name: 'Hide Belt',
    armor: 16,
    MagicProps: null,
    rarity: 'Magic'
}

const waistThree = {
    name: 'Saffron Wrap',
    armor: 127,
    MagicProps: null,
    rarity: 'Legendary'
}

const waistFour = {
    name: 'Hellcat WaistGaurd',
    armor: 265,
    MagicProps: null,
    rarity: 'Legendary'
}

//Legs
const legsOne = {
    name: 'Cloth Pants',
    armor: 6,
    MagicProps: null,
    rarity: 'Common'
}

const legsTwo = {
    name: 'Rough Hide Leggings',
    armor: 27,
    MagicProps: null,
    rarity: 'Magic'
}

const legsThree = {
    name: 'Plate Leggings',
    armor: 101,
    MagicProps: null,
    rarity: 'Rare'
}

const legsFour = {
    name: 'Chausses',
    armor: 191,
    MagicProps: null,
    rarity: 'Rare'
}

//Feet
const feetOne = {
    name: 'Shoes',
    armor: 7,
    MagicProps: null,
    rarity: 'Common'
}

const feetTwo = {
    name: 'Boots',
    armor: 18,
    MagicProps: null,
    rarity: 'Magic'
}

const feetThree = {
    name: 'Lut Socks',
    armor: 57,
    MagicProps: null,
    rarity: 'Legendary'
}

const feetFour = {
    name: 'Silk Shoes',
    armor: 106,
    MagicProps: null,
    rarity: 'Rare'
}

//Inventory Lists

function AvailableItems (){
    return(
        <ul>
            <h1> Inventory: </h1>
            <h1>Helmets</h1>
            <li>{helmetOne.name}<button>Equip Item</button></li>
            <li>{helmetTwo.name}<button>Equip Item</button></li>
            <li>{helmetThree.name}<button>Equip Item</button></li>
            <li>{helmetFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Shoulders</h1>
            <li>{shouldersOne.name}<button>Equip Item</button></li>
            <li>{shouldersTwo.name}<button>Equip Item</button></li>
            <li>{shouldersThree.name}<button>Equip Item</button></li>
            <li>{shouldersFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Chest Peices</h1>
            <li>{torsoOne.name}<button>Equip Item</button></li>
            <li>{torsoTwo.name}<button>Equip Item</button></li>
            <li>{torsoThree.name}<button>Equip Item</button></li>
            <li>{torsoFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Cloaks</h1>
            <li>{cloakOne.name}<button>Equip Item</button></li>
            <li>{cloakTwo.name}<button>Equip Item</button></li>
            <li>{cloakThree.name}<button>Equip Item</button></li>
            <li>{cloakFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Gauntlets</h1>
            <li>{wristOne.name}<button>Equip Item</button></li>
            <li>{wristTwo.name}<button>Equip Item</button></li>
            <li>{wristThree.name}<button>Equip Item</button></li>
            <li>{wristFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Gloves</h1>
            <li>{handsOne.name}<button>Equip Item</button></li>
            <li>{handsTwo.name}<button>Equip Item</button></li>
            <li>{handsThree.name}<button>Equip Item</button></li>
            <li>{handsFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Belts</h1>
            <li>{waistOne.name}<button>Equip Item</button></li>
            <li>{waistTwo.name}<button>Equip Item</button></li>
            <li>{waistThree.name}<button>Equip Item</button></li>
            <li>{waistFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Pants</h1>
            <li>{legsOne.name}<button>Equip Item</button></li>
            <li>{legsTwo.name}<button>Equip Item</button></li>
            <li>{legsThree.name}<button>Equip Item</button></li>
            <li>{legsFour.name}<button>Equip Item</button></li>
            <br />
            <h1>Shoes</h1>
            <li>{feetOne.name + ": +" +feetOne.armor + " Armor"}<br /><button>Equip Item</button></li>
            <li>{feetTwo.name}<button>Equip Item</button></li>
            <li>{feetThree.name}<button>Equip Item</button></li>
            <li>{feetFour.name}<button>Equip Item</button></li>
        </ul>
    )
}

export default AvailableItems;