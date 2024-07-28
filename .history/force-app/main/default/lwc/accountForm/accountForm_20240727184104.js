import { LightningElement } from 'lwc';

export default class AccountForm extends LightningElement {
    firstName = '';

    handleInputChange(event){

        this.firstName = event.target.value;
        console.log("First Name: " + this.firstName);
    }



}