import { registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";
import { Worker, isMainThread } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { availableParallelism } from "node:os";

import { greeting as greetingImpl0 } from "../../../../../foo/foo";
import * as foo_service from "../../../../../foo/encore.service";

const handlers: Handler[] = [
    {
        apiRoute: {
            service:           "foo",
            name:              "greeting",
            handler:           greetingImpl0,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false},
        middlewares: foo_service.default.cfg.middlewares || [],
    },
];

registerHandlers(handlers);

await run(import.meta.url);
