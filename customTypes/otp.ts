import { ParentUser } from "./parentUser";

export interface OTP {
    id: string;
    code: string;
    parentUser: ParentUser;
    parentUserId: string;
    updatedAt: Date;
    expiresAt: Date;
    verifiedAt: Date;
}
