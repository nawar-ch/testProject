import { Composant } from './composant.model';
export class Menu {
    id : number;
    code: string;
    designation: string;
    app_module_id: number;
    visibilityEtudiant:boolean;
    visibilityEnseignant:boolean;
    visibilityAdministratif:boolean;
    visibilityAdministrateur:boolean;
    visibilityResponsableFormation:boolean;
    composants: Composant[];
    created_at: Date;
    updated_at: Date;
  }