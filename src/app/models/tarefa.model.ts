export interface Tarefa
{
  id: string;
  nome: string;
  datanascimento: Date;
  email: string;
  senha: string;
  celular: string;
  cpf: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  uf: string;
}

export function createUsuario(): Tarefa
{
  return{
    id: Math.floor(Math.random() * 100000000000).toString(),
    nome: '',
    datanascimento: new Date(),
    email: '',
    senha: '',
    celular: "",
    cpf: '',
    cep: "0",
    endereco: '',
    numero: "123",
    complemento: '',
    cidade: '',
    uf: ''

  };
}
