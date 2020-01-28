export class Classe {
  id: number;
  nome: string;

  constructor(c?: {id: number, nome: string}) {
    this.id = c.id;
    this.nome = c.nome;
  }
}
