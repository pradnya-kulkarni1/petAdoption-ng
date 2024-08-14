export class Customer {
    id: number;
    firstname: string;
    lastname: string;
    address :string;
    city: string;
    state: string;
    zip: string;

    constructor(id = 0, firstname = '', lastname = '', address= '', city = '',
        state = '', zip= ''){
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
        }

}
