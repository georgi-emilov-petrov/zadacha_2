import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/accountListController.getAccounts";
import deleteAccount from "@salesforce/apex/accountListController.deleteAccount";

const COLUMNS = [
    { label: "First Name", fieldName: "FirstName__c", type: "text" },
    { label: "Last Name", fieldName: "LastName__c", type: "text" },
    { label: "Email", fieldName: "Email__c", type: "email" },
    { label: "Phone", fieldName: "Phone", type: "phone" },
    {
        type: "button",
        typeAttributes: {
            label: "Delete",
            name: "delete",
            title: "Delete",
            iconName: "utility:delete",
            variant: "destructive"
        }
    }
];

export default class AccountList extends LightningElement {
    accountsExist = false;
    accounts = [];
    columns = COLUMNS;
    showModal = false;

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

    handleShowModal() {
        this.showModal = true;
    }

    handleCloseModal() {
        this.showModal = false;
        this.loadAccounts();
    }
}
