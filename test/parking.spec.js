xdescribe("Valet parking: ", function () {

    it("30 min", function () {
        expect(getValetParkingFeeByMinute(30)).toBe(12);
    });

    it("3 hours", function () {
        expect(getValetParkingFeeByMinute(3 * 60)).toBe(12);
    });

    it("5 hours", function () {
        expect(getValetParkingFeeByMinute(5 * 60)).toBe(12);
    });

    it('5 hours', function () {
        expect(getValetParkingFeeByMinute(5 * 60 + 1)).toBe(18);
    });

    it('12 hours', function () {
        expect(getValetParkingFeeByMinute(12 * 60)).toBe(18);
    });

    it("1 day", function () {
        expect(getValetParkingFeeByMinute(24 * 60)).toBe(18);
    });

    it("1 day", function () {
        expect(getValetParkingFeeByMinute(24 * 60 + 1)).toBe(36);
    });

    it("3 days", function () {
        expect(getValetParkingFeeByMinute(3 * 24 * 60)).toBe(3 * 18);
    });

    it("1 week", function () {
        expect(getValetParkingFeeByMinute(7 * 24 * 60)).toBe(7 * 18);
    })

});

xdescribe("Short-term parking: ", function () {

    it("30 min", function () {
        expect(getShortTermParkingFeeByMinute(30)).toBe(2);
    });

    it("1 hour", function () {
        expect(getShortTermParkingFeeByMinute(60)).toBe(2);
    });

    it("1 hour and 30 min", function () {
        expect(getShortTermParkingFeeByMinute(60 + 30)).toBe(3);
    });

    it("2 hour", function () {
        expect(getShortTermParkingFeeByMinute(2 * 60)).toBe(4);
    });

    it("3 hour and 30 min", function () {
        expect(getShortTermParkingFeeByMinute(3 * 60 + 30)).toBe(7);
    });

    it("12 hours", function () {
        expect(getShortTermParkingFeeByMinute(12 * 60)).toBe(24);
    });

    it("12 hours and 30 min", function () {
        expect(getShortTermParkingFeeByMinute(12 * 60 + 30)).toBe(24);
    });

    it("1 day and 30 min", function () {
        expect(getShortTermParkingFeeByMinute(24 * 60 + 30)).toBe(25);
    });

    it("1 day and 1 hour", function () {
        expect(getShortTermParkingFeeByMinute(24 * 60 + 60)).toBe(26);
    });
});

xdescribe("Economy parking: ", function () {

    it("30 min", function () {
        expect(getEconomyParkingFeeByMinute(30)).toBe(2);
    });

    it("1 hour", function () {
        expect(getEconomyParkingFeeByMinute(60)).toBe(2);
    });

    it("3 hours", function () {
        expect(getEconomyParkingFeeByMinute(3 * 60)).toBe(6);
    });

    it("4 hours", function () {
        expect(getEconomyParkingFeeByMinute(4 * 60)).toBe(8);
    });

    it("5 hours", function () {
        expect(getEconomyParkingFeeByMinute(5 * 60)).toBe(9);
    });

    it("6 hours", function () {
        expect(getEconomyParkingFeeByMinute(6 * 60)).toBe(9);
    });

    it("24 hours", function () {
        expect(getEconomyParkingFeeByMinute(24 * 60)).toBe(9);
    });

    it("1 day and 1 hour", function () {
        expect(getEconomyParkingFeeByMinute(24 * 60 + 60)).toBe(11);
    });

    it("1 day and 3 hours", function () {
        expect(getEconomyParkingFeeByMinute(24 * 60 + 3 * 60)).toBe(15);
    });

    it("1 day and 5 hours", function () {
        expect(getEconomyParkingFeeByMinute(24 * 60 + 7 * 60)).toBe(18);
    });

    it("3 days", function () {
        expect(getEconomyParkingFeeByMinute(3 * 24 * 60)).toBe(27);
    });

    it("6 days", function () {
        expect(getEconomyParkingFeeByMinute(6 * 24 * 60)).toBe(54);
    });

    it("7 days", function () {
        expect(getEconomyParkingFeeByMinute(7 * 24 * 60)).toBe(54);
    });

    it("1 week and 2 days", function () {
        expect(getEconomyParkingFeeByMinute(7 * 24 * 60 + 2 * 24 * 60)).toBe(72);
    });

    it("3 weeks", function () {
        expect(getEconomyParkingFeeByMinute(3 * 7 * 24 * 60)).toBe(162);
    });


});

