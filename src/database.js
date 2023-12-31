export const create_DB_Connection = async ({ response, config, SA_BD }) => {
  try {
    response.data = await SA_BD.createConnection(config);
  } catch (error) {
    response.error = "Error al connectarse a la base de datos";
//    response.notificateError({ error });
    throw new Error(response.error) 
  }
 return response;
};
