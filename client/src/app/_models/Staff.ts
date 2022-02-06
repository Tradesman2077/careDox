import { Photo } from "./Photo";

export interface Staff {
    id:          number;
    username:    string;
    photoUrl:    string;
    patientList: string;
    age:         number;
    fullName:    string;
    created:     Date;
    lastActive:  Date;
    gender:      string;
    isAdmin:     boolean;
    address:     string;
    photos:      Photo[];
    patients:    any[];
    contactNumber: string;
}
