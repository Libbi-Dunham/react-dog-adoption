export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

// import { client, checkError } from './client';

// export async function getDogs() {
//   let request = await client.from('dogs').select().order('id');

//   return checkError(request);
// }

// export async function getDogById(id) {
//   let request = await client.from('dogs').select('*').match({ id }).single();

//   return request;
// }
