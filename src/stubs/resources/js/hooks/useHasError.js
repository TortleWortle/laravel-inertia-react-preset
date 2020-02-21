import { useMemo } from 'react'
export function useHasError(errors, field) {
  return useMemo(() => {
    return errors[field] !== undefined
  }, [errors, field]);
}