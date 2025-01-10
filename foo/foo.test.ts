import {describe, expect, test} from "vitest";
import {greeting} from "./foo";

describe("greeting", () => {
    // TODO: update it using mock header
    test("should combine string with parameter value", async () => {
        const resp = await greeting({name: "world"});
        expect(resp.greeting).toBe("Hello world!")
    })
})