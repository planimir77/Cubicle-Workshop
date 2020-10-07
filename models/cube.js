const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
const database = path.join(__dirname, '../config/database.json');

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name || "No name";
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty || 0;

    }
    
    // saveCube
    save () {
        const entity = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        };

        fs.readFile(database, (error, data)=>{
            if (error) throw error;

            const cubes = JSON.parse(data);
            cubes.push(entity);

            fs.writeFile(database, JSON.stringify(cubes), error => {
                if (error){
                    throw error;
                }
    
                console.log("New cube is created");
            });
        })
        
    }
}

module.exports = Cube;