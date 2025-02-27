let db = require("../../modules/db")
let client = require("../../modules/db").client

afterAll(() => {
    client.close()
})

describe("Database connection", () => {
    test("working database connection", async () => {
        let ping = await db.command({ ping : 1 })

        expect(ping.ok).toBe(1)
    })
})