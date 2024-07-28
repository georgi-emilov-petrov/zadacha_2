import { LightningElement } from "lwc";

export default class AccountForm extends LightningElement {
    firstName = "";
    lastName = "";
    email = "";
    phone = "";

    handleInputChange(event) {
        const field = event.target.dataset.id;
        console.log("field: " + field);
        if (field == "firstName") {
            this.firstName = event.target.value;
            console.log("First Name: " + this.firstName);
        } else if (field == "lastName") {
            this.lastName = event.target.value;
            console.log("Last Name: " + this.lastName);
        } else if (field == "email") {
            this.email == event.target.value;
            console.log("Email: " + this.email);
        } else if (field == "phone") {
            this.phone = event.target.value;
            console.log("Phone: " + this.phone);
        }
    }
}
