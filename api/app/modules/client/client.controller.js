const { StatusCodes } = require("http-status-codes");
const clientCollection = require("../client/client.schema");

module.exports = {
  getClients(request, response) {
    getClientsFn()
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getClientById(request, response) {
    const Id = request.params.id;

    getClientByIdFn(Id)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  createClient(request, response) {
    createClientFn(request.body)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  updateClientById(request, response) {
    const Id = request.params.id;
    updateClientByIdFn(Id, request.body)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  deleteClientById(request, response) {
    const Id = request.params.id;
    deleteClientByIdFn(Id)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function getClientsFn() {
  return clientCollection.find();
}

async function createClientFn(client) {
  return new clientCollection(client).save();
}

async function getClientByIdFn(id) {
  const clientFound = await clientCollection.findById(id);
  if (!clientFound) {
    throw new Error("client was not found");
  }

  return clientFound;
}

async function updateClientByIdFn(id, newClient) {
  const {
    name,
    cui,
    cnp,
    address,
    city,
    country,
    zipcode,
    contactPersonName,
    phone,
    email,
    website,
    userId,
  } = newClient;
  await getClientByIdFn(id);

  return clientCollection.findByIdAndUpdate(
    id,
    {
      name,
      cui,
      cnp,
      address,
      city,
      country,
      zipcode,
      contactPersonName,
      phone,
      email,
      website,
      userId,
    },
    {
      new: true,
    }
  );
}

async function deleteClientByIdFn(id) {
  return clientCollection.findByIdAndDelete(id);
}
