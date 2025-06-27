export type User = {
    username: string;
    token: string;
};

export type AuthContextProperties = {
    user: User | null;
    login: (
        username: string,
        password: string,
    ) => Promise<
        | {
              success: true;
              message?: undefined;
          }
        | {
              success: false;
              message: string;
          }
    >;
    logout: () => void;
};
