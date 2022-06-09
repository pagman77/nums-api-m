
import axios from 'axios';
const NUMBERS_API_URL = "http://numbersapi.com";

/** Call numbers api and return a fact about trivia, math, or year.
 *
 * @params number: string, category:string
 * @returns fact or random fact based on category and/or number passed
 */
async function getFact(number: string, category: string): Promise<string> {
 if (!number) {
  const response = await axios.get(`${NUMBERS_API_URL}/random/${category}`);
  return response.data;
 } else {
  const response = await axios.get(`${NUMBERS_API_URL}/${number}/${category}`);
  return response.data;
 }

}

export { getFact };