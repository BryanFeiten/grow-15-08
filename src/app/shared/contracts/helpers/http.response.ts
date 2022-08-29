export interface HttpResponse {
  success: boolean,
  code: number,
  body?: any,
  error?: AppError,
}

interface AppError {
  process: string,
  message: string,
  error: any,
}

export const Response = {
  success: (content: any): HttpResponse => {
    return {
      success: true,
      body: content,
      code: 200,
    }
  },
  failure: (code: number, process: string, message: string, error: any): HttpResponse => {
    return {
      success: false,
      code,
      error: {
        process,
        message,
        error,
      },
    }
  },
  notFound: (process: string, message: string, error: any): HttpResponse => {
    return {
      success: false,
      code: 404,
      error: {
        process,
        message,
        error,
      },
    }
  },
  serverFailure: (process: string, error: any): HttpResponse => {
    return {
      success: false,
      code: 500,
      body: {
        process,
        message: 'Aconteceu um erro desconhecido, por favor entre em contato, ou aguarde',
        error,
      },
    }
  },
}