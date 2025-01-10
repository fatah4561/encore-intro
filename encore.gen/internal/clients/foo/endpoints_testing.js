import { apiCall, streamIn, streamOut, streamInOut } from "encore.dev/internal/codegen/api";
import { registerTestHandler } from "encore.dev/internal/codegen/appinit";

import * as foo_service from "../../../../foo/encore.service";

export async function greeting(params) {
    const handler = (await import("../../../../foo/foo")).greeting;
    registerTestHandler({
        apiRoute: { service: "foo", name: "greeting", raw: false, handler, streamingRequest: false, streamingResponse: false },
        middlewares: foo_service.default.cfg.middlewares || [],
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false},
    });

    return apiCall("foo", "greeting", params);
}

