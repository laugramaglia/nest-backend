import { RoleType } from "./auth/role-type/role-type.enum";

export interface UserInterface{
    name: String;
    email: String;
    user: String;
    pass: String;
    type: RoleType;
}