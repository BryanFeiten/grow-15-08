export interface HttpResponse {
  success: boolean,
  body: any,
  code: number,
}

export const Response = {
  success: (content: any): HttpResponse => {
    return {
      success: true,
      body: content,
      code: 200,
    }
  },
  failure: (code: number, process: string, error: any): HttpResponse => {
    return {
      success: false,
      body: {
        process,
        error,
      },
      code
    }
  },
  notFound: (process: string, error: any): HttpResponse => {
    return {
      success: false,
      body: {
        process,
        error,
      },
      code: 404
    }
  },
  serverFailure: (process: string, error: any): HttpResponse => {
    return {
      success: false,
      body: {
        process,
        error,
      },
      code: 404
    }
  },
}