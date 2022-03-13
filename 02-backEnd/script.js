import axios from "axios";

class Api {

    static async getAddress (cep) {
        const {data: result} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return new Address(result) 
    }
    
}

class Address {
    constructor ({ logradouro, bairro, localidade}) {
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }




}
Api.getAddress("63960000").then(v => {console.log(v)});

