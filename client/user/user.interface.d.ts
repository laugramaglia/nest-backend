import { RoleType } from "./auth/role-type/role-type.enum";
export interface UserInterface {
    name: string;
    email: string;
    user: string;
    pass: string;
    type: RoleType;
}
