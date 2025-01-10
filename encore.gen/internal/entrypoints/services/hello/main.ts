import { registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";
import { Worker, isMainThread } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { availableParallelism } from "node:os";

import { get as getImpl0 } from "../../../../../hello/hello";

const handlers: Handler[] = [
    {
        apiRoute: {
            service:           "hello",
            name:              "get",
            handler:           getImpl0,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":true,"isRaw":false,"isStream":false},
        middlewares: [],
    },
];

registerHandlers(handlers);

await run(import.meta.url);
