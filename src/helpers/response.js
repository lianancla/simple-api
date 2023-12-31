let defecto = {
  data: null,
  error: null,
};

export class Response {
  constructor(object = defecto) {
    (this.data = object.data), (this.error = object.error);
  }
  notificateError({ error }) {
    console.log(error); //cambiar
  }
  makeNewResponse() {
    return new Response();
  }
}
