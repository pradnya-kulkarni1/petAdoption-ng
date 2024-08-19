import { AdoptionRequest } from "./adoption-request";
import { Pet } from "./pet";

export class Adoption {
    id: number;
    adoptionRequest: AdoptionRequest;
    pet:Pet;
    adoptionCompletedDate: Date;
    paymentDone:boolean;
    paperworkDone: boolean;

    constructor(id = 0, adoptionRequest = new AdoptionRequest(0), pet = new Pet(), 
adoptionCompletedDate = new Date(), paymentDone = false,paperworkDone = false ){

    this.id = id;
    this.adoptionRequest = adoptionRequest;
    this.pet = pet;
    this.adoptionCompletedDate = adoptionCompletedDate;
    this.paymentDone = paymentDone;
    this.paperworkDone = paperworkDone;

}
}
/*
create table adoption(
id						int primary key identity(1,1),
adoptRequestId			int not null constraint fk_adoptionRequest_adoption references adoptionRequest(id),
petId					int not null constraint fk_adoption_pet references pet(id),
adoptionCompletedDate	date,
paymentDone				bit not null,
paperworkDone			bit not null
);
*/