xdescribe("Long-term indoor parking: ", function () {

    it("30 min", function () {
        expect(getLongTermIndoorParkingFeeByMinute(30)).toBe(2);
    });

    it("1 hour", function () {
        expect(getLongTermIndoorParkingFeeByMinute(60)).toBe(2);
    });

    it("3 hours", function () {
        expect(getLongTermIndoorParkingFeeByMinute(3 * 60)).toBe(6);
    });

    it("6 hours", function () {
        expect(getLongTermIndoorParkingFeeByMinute(6 * 60)).toBe(12);
    });

    it("7 hours", function () {
        expect(getLongTermIndoorParkingFeeByMinute(7 * 60)).toBe(12);
    });

    it("24 hour", function () {
        expect(getLongTermIndoorParkingFeeByMinute(24 * 60)).toBe(12);
    });

    it("1 day and 1 hour", function () {
        expect(getLongTermIndoorParkingFeeByMinute(24 * 60 + 60)).toBe(14);
    });

    it("1 day and 3 hours", function () {
        expect(getLongTermIndoorParkingFeeByMinute(24 * 60 + 3 * 60)).toBe(18);
    });

    it("1 day and 7 hours", function () {
        expect(getLongTermIndoorParkingFeeByMinute(24 * 60 + 7 * 60)).toBe(24);
    });

    it("6 days", function () {
        expect(getLongTermIndoorParkingFeeByMinute(6 * 24 * 60)).toBe(72);
    });

    it("6 days and 1 hour", function () {
        expect(getLongTermIndoorParkingFeeByMinute(6 * 24 * 60 + 60)).toBe(72);
    });

    it("7 days", function () {
        expect(getLongTermIndoorParkingFeeByMinute(7 * 24 * 60)).toBe(72);
    });

    it("1 week and 2 days", function () {
        expect(getLongTermIndoorParkingFeeByMinute(7 * 24 * 60 + 2 * 24 * 60)).toBe(96);
    });

    it("3 weeks", function () {
        expect(getLongTermIndoorParkingFeeByMinute(3 * 7 * 24 * 60)).toBe(216);
    });
});

xdescribe("Long-term outdoor parking: ", function () {

    it("30 min", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(30)).toBe(2);
    });

    it("1 hour", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(60)).toBe(2);
    });

    it("5 hours", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(5 * 60)).toBe(10);
    });

    it("6 hours", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(6 * 60)).toBe(10);
    });

    it("1 day and 1 hour", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(24 * 60 + 60)).toBe(12);
    });

    it("1 day and 3 hours", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(24 * 60 + 3 * 60)).toBe(16);
    });

    it("1 day and 6 hours", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(24 * 60 + 6 * 60)).toBe(20);
    });

    it("6 days", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(6 * 24 * 60)).toBe(60);
    });

    it("6 days and 1 hour", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(6 * 24 * 60 + 60)).toBe(60);
    });

    it("7 days", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(7 * 24 * 60)).toBe(60);
    });

    it("1 week and 2 days", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(7 * 24 * 60 + 2 * 24 * 60)).toBe(80);
    });

    it("3 weeks", function () {
        expect(getLongTermOutdoorParkingFeeByMinute(3 * 7 * 24 * 60)).toBe(180);
    });
});

xdescribe("Get valid minutes", function () {

    it("1 day", function () {
        expect(getValidMinute(60)).toBe(60);
    });

    it("6 days", function () {
        expect(getValidMinute(6 * 60)).toBe(6 * 60);
    });

    it("6 days and 1 hour", function () {
        expect(getValidMinute(6 * 24 * 60 + 60)).toBe(6 * 24 * 60);
    });

    it("7 days", function () {
        expect(getValidMinute(7 * 24 * 60)).toBe(6 * 24 * 60);
    });

    it("8 days and 3 hours", function () {
        expect(getValidMinute(8 * 24 * 60 + 3 * 60)).toBe(7 * 24 * 60 + 3 * 60);
    });

});