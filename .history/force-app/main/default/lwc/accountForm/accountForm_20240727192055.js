import { LightningElement } from 'lwc';

export default class AccountForm extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    phone = '';

    handleInputChange(event){
        const field = event.target.dataset.id;
        console.log('field: ' + field);
        // this.firstName = event.target.value;
        // console.log("First Name: " + this.firstName);
    }



}