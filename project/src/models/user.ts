class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;

    constructor(userId: string, userFirstName: string, userLastName: string) {
        this.id = userId;
        this.firstName = userFirstName;
        this.lastName = userLastName;
    }
}