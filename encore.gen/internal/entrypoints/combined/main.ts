import { registerGateways, registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";

import { gateway as api_gatewayGW } from "../../../../hello/auth";
import { greeting as foo_greetingImpl0 } from "../../../../foo/foo";
import { get as hello_getImpl1 } from "../../../../hello/hello";
import * as hello_service from "../../../../hello/encore.service";
import * as foo_service from "../../../../foo/encore.service";

const gateways: any[] = [
    api_gatewayGW,
];

const handlers: Handler[] = [
    {
        apiRoute: {
            service:           "foo",
            name:              "greeting",
            handler:           foo_greetingImpl0,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":false,"isRaw":false,"isStream":false},
        middlewares: foo_service.default.cfg.middlewares || [],
    },
    {
        apiRoute: {
            service:           "hello",
            name:              "get",
            handler:           hello_getImpl1,
            raw:               false,
            streamingRequest:  false,
            streamingResponse: false,
        },
        endpointOptions: {"expose":true,"auth":true,"isRaw":false,"isStream":false},
        middlewares: hello_service.default.cfg.middlewares || [],
    },
];

registerGateways(gateways);
registerHandlers(handlers);

await run(import.meta.url);
