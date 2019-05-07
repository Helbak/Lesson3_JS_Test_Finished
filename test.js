describe("calculate tests", () => {
    it(`test value 1 and 2`, function () {
        const act = calculate(1, 2);
        const exp = 3;
        assert.equal(act,exp);
    });
    const mock1 = [0, 5, 10, 100, 1000, 10500];
    const mock2 = [0, 5, 10, 100, 1000, 10500];

    for (let i = 0; i < mock1.length-1; i++) {

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value ${value1} value2 ${value2}`, function () {
            const act = calculate(value1, value2);
            const exp = value1 + value2;

            assert.equal(act, exp);
        });
    }

    it('test value -1, and 5', function () {
        const act = calculate(-1, 5);
        const exp = false;

        assert.isFalse(act);
    });

    it('test value 1, and 10501', function () {
        const act = calculate(1, 10501);


        assert.isFalse(act);
    });
    it('test first arg NaN',  () => {
        const act = calculate("test", 5);


        assert.isFalse(act);
    });

    it('test first arg NaN',  () => {
        const act = calculate(4, "test");


        assert.isFalse(act);
    });

    it('test first arg NaN',  () => {
        const act = calculate("test", "test");


        assert.isFalse(act);
    });

    it('test first & second undefind', () => {
        const act = calculate();

        assert.isFalse(act);
    })
    it('test sum > 999999', function () {
        const act = calculate(999999, 1);
        const exp = false;

        assert.isFalse(act);
    });

});

describe("minus tests", () => {
    it(`test value 1 and 2`, function () {
        const act = minus(3, 2);
        const exp = 1;
        assert.equal(act,exp);
    });
    it(`test value a<b`, function () {
        const act = minus(1, 2);
        const exp = false;
        assert.equal(act,exp);
    });
    const mock = [0, 5, 10, 100, 1000, 10500, 500000, 999999];


    for (let i = 1; i <= mock.length-1; i++) {

        const value1 = mock[i];
        const value2 = mock[i-1];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = minus(value1, value2);
            const exp = value1 - value2;

            assert.equal(act, exp);
        });
    }
    it('test value -1, and 5', function () {
        const act = minus(-1, 5);
        const exp = false;

        assert.isFalse(act);
    });
    it('test first arg NaN',  () => {
        const act = minus("test", 5);
        assert.isFalse(act);
    });
    it('test second arg NaN',  () => {
        const act = minus(5, "test");
        assert.isFalse(act);
    });
    it('test first and second arg NaN',  () => {
        const act = minus("test", "test");
        assert.isFalse(act);
    });
    it('test first & second undefind', () => {
        const act = minus();
        assert.isFalse(act);
    })
});

describe("divide tests", () => {
    it(`test value 4 and 2`, function () {
        const act = divide(4, 2);
        const exp = 2;
        assert.equal(act,exp);
    });
    it('test b=0', () => {
        const act = divide(3,0);
        assert.isFalse(act);
    })
    it('test a=0', () => {
        const act = divide(0,0);
        assert.isFalse(act);
    })
    it('test a<0, b=4', () => {
        const act = divide(-3,4);
        assert.isFalse(act);
    })
    it('test first arg NaN',  () => {
        const act = divide("test", 5);
        assert.isFalse(act);
    });
    it('test second arg NaN',  () => {
        const act = divide(5, "test");
        assert.isFalse(act);
    });
    it('first and second arg NaN',  () => {
        const act = divide("test", "test");
        assert.isFalse(act);
    });
    const mock1 = [1, 5, 10, 100, 1000, 10500, 500000, 999999];
    const mock2 = [999999,500000,12300,10500,1000,100,5,1];

    for (let i = 0; i <= mock1.length-1; i++) {

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test divide value1 ${value1} value2 ${value2}`, function () {
            const act = divide(value1, value2);
            const exp = value1 / value2;

            assert.equal(act, exp);
        });
    }

});

describe("multiplication tests", () => {
    it(`test value 4 and 2`, function () {
        const act = multiplication(4, 2);
        const exp = 8;
        assert.equal(act,exp);
    });

    const mock1 = [0, 100, 200, 300, 500, 999];
    const mock2 = [999, 700, 400, 300, 100, 999];

    for (let i = 0; i < mock1.length-1; i++) {

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value ${value1} value2 ${value2}`, function () {
            const act = multiplication(value1, value2);
            const exp = value1 * value2;

            assert.equal(act, exp);
        });
    }

    it('test value -1, and 5', function () {
        const act = multiplication(-1, 5);
        const exp = false;

        assert.isFalse(act);
    });

    it('test value 1, and 10501', function () {
        const act = multiplication(1, 10501);


        assert.isFalse(act);
    });
    it('test first arg NaN',  () => {
        const act = multiplication("test", 5);


        assert.isFalse(act);
    });

    it('test first arg NaN',  () => {
        const act = multiplication(4, "test");


        assert.isFalse(act);
    });

    it('test first arg NaN',  () => {
        const act = multiplication("test", "test");


        assert.isFalse(act);
    });

    it('test first & second undefind', () => {
        const act = multiplication();

        assert.isFalse(act);
    })
    it('test multi > 999999', function () {
        const act = multiplication(1001, 1000);
        const exp = false;

        assert.isFalse(act);
    });


});