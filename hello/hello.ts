import {api} from "encore.dev/api";
import log from "encore.dev/log";
import { getAuthData } from "~encore/internal/auth/auth";

interface Response {
    message: string;
}

export const get = api(
    {
        auth: true,
        method: "GET", 
        path: "/hello", 
        expose: true
    },
    async (): Promise<Response> => {
        const userID = getAuthData()!.userID;
        log.info("Data requested by user", {userID});
        return {message: "Hello"}
    }
)