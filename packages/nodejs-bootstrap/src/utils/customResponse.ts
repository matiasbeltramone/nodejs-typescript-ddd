export function success(data: any, msg: string, status: number) {
  return {
    data,
    message: msg,
    code: status,
  };
}

export function error(data: any, msg: string, status: number) {
  return {
    errors: data,
    message: msg,
    code: status,
  };
}