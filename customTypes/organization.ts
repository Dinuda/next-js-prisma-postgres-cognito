import { ParentUser  } from "./parentUser";

export interface Organization {
    id: string;
    name: string;
    parentUser: ParentUser[];
}