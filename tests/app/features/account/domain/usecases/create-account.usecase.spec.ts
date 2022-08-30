import { CreateAccount, CreateAccountImp } from '../../../../../../src/app/features/account/domain/usecases';

import {
  CreateAccountRepository,
  VerifyUserExistsByEmailRepository,
  VerifyUserExistsByUsernameRepository,
} from '../../../../../../src/app/features/account/domain/contracts';
import { AccountDto } from '../../../../../../src/app/features/account/domain/dtos';
import { Account } from '../../../../../../src/app/features/account/domain/models';
import { DomainError, ValidationError } from '../../../../../../src/app/shared/errors';

class MockAccountRepository implements AccountRepositories {
  async createAccount(accountDto: AccountDto): Promise<Account> {
    return {
      uid: 'any_uid',
      name: 'any_name',
      username: 'any_username',
      email: 'any_email',
    };
  }
  async verifyUserExistsByEmail(email: string): Promise<boolean> {
    return false;
  }
  async verifyUserExistsByUsername(username: string): Promise<boolean> {
    return false;
  }
}

const makeDto = (): AccountDto => ({
  name: 'any_name',
  username: 'any_username',
  email: 'any_email',
  password: 'any_pass',
});

const makeSut = (): SutTypes => {
  const repository = new MockAccountRepository();
  const sut = new CreateAccountImp(repository);

  return { sut, repository };
}

type AccountRepositories = CreateAccountRepository & VerifyUserExistsByEmailRepository & VerifyUserExistsByUsernameRepository;

interface SutTypes {
  repository: AccountRepositories;
  sut: CreateAccount;
}

describe('CreateAccount Usecase', () => {
  it('should  call the method verifyUserExistsByEmail, verifyUserExistsByUsername and createAccount of repostiory sending the email that was received', async () => {
    const { sut, repository } = makeSut();
    const dto = makeDto();
    
    const observer = jest.spyOn(repository, 'verifyUserExistsByEmail');
    const observer2 = jest.spyOn(repository, 'verifyUserExistsByUsername');
    const observer3 = jest.spyOn(repository, 'createAccount');

    await sut.execute(dto);

    expect(observer).toBeCalledWith(dto.email);
    expect(observer2).toBeCalledWith(dto.username);
    expect(observer3).toBeCalledWith(dto);
  });

  it('should throw a DomainError when the method verifyUserExistsByEmail of repository return true', async () => {
    const { sut, repository } = makeSut();

    jest.spyOn(repository, 'verifyUserExistsByEmail').mockResolvedValue(true);

    const response = sut.execute(makeDto());

    await expect(response).rejects.toThrow('Este e-mail já está cadastrado na plataforma');
  });

  it('should throw a DomainError when the method verifyUserExistsByUsername of repository return true', async () => {
    const { sut, repository } = makeSut();

    jest.spyOn(repository, 'verifyUserExistsByUsername').mockResolvedValue(true);

    const response = sut.execute(makeDto());

    await expect(response).rejects.toThrow('Este nome de usuário já está cadastrado na plataforma');
  });

  it('should return account model', async () => {
    const { sut } = makeSut();

    const response = await sut.execute(makeDto());

    expect(response).toEqual({
      uid: 'any_uid',
      email: 'any_email',
      name: 'any_name',
      username: 'any_username',
    });
  });
})