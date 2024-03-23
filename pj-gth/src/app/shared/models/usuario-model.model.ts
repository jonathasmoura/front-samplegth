export class UsuarioModel {
  id:number;
  nome: string;
  sobrenome: string;
  email: string;
  cpfcnpj: string;
  endereco: string;
  senha: string;
  confirmasenha: string;
  administrador :boolean;

  constructor(
    Id: number,
    Nome: string,
    SobreNome: string,
    Email: string,
    CPFCNPJ: string,
    Endereco: string,
    Senha: string,
    ConfirmaSenha: string,
    Admin = false
  ) {
    this.id = Id;
    this.nome = Nome;
    this.sobrenome = SobreNome;
    this.email = Email;
    this.cpfcnpj = CPFCNPJ;
    this.endereco = Endereco;
    this.senha = Senha;
    this.confirmasenha = ConfirmaSenha;
    this.administrador = Admin;
  }
}
