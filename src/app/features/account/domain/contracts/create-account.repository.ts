import { AccountDto } from "../dtos";
import { Account } from "../models";

export interface CreateAccountRepository {
  createAccount(accountDto: AccountDto): Promise<Account>;
}