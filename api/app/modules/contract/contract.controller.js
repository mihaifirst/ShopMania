const {StatusCodes} = require("http-status-codes");
const contractCollection = require("../contract/contract.schema");

module.exports = {
    getContracts(request, response) {
        getContractsFn()
            .then((contract) => {
                response.write(JSON.stringify(contract));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({message: error.message})
            );
    },
    getContractById(request, response) {
        const Id = request.params.id;

        getContractByIdFn(Id)
            .then((contract) => {
                response.write(JSON.stringify(contract));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({message: error.message})
            );
    },
    createContract(request, response) {
        createContractFn(request.body)
            .then((contract) => {
                response.write(JSON.stringify(contract));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
    updateContractById(request, response) {
        const Id = request.params.id;
        updateContractByIdFn(Id, request.body)
            .then((contract) => {
                response.write(JSON.stringify(contract));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
    deleteContractById(request, response) {
        const Id = request.params.id;
        deleteContractByIdFn(Id)
            .then((contract) => {
                response.write(JSON.stringify(contract));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
}

async function getContractsFn() {
    return contractCollection.find();
}

async function getContractByIdFn(id) {
    const contractFound = await contractCollection.findById(id);
    if (!contractFound) {
        throw new Error("contract was not found");
    }

    return contractFound;
}

async function createContractFn(contract) {
    return new contractCollection(contract).save();
}

async function updateContractByIdFn(id, newContract) {
    const {
        no,
        issuedAt,

    } = newContract;
    await getContractByIdFn(id);

    return contractCollection.findByIdAndUpdate(
        id,
        {
            no,
            issuedAt,

        },
        {
            new: true,
        }
    );
}

async function deleteContractByIdFn(id) {
    return contractCollection.findByIdAndDelete(id);
}