<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto que permita pasar de un formato de tiempo establecido en 3 parámetros (horas, minutos, segundos) a un número entero en milisegundos.
    
    Los inputs de entrada se restringen de la siguiente manera :

	0 <= h <= 23
	0 <= m <= 59
	0 <= s <= 59
	
	En caso de romperse estas cláusualas, el retorno debe de ser -1.

	
    Ejemplo:

	toMilliseconds(0,1,1) = 61000
    
	toMilliseconds(1,1,1) = 3661000

	toMilliseconds(24,10,10) = -1
	

    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
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

	[...]
	

	PASS  test/suite.test.js
	√ toMilliseconds(0,1,1) = 61000 (3ms)
	√ toMilliseconds(0,0,0) = 0 (1ms)
	√ toMilliseconds(1,0,1) = 3601000
	√ toMilliseconds(1,1,1) = 3661000
	√ toMilliseconds(1,0,0) = 3600000 (1ms)
	√ toMilliseconds(0,1,0) = 60000
	√ toMilliseconds(0,0,1) = 1000 (1ms)
	√ toMilliseconds(23,59,59) = 86399000 (1ms)
	√ toMilliseconds(24,10,10) = -1
	√ toMilliseconds(1,60,0) = -1
	√ toMilliseconds(0,0,60) = -1 (1ms)
	√ toMilliseconds(15,25,6) = 55506000
	√ toMilliseconds(23,45,10) = 85510000
	√ toMilliseconds(10,25,8) = 37508000
	√ toMilliseconds(0,40,0) = 2400000 (1ms)
	√ toMilliseconds(-1,12,0) = -1
	√ toMilliseconds(50,-1,16) = -1
	√ toMilliseconds(39,45,-1) = -1
	√ toMilliseconds(6,6,6) = 21966000 (1ms)

	Test Suites: 1 passed, 1 total
	Tests:       13 passed, 11 total
	Snapshots:   0 total
	Time:        1.546s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
