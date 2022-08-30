import { DomainError, ValidationError } from "../../../../shared/errors";
import { CreateAccountRepository, VerifyUserExistsByEmailRepository, VerifyUserExistsByUsernameRepository } from "../contracts";
import { AccountDto } from "../dtos";
import { Account } from "../models";

export interface CreateAccount {
  execute(accountDto: AccountDto): Promise<Account>
}

type AccountRepositories = CreateAccountRepository & VerifyUserExistsByEmailRepository & VerifyUserExistsByUsernameRepository;

export class CreateAccountImp implements CreateAccount {
  #repository: AccountRepositories;

  constructor(accountRepository: AccountRepositories) {
    this.#repository = accountRepository;
  }

  async execute(accountDto: AccountDto): Promise<Account> {
    // this.isRequired(accountDto.email, 'E-mail');
    // this.isValidEmail(accountDto.email);
    // this.isRequired(accountDto.username, 'Nome de usuário');
    // this.isMinLength(3, accountDto.username, 'Nome de usuário');
    // this.isMaxLength(50, accountDto.username, 'Nome de usuário');
    // this.isRequired(accountDto.name, 'Nome');
    // this.isMinLength(7, accountDto.name, 'Nome');
    // this.isMaxLength(100, accountDto.name, 'Nome');
    // this.isRequired( accountDto.password, 'Senha');
    // this.isMinLength(6, accountDto.password, 'Senha');
    // this.isMaxLength(100, accountDto.password, 'Senha');

    // this.validate();

    // if (!this.isValid) {
    //   throw new ValidationError(this.process, this.notifications);
    // }

    const emailAlready = await this.#repository.verifyUserExistsByEmail(accountDto.email);

    if (emailAlready) {
      throw new DomainError('execute -> CreateAccountImp', 'Este e-mail já está cadastrado na plataforma');
    }

    const usernameAlready = await this.#repository.verifyUserExistsByUsername(accountDto.username);

    if (usernameAlready) {
      throw new DomainError('execute -> CreateAccountImp', 'Este nome de usuário já está cadastrado na plataforma');
    }

    const account = await this.#repository.createAccount(accountDto);

    return account;
  }
}