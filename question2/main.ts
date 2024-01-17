export function findOutlier(integers: number[]): number {
    const pares = integers.filter(c => c%2 == 0)
    const impares = integers.filter(c => c%2 != 0)

    return pares.length === 1 ? pares[0] : impares[0];
  }