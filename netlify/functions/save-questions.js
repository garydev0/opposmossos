const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const questions = JSON.parse(event.body);
    const store = getStore({
      name: 'questions-db',
      siteID: 'e7275bd0-c6f9-4c72-8f8d-a4f1c67dcb04',
      token: 'nfp_YLmgfq6NCYwTv6UM7Z4RURDgMzWb5auR7833'
    });
    await store.setJSON('questions', questions);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message })
    };
  }
};
