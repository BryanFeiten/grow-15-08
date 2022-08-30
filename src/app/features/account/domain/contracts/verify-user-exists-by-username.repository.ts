export interface VerifyUserExistsByUsernameRepository {
  verifyUserExistsByUsername(username: string): Promise<boolean>;
}