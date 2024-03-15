export class UsuarioModel {
  
  Nome: string;
  SobreNome: string;
  Email: string;
  CPFCNPJ: string;
  Endereco: string;
  Senha: string;
  ConfirmaSenha: string;
  Admin: boolean;

  constructor(
    Nome: string,
    SobreNome: string,
    Email: string,
    CPFCNPJ: string,
    Endereco: string,
    Senha: string,
    ConfirmaSenha: string,
    Admin: boolean
  ) {
    this.Nome = Nome;
    this.SobreNome = SobreNome;
    this.Email = Email;
    this.CPFCNPJ = CPFCNPJ;
    this.Endereco = Endereco;
    this.Senha = Senha;
    this.ConfirmaSenha = ConfirmaSenha;
    this.Admin = Admin;
  }
}
