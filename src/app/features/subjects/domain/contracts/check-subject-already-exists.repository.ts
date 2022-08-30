export interface CheckSubjectAlreadyExists {
  checkSubjectAlreadyExists(subjectName: string): Promise<boolean>
}