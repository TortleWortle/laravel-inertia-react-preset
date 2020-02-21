import { useMemo } from 'react'
export function useHasError(errors, field) {
  // return true;
  return useMemo(() => {
    return errors[field] !== undefined
  }, [errors, field]);
}