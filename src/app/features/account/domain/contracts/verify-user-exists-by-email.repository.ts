export interface VerifyUserExistsByEmailRepository {
  verifyUserExistsByEmail(email: string): Promise<boolean>;
}