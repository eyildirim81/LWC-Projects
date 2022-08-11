import { LightningElement } from 'lwc';

export default class ErrorCallbackChild extends LightningElement {
    connectedCallback() {
        console.log("Child connectedCallback called");
        throw new Error("Error occured while fetching the data from database!!!");
    }
}