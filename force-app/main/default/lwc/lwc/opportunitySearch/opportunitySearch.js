import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class OpportunitySearch extends LightningElement {

    stageOptions = [];
    selectedStage;

    @wire(getObjectInfo, {objectApiName: OPP_OBJECT})
    oppInfo;

    @wire(getPicklistValues, {fieldApiName: STAGE_FIELD, recordTypeId: '$oppInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.stageOptions = this.picklistGenerator(data);
        }
        if(error) {
            console.error(error);
        }
    }

    picklistGenerator(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }
}