import { Organization } from "./organization";
import { OTP } from "./otp";
import { User } from "./user";

export interface ParentUser extends ParentUserCreationResponse {
    otp: OTP;
}

export interface ParentUserCreationResponse {
    id: string;
    email: string;
    phone: string;
    name: string;
    organization: Organization;
    organizationId: string;
    accountVerified: boolean;
    // users and otp are not included here
}