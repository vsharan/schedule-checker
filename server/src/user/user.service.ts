import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    createUser(): any {
        return 'User created!!';
    }

    getUsers(): any {
        return 'Userd Data!!';
    }

    getUser(): any {
        return 'User Data!!';
    }

    updateUser(): any {
        return 'User updated!!';
    }

    deleteUser(): any {
        return 'User deleted!!';
    }
}