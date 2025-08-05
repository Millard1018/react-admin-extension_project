export class UserData {
    #transactionNo
    #name
    #id
    #benefit
    #date
    #status
    #birthday
    #address
    #contact
    #disability
    #type
    #amount
    constructor(transactionNo, name, id, benefit, date, status, birthday, address, contact, disability, type, amount) {
        this.#transactionNo = transactionNo;
        this.#name = name;
        this.#id = id;
        this.#benefit = benefit;
        this.#date = date;
        this.#status = status;
        this.#birthday = birthday;
        this.#address = address
        this.#contact = contact;
        this.#disability = disability;
        this.#type = type;
        this.#amount = amount;
    }

    getTransactionNo() {
        return this.#transactionNo
    }

    getName() {
        return this.#name;
    }

    getID() {
        return this.#id;
    }

    getBenefit() {
        return this.#benefit
    }

    getDate() {
        return this.#date
    }

    getStatus() {
        return this.#status
    }

    getBirthday() {
        return this.#birthday
    }

    getAddress() {
        return this.#address
    }

    getContact() {
        return this.#contact
    }

    getDisability() {
        return this.#disability
    }

    getType() {
        return this.#type
    }

    getAmount() {
        return this.#amount
    }


    //setters
    setTransactionNo(value) { 
        this.#transactionNo = value; 
    }

    setName(value) { 
        this.#name = value; 
    }

    setID(value) { 
        this.#id = value; 
    }

    setBenefit(value) { 
        this.#benefit = value;
    }

    setDate(value) { 
        this.#date = value; 
    }

    setStatus(value) { 
        this.#status = value; 
    }

    setBirthday(value) { 
        this.#birthday = value; 
    }

    setAddress(value) { 
        this.#address = value; 
    }

    setContact(value) { 
        this.#contact = value;
    }

    setDisability(value) { 
        this.#disability = value; 
    }

    setType(value) { 
        this.#type = value; 
    }

    setAmount(value) { 
        this.#amount = value; 
    }
}