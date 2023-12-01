import { ParentUser } from "./parentUser";

export interface User {
    id: string;
    name: string;
    country: string;
    address: string;
    parentUser: ParentUser;
    parentUserId: string;
}