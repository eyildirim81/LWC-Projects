import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordContact extends LightningElement {
    formdata = {};
    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
    }

    createContact() {
        const recordInput = {
            apiName : CONTACT_OBJECT.objectApiName,
            fields : this.formdata
        };
        
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector('form.contactform').reset();
                this.formdata = {};
                this.creatToast("Sucess", "Record has been updated successfully", "success");
            })
            .catch(error => {
                console.error(error);
                this.creatToast("Error", "Error occurred while creating the record", "error");
            })
    }

    creatToast(title, message, variant) {
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }
}