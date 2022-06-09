import axios from 'axios';
import { IFact } from '../interfaces';

const NUMBERS_API_URL = "http://numbersapi.com";

/** Call numbers api and return a fact about a date.
 *
 * @params day: string, month:string
 * @returns fact or random fact
 */

async function getDateFact(day: string, month: string): Promise<IFact> {
 try {
  if (!day && !month) {
   const response = await axios.get(`${NUMBERS_API_URL}/random/date`);
   return { fact: response.data };
  }
  else {
   const response = await axios.get(`${NUMBERS_API_URL}/${month}/${day}/date`);
   return { fact: response.data };
  }
 }
 catch (err) {
  console.warn(err);
  return { error: "Please enter a number!" };
 }
}

export { getDateFact };