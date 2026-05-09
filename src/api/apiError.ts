export type ErrorCode = 404 | 400 | 500 | 204;

export class ApiError extends Error {
  public readonly code: ErrorCode;
  public data: unknown;

  constructor(message: string, code: ErrorCode, data?: unknown) {
    super(message);

    this.code = code;
    this.data = data;
    // eslint-disable-next-line no-console
    console.warn(message, code, data);
  }
}

export class FetchFailedError extends ApiError {}
