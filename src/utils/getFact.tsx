import axios from 'axios';
import { IFact } from '../interfaces';

const NUMBERS_API_URL = "http://numbersapi.com";

/** Call numbers api and return a fact about trivia, math, or year.
 *
 * @params number: string, category:string
 * @returns fact or random fact based on category and/or number passed
 */
async function getFact(number: string, category: string): Promise<IFact> {
 try {
  if (!number) {
   const response = await axios.get(`${NUMBERS_API_URL}/random/${category}`);
   return { fact: response.data };
  } else {
   const response = await axios.get(`${NUMBERS_API_URL}/${number}/${category}`);
   return { fact: response.data };
  }
 }
 catch (err) {
  console.warn(err);
  return { error: "Please enter a number!" };
 }

}

export { getFact };