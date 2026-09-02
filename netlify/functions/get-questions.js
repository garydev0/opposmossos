const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    // Inicialización automática de Netlify Blobs para Functions
    const store = getStore('questions-db');
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
