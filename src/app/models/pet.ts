import { Breed } from "./breed";

export class Pet {
    id: number;
    breed: Breed;
    name: string;
    birthyear: number;
    birthmonth: number;
    photoPath: string;
    available: boolean;

    constructor(id = 0, breed = new Breed(), name = '', birthyear = 0, birthmonth = 0, 
photoPath = '', available = false){
    this.id = id;
    this.breed = breed;
    this.name = name;
    this.birthyear = birthyear;
    this.birthmonth = birthmonth;
    this.photoPath = photoPath;
    this.available = available;

}
}
