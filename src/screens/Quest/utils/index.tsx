export function fisherYatesShuffle(arr: any) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

// https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
