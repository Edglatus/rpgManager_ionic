export class Campanha {
  id: number;
  cdate: Date;
  nome: string;

  constructor(c?: {id: number, cdate: Date, nome: string}) {
    this.id = c.id;
    this.nome = c.nome;
    this.cdate = c.cdate;
  }
}
