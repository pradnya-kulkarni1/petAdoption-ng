import { Customer } from "./customer";
import { ReferenceBackground } from "./reference-background";
import { ReferencePersonal } from "./reference-personal";
import { User } from "./user";

export class AdoptionRequest {
    id: number;
    user: User;
    customer: Customer;
    referencePersonal: ReferencePersonal;
    referenceBackground: ReferenceBackground;
    submittedDate: Date;
    status: string;
    rejectionReason: string;
    referenceCheck: boolean;
    backgroundCheck: boolean;

    constructor(id: 0, user= new User(), customer= new Customer(), 
                referencePersonal= new ReferencePersonal(),
                referenceBackground = new ReferenceBackground(),
                submittedDate = new Date(), status = '',
                rejectionReason = '', referenceCheck = false,
                backgroundCheck = false 
        ){
            this.id = id;
            this.user = user;
            this.customer = customer;
            this.referencePersonal = referencePersonal;
            this.referenceBackground = referenceBackground;
            this.submittedDate = submittedDate;
            this.status = status;
            this.rejectionReason = rejectionReason;
            this.referenceCheck = referenceCheck;
            this.backgroundCheck = backgroundCheck;
        }
}
/*
create table adoptionRequest(
id				int primary key identity(1,1),
userId			int not null Constraint fk_adoptionRequest_user References [User](id),
customerId		int not null Constraint fk_adoptionRequest_customer References customer (id),
referencePId	int not null constraint fk_adoptionRequest_referenceP References referencePersonal(id),
referenceBId	int not null constraint fk_adoptionRequest_referenceB references referenceBackground(id),
submittedDate	Date not null default Getdate(),
status			varchar(10) not null default 'REVIEW',
rejectionReason varchar(50),
referenceCheck	bit not null,
backgroundCheck	bit not null
);
*/