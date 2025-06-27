export type UserDTO = {
    id: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};
