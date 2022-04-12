
describe('Hooks', () => {
    before(() => {
        // runs once before all tests in the block
    })

    beforeEach(() => {
        // runs before each test in the block
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })

    it("example test 1", () => {
        cy.log('ex1')
    })

    it("example test 2", () => {
        cy.log('ex2')
    })
})