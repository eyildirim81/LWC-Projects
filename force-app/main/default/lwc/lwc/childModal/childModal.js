import { LightningElement } from 'lwc';

export default class ChildModal extends LightningElement {
    clickHandler() {
        //create an event named 'close' and send it
        const closeEvent = new CustomEvent('close', {bubbles:true});
        this.dispatchEvent(closeEvent);
        console.log("close event has been crated and sent with bubbles option");
    }

    divHandler() {
        console.log("div handler which is a step up to button has been called");
    }

    topDivHandler() {
        console.log("div handler which is 2 steps up to button has been called");
    }
}