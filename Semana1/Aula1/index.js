 /*   var address = 'Rua das Oliveiras';
        console.log(address);
        var addressNumber = 333;
        console.log(addressNumber);
        var isBlue = true;
        console.log(isBlue); */

        //objeto é um agrupamento de chave e valor

        var personAddress = {
            address: 'Rua das Oliveiras',
            number: 333,
            isBlue: true,
            country: {
                city: 'Florianopolis',
            },
        };
        console.log(personAddress);
        console.log('Rua:' + personAddress.address);
        console.log('Nº:' + personAddress.number);
        console.log(personAddress.isBlue ? 'azul' : 'outra cor');
        console.log(personAddress.country.city);

        //array
        /*    var addresses = ['walberson', 41,true];
           console.log(addresses);
           console.log(addresses[1]); */

        var addresses = [

            {
                name: 'Julian',
                address: 'Rua das Oliveiras',
                number: 333,
                isBlue: true,
                country: {
                    city: 'Florianopolis',
                },
            },
            {
                name: 'Demian',
                address: 'Rua das Almofadas',
                number: 111,
                isBlue: true,
                country: {
                    city: 'Joao Pessoa',
                },
            },
            {
                name: 'Carla',
                address: 'Rua das Rosas',
                number: 444,
                isBlue: false,
                country: {
                    city: 'Barra Grande',
                },
            }
        ]
        console.log(addresses[0].name)
        console.log(addresses[1].name)
        console.log(addresses[2].name)
        console.log(addresses[0].country.city)
        console.log(addresses[1].country.city)
        console.log(addresses[2].country.city)
    