const {StatusCodes} = require("http-status-codes");
const featureCollection = require("../feature/feature.schema");

module.exports = {
    getFeatures(request, response) {
        getFeaturesFn()
            .then((feature) => {
                response.write(JSON.stringify(feature));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({message: error.message})
            );
    },
    getFeaturesById(request, response) {
        const Id = request.params.id;

        getFeaturesByIdFn(Id)
            .then((feature) => {
                response.write(JSON.stringify(feature));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({message: error.message})
            );
    },
    createFeature(request, response) {
        createFeatureFn(request.body)
            .then((feature) => {
                response.write(JSON.stringify(feature));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
    updateFeatureById(request, response) {
        const Id = request.params.id;
        updateFeatureByIdFn(Id, request.body)
            .then((feature) => {
                response.write(JSON.stringify(feature));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
    deleteFeatureById(request, response) {
        const Id = request.params.id;
        deleteFeatureByIdFn(Id)
            .then((feature) => {
                response.write(JSON.stringify(feature));
                response.end();
            })
            .catch((error) =>
                response
                    .status(StatusCodes.BAD_REQUEST)
                    .send({ message: error.message })
            );
    },
}

async function getFeaturesFn() {
    return featureCollection.find();
}

async function getFeaturesByIdFn(id) {
    const featureFound = await featureCollection.findById(id);
    if (!featureFound) {
        throw new Error("feature was not found");
    }
    return featureFound;
}

async function createFeatureFn(feature) {
    return new featureCollection(feature).save();
}

async function updateFeatureByIdFn(id, newFeature) {
    const {
        name,
        price
    } = newFeature;
    await getFeaturesByIdFn(id);

    return featureCollection.findByIdAndUpdate(
        id,
        {
            name,
            price,
        },
        {
            new: true,
        }
    );
}

async function deleteFeatureByIdFn(id) {
    return featureCollection.findByIdAndDelete(id);
}
