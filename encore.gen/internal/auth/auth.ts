import { getAuthData as _getAuthData } from "encore.dev/internal/codegen/auth";
import { auth as _auth_auth } from "../../../hello/auth.js";

export type AuthData = Awaited<ReturnType<typeof _auth_auth>>;

export function getAuthData(): AuthData | null {
    return _getAuthData()
}
