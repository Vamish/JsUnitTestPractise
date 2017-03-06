import KBObj from "../js/KBObj"

describe("kbObj Test", function () {

    it("Case: Page successfully deleted", function () {
        let Page = new KBObj("page", [1, 2, 3, 4, 5]);
        Page.Delete([1, 2, 3]);
        setTimeout(function () {
            expect(Page._model.length).toBe(2);
        }, 2000);
    });
});