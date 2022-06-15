const toMilliseconds = require('./test01.js');

	test('toMilliseconds(0,1,1) = 61000', function () {
		var expected = 61000;
		var result = toMilliseconds(0,1,1);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(0,0,0) = 0', function () {
		var expected = 0;
		var result = toMilliseconds(0,0,0);
		expect(result).toBe(expected);
	});
	
	test('toMilliseconds(1,0,1) = 3601000', function () {
		var expected = 3601000;
		var result = toMilliseconds(1,0,1);
		expect(result).toBe(expected);
	});
	
	test('toMilliseconds(1,1,1) = 3661000', function () {
		var expected = 3661000;
		var result = toMilliseconds(1,1,1);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(1,0,0) = 3600000', function () {
		var expected = 3600000;
		var result = toMilliseconds(1,0,0);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(0,1,0) = 60000', function () {
		var expected = 60000;
		var result = toMilliseconds(0,1,0);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(0,0,1) = 1000', function () {
		var expected = 1000;
		var result = toMilliseconds(0,0,1);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(23,59,59) = 86399000', function () {
		var expected = 86399000;
		var result = toMilliseconds(23,59,59);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(24,10,10) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(24,10,10);
		expect(result).toBe(expected);
	});
	
	test('toMilliseconds(1,60,0) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(1,60,0);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(0,0,60) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(0,0,60);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(15,25,6) = 55506000', function () {
		var expected = 55506000;
		var result = toMilliseconds(15,25,6);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(23,45,10) = 85510000', function () {
		var expected = 85510000;
		var result = toMilliseconds(23,45,10);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(10,25,8) = 37508000', function () {
		var expected = 37508000;
		var result = toMilliseconds(10,25,8);
		expect(result).toBe(expected);
	});
	
	test('toMilliseconds(0,40,0) = 2400000', function () {
		var expected = 2400000;
		var result = toMilliseconds(0,40,0);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(-1,12,0) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(-1,12,0);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(50,-1,16) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(50,-1,16);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(39,45,-1) = -1', function () {
		var expected = -1;
		var result = toMilliseconds(39,45,-1);
		expect(result).toBe(expected);
	});

	test('toMilliseconds(6,6,6) = 21966000', function () {
		var expected = 21966000;
		var result = toMilliseconds(6,6,6);
		expect(result).toBe(expected);
	});

