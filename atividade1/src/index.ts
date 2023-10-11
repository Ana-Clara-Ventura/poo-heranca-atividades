import { PessoaFisica } from "./model/PessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";

const f1 = new PessoaFisica(`Jubileu`,`000.000.000-00`);
f1.setNome(`Jubileia`);
f1.setCpf(`111.111.111-11`);
console.log(`Nome: ${f1.getNome()}`);
console.log(`CPF: ${f1.documentoIdentificador()}`);

const j1 = new PessoaJuridica(`Empresa do Jubileu`,`43.191.223/0001-96`);
j1.setNome(`Empresa da Jubileia`);
j1.setCnpj(`86.726.393/0001-30`);
console.log(`Nome: ${j1.getNome()}`);
console.log(`CNPJ: ${j1.documentoIdentificador()}`);