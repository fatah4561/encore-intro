import {authHandler} from "encore.dev/auth";
import {Header, Gateway} from "encore.dev/api";

interface AuthParams {
    authorization: Header<"Authorization">;
}

interface AuthData {
    userID: string;
}

export const auth = authHandler<AuthParams, AuthData>(async (params) => {
    // TODO look up information about the user based on the authorization header
    return {userID: "my-user-id"};
})

export const gateway = new Gateway({
    authHandler: auth,
})