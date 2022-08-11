import { LightningElement } from 'lwc';

export default class ErrorCallbackParent extends LightningElement {
    errorCallback(error, stack) {
        console.log("Parent errorCallback called");
        console.log(error.message);
        console.log(stack);
    }
}