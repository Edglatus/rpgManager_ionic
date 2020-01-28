export class Personagem {
  id: number;
  nome: string;
  idJogador: number;
  idClasse: number;
  idCampanha: number;

  constructor(p?: {id: number, nome: string, idJogador: number, idClasse: number, idCampanha: number}) {
    this.id = p.id;
    this.nome = p.nome;
    this.idJogador = p.idJogador;
    this.idClasse = p.idClasse;
    this.idCampanha = p.idCampanha;
  }
}
