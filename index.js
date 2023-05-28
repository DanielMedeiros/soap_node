const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
const args = {
    cep: '96060600'
}

async function soapClient(){

    const client =  await soap.createClientAsync(url);
    const result =  await client.consultaCEP(args, (err, result) => {
        console.log('cep :>> ', result);
       });

//console.log(result)
}

soapClient()
