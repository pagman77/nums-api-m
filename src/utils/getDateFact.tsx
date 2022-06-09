import axios from 'axios';
const NUMBERS_API_URL = "http://numbersapi.com";

/** Call numbers api and return a fact about a date.
 *
 * @params day: string, month:string
 * @returns fact or random fact
 */

async function getDateFact(day: string, month: string): Promise<string> {
 if (!day && !month) {
  const response = await axios.get(`${NUMBERS_API_URL}/random/date`);
  return response.data;
 }
 else {
  const response = await axios.get(`${NUMBERS_API_URL}/${month}/${day}/date`);
  return response.data;
 }
}

export { getDateFact };