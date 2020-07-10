export class Composant {
    id : number;
    code: string;
    designation: string;
    path: string;
    menu_id: number;
    visibilityEtudiant:boolean;
    visibilityEnseignant:boolean;
    visibilityAdministratif:boolean;
    visibilityAdministrateur:boolean;
    visibilityResponsableFormation:boolean;
    Composants: Composant[];
    created_at: Date;
    updated_at: Date;
}