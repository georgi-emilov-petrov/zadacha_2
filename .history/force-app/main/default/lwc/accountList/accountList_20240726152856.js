import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/accountListController.getAccounts";

const COLUMNS = [
        { label: 'First Name', fieldName:'FirstName__c', type:'text'}
    ];

export default class AccountList extends LightningElement {
    accountsExist = false;
    accounts = [];
    columns = COLUMNS;

    connectedCallback() {
        this.loadAccounts();
    }

    loadAccounts() {
        getAccounts()
            .then((result) => {
                this.accountsExist = true;
                this.accounts = result.accountsArray;
                console.log("Accounts: " + JSON.stringify(this.accounts));
            })
            .catch((error) => {
                console.error("Error: " + error);
            });
    }
}
