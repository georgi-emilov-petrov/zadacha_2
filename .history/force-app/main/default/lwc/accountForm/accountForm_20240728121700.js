import { LightningElement } from "lwc";
import createAccount from "@salesforce/apex/accountFormController.createAccount";

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
        } else if (field == "lastName") {
            this.lastName = event.target.value;
        } else if (field == "email") {
            this.email = event.target.value;
        } else if (field == "phone") {
            this.phone = event.target.value;
        }
    }

    handleSave(){
        const accountData = {
            account : {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone
            }
        }

        createAccount({accountJSON: JSON.stringify(accountData)})
            .then((result) => {
                console.log("result: " + JSON.stringify(result));
            })
            .catch((error) => {
                console.error("error: " + JSON.stringify(error));
    }

    handleCancel() {
        this.dispatchEvent(new CustomEvent('close')),
    }
}
