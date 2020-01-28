export class Jogador {
  id: number;
  nome: string;

  constructor(j?: {id: number, nome: string}) {
    this.id = j.id;
    this.nome = j.nome;
  }
}
