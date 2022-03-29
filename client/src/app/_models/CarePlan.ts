import { Patient } from "./Patient";

export interface CarePlan{
    id: number,
    levelOfUnderstanding: string,
    communication: string,
    mobility: string,
    personalCare: string,
    continenceCare: string,
    oralCare: string,
    nutritionAndDehydration : string,
    skinCare: string,
    interestsAndHobbies: string,
    mentalHealth: string,
    medication: string,
    eolPref: string,
    religiousAndCulturalBeliefs: string,
    patientId : number
}