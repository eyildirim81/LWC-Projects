import { api, LightningElement, wire } from 'lwc';
import calculateOppAmount from '@salesforce/apex/AccountCtrl.calculateOppAmount';

export default class OppAmountCalculator extends LightningElement {
    @api recordId;
    @wire(calculateOppAmount, {accountId: '$recordId'})
    amount;
}