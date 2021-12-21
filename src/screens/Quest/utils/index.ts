// import type { QuestionProps } from '~/@types/entities/Question';

// // randomizando as respostas?
// export const _ = (array: any[]) => [...array].sort(() => Math.random() - 0.7);

// export enum DIFFICULTY {
//   EASY = 'easy',
//   MEDIUM = 'medium',
//   HARD = 'hard',
// }

// // https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

// // async espera receber os dados
// // Definindo uma função como async, podemos utilizar a palavra-chave await antes
// // de qualquer expressão que retorne uma promessa. Dessa forma, a execução da
// // função externa (a função async) será pausada até que a Promise seja resolvida.
// export const getQuestions = async (
//   amount: number,
//   category: number,
//   difficulty: DIFFICULTY,
// ) => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
//   // fetch retorna uma promise
//   const data = await (await fetch(endpoint)).json();
//   // retornado as questões?
//   // console.log(data);
//   return data.results.map((quest: QuestionProps) => ({
//     ...quest,
//     answers: _([...quest.incorrect_answers, quest.correct_answer]),
//   }));
// };

// export type QuestState = QuestionProps & { answer: string[] };
