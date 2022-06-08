
import axios from 'axios'
const NUMBERS_API_URL = "http://numbersapi.com";

async function getFact(number: string, category: string): Promise<string> {

  if (!number) {
    const response = await axios.get(`${NUMBERS_API_URL}/random/${category}`);
    return response.data
  } else {
    const response = await axios.get(`${NUMBERS_API_URL}/${number}/${category}`);
    return response.data
  }

}

export { getFact }