import { LightningElement } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountCtrl.searchAccounts';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text", sortable: true},
    {label: "Type", fieldName: "Type", type: "text", sortable: true},
    {label: "Industry", fieldName: "Industry", type: "text", sortable: true},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency", sortable: true},
    {label: "Account Number", fieldName: "AccountNumber", type: "text", sortable: true}
];

export default class P2cParentAction extends LightningElement {
    searchKey;
    accounts;
    columns = COLUMNS;

    searchHandler(event) {
        this.searchKey = event.target.value;
        searchAccounts({searchKey: this.searchKey})
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error(error);
            })
    }
}