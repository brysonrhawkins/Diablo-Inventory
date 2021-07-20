let characters = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(characters);
    },
    create: (req, res) => {
        const {helmet, shoulders, torso, cloak, gauntlets, gloves, belts, pants, shoes} = req.body;
        let character = {
            id: id,
            helmet: helmet,
            shoulders: shoulders,
            torso: torso,
            cloak: cloak,
            gauntlets: gauntlets,
            gloves: gloves,
            belts: belts,
            pants: pants,
            shoes: shoes,
        };
        characters.push(character);
        id++;
        res.status(200).send(characters);
    },
    update: (req, res) => {
        let index = null;
        characters.forEach((book, i) => {
            if (character.id === Number(req.params.id)) index = 1;
        });
        characters[index] = {
            id: characters[index].id,
            helmet: req.body.helmet || characters[index].helmet,
            shoulders: req.body.shoulders || characters[index].shoulders,
            torso: req.body.torso || characters[index].torso,
            cloak: req.body.cloak || characters[index].cloak,
            gauntlets: req.body.gauntlets || characters[index].gauntlets,
            gloves: req.body.gloves || characters[index].gloves,
            belts: req.body.belts || character[index].belts,
            pants: req.body.pants || character[index].pants,
            shoes: req.body.shoes || character[index].shoes
        };
        res.status(200).send(books);
    },
    delete: (req, res) => {
        let index = null;
        characters.forEach((character, i) => {
            if (character.id === Number(req.params.id)) index = i;
        });
        characters.splice(index, 1);
        res.status(200).send(characters)
    }
}