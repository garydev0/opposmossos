const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const store = getStore({
      name: 'questions-db',
      siteID: 'e7275bd0-c6f9-4c72-8f8d-a4f1c67dcb04',
      token: 'nfp_YLmgfq6NCYwTv6UM7Z4RURDgMzWb5auR7833'
    });
    const data = await store.get('questions', { type: 'json' });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data || [])
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message })
    };
  }
};
