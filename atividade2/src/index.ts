import { BebeNatimorto } from "./model/BebeNatimorto";
import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";

const p1 = new BebePrematuro(`1234`, `Ana`, 138, 190, `18`);
p1.setId(`4321`);
p1.setNome(`Clara`);
p1.setPeso(130);
p1.setAltura(200);
p1.setSemanasGestacao(`20`);
console.log(`ID: ${p1.getId()}`);
console.log(`Nome: ${p1.getNome()}`);
console.log(`Peso: ${p1.getPeso()}`);
console.log(`Altura: ${p1.getAltura()}`);
console.log(`Semanas de Gestação: ${p1.getsemanasGestacao()}`);

const n1 = new BebeNormal(`2356`, `Jubileu`, 2.090, 230, `Sim`);
n1.setId(`8433`);
n1.setNome(`Jubileia`);
n1.setPeso(2.000);
n1.setAltura(400);
n1.setVacinado(`Não`);
console.log(`ID: ${n1.getId()}`);
console.log(`Nome: ${n1.getNome()}`);
console.log(`Peso: ${n1.getPeso()}`);
console.log(`Altura: ${n1.getAltura()}`);
console.log(`É vacinado? ${n1.getVacinado()}`);

const na1 = new BebeNatimorto(`0987`, `Julia`, 100, 20, `estresse`);
na1.setId(`7583`);
na1.setNome(`Carlos`);
na1.setPeso(600);
na1.setAltura(40);
na1.setCausa(`morte da mãe e do feto`);
console.log(`ID: ${na1.getId()}`);
console.log(`Nome: ${na1.getNome()}`);
console.log(`Peso: ${na1.getPeso()}`);
console.log(`Altura: ${na1.getAltura()}`);
console.log(`Causa da morte: ${na1.getCausa()}`);