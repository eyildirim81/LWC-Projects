import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {

    studentName;

    getName() {
        this.studentName = "Local Property";
        stdName = "Steve Jobs";
        console.log("this.studentName = " + this.studentName);
        console.log("stdName = " + stdName);
        return stdName;
    }
    getFullName(firstname, lastname) {
        fullname = firstname + " " + lastname;
        this.studentName = fullname;
        return fullname;
    }

    name = "Balakrishna";
    title = "Salesforce Developer";
    handleChange(evt) {
        this.title = evt.target.value;
    }
}