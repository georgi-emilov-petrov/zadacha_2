import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/accountListController.getAccounts";

export default class AccountList extends LightningElement {
    accountsExist = false;
    accounts = [];

    connectedCallback() {
        loadAccounts();
    }

    loadAccounts() {
        getAccounts()
            .then((result) => {
                this.accountsExist = true;
                this.accounts = result.accountsArray;
                console.log("Accounts: " + this.accounts);
            })
            .catch((error) => {
                console.error("Error: " + error);
            });
    }
}
