let db = require("../../modules/db")

afterAll(async () => {
    await db.end()
})

describe("Database connection", () => {
    test("working database connection", async () => {
        let result = await db.query("SELECT NOW() as now")

        expect(result.rows[0].now.toString()).toBe(new Date().toString())
    })
})