exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { pass } = JSON.parse(event.body || "{}");
  // Lee la variable privada que configurarás en Netlify
  const adminSecret = process.env.ADMIN_PASSWORD; 

  if (pass === adminSecret) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false, message: "Clave incorrecta" }),
  };
};