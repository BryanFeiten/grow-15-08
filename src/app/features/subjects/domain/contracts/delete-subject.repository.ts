export interface DeleteSubject {
  deleteSubject(subjectUid: string): Promise<boolean>;
}