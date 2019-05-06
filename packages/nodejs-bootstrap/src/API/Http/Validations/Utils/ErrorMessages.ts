export const codeErrors = {
  HTTP: {
    BAD_REQUEST: {
      code: 'BAD_REQUEST',
      href: 'www.example.com/#BAD_REQUEST'
    },
    UNPROCESSABLE_ENTITY: {
      code: 'UNPROCESSABLE_ENTITY',
      href: 'www.example.com/#UNPROCESSABLE_ENTITY'
    },
    UNAUTHORIZED: {
      code: 'UNAUTHORIZED',
      href: 'www.example.com/#UNAUTHORIZED'
    },
    FORBIDDEN: {
      code: 'FORBIDDEN',
      href: 'www.example.com/#FORBIDDEN'
    },
    NOT_FOUND: {
      code: 'NOT_FOUND',
      href: 'www.example.com/#NOT_FOUND'
    },
    INTERNAL_ERROR: {
      code: 'INTERNAL_ERROR',
      href: 'www.example.com/#INTERNAL_ERROR'
    }
  },
  EMPTY: {
    code: 'E0000',
    message: 'Value should not be empty',
  },
  REQUIRED: {
    code: 'E0001',
    message: 'Value should be required',
  },
  STRING: {
    code: 'T0000',
    message: 'Value should be type: string',
    ATTRIBUTES: {
      MIN: {
        code: 'T0000-1',
        message: 'Value should have at least',
      },
      MAX: {
        code: 'T0000-2',
        message: 'Value should have at most',
      },
      EMAIL: {
        code: 'T0000-3',
        message: 'Value should be type: email',
      },
      PASSWORD_MATCH: {
        code: 'T0000-4',
        message: 'First value does not match with second value',
      },
      REGEX: {
        code: 'T0000-5',
        message: 'Value fails to match the required pattern',
      },
    },
  },
  NUMBER: {
    code: 'T0001',
    message: 'Value should be type: number',
    ATTRIBUTES: {
      POSITIVE: {
        code: 'T0001-1',
        message: 'Value should be positive',
      },
      NEGATIVE: {
        code: 'T0001-2',
        message: 'Value should be negative',
      },
      MIN: {
        code: 'T0001-3',
        message: 'Value number is lower than',
      },
      MAX: {
        code: 'T0001-4',
        message: 'Value number is higher than',
      },
    },
  },
  BOOLEAN: {
    code: 'T0002',
    message: 'Value should be type: boolean',
  },
};
