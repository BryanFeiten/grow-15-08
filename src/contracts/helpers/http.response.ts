export interface HttpResponse {
  body: any,
  code: number,
}

export const ResponseSuccess = (content: any): HttpResponse => {
  return {
    body: content,
    code: 200,
  }
}