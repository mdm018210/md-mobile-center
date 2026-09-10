import products from '../../products.json' with { type: 'json' };

export default async () => new Response(JSON.stringify(products), {
  headers: { 'content-type': 'application/json; charset=UTF-8' }
});
