import { CarePlan } from "./CarePlan";

export interface Patient {
    name: string;
    id : number,
    carePlanId : number,
    knownAs: string,
    gender: string,
    dateOfBirth: Date,
    address: string,
    fullname: string
    

    
}