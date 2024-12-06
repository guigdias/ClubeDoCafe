export interface Tarefa
{
  id: string;
  nome: string;
  datanascimento: Date;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  cep: string;
  endereco: string;
  bairro: string;
  numero: string;
  complemento: string;
  cidade: string;
  uf: string;
  genero: string;
  tipousuario: string;
}

export function createUsuario(): Tarefa
{
  return{
    id: Math.floor(Math.random() * 110000).toString(),
    nome: '',
    datanascimento: new Date('dd/mm/yyyy'),
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    cep: '',
    endereco: '',
    bairro: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    genero: '',
    tipousuario: 'comum'
  };
}
