// import helper function for location data
const API = require("../../utils/Api");

/*
  ORANIZATION MUTATIONS
*/
function createOrganization(root, args, context, info) {
  return context.db.mutation.createOrganization(
    {
      data: {
        name: args.name
      }
    },
    info
  );
}

function deleteOrganization(root, args, context, info) {
  return context.db.mutation.deleteOrganization(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}

/*
  LOCATION MUTATIONS
*/
async function createLocation(root, args, context, info) {
  const response = await API.fetchMapData(args.address);
  if (!response) throw new Error(response);
  const { location } = response.data.results.pop().geometry;
  return context.db.mutation.createLocation(
    {
      data: {
        name: args.name,
        address: args.address,
        lattitude: location.lat,
        longitude: location.lng,
        organization: {
          connect: {
            id: args.organizationId
          }
        }
      }
    },
    info
  );
}

async function updateLocation(root, args, context, info) {
  const response = await API.fetchMapData(args.address);
  if (!response) throw new Error(response);
  const { location } = response.data.results.pop().geometry;
  return context.db.mutation.updateLocation(
    {
      where: {
        id: args.id
      },
      data: {
        address: args.address,
        lattitude: location.lat,
        longitude: location.lng,
        name: args.name
      }
    },
    info
  );
}

function deleteLocation(root, args, context, info) {
  return context.db.mutation.deleteLocation(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}

/*
  EVENT MUTATIONS
*/
function createEvent(root, args, context, info) {
  return context.db.mutation.createEvent(
    {
      data: {
        name: args.name,
        date: new Date(args.date).toUTCString(),
        description: args.description,
        organization: {
          connect: {
            id: args.organizationId
          }
        }
      }
    },
    info
  );
}

function updateEvent(root, args, context, info) {
  return context.db.mutation.updateEvent(
    {
      where: {
        id: args.id
      },
      data: {
        name: args.name,
        date: args.date ? new Date(args.date).toUTCString() : args.date,
        description: args.description
      }
    },
    info
  );
}

function deleteEvent(root, args, context, info) {
  return context.db.mutation.deleteEvent(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}

module.exports = {
  createOrganization,
  deleteOrganization,
  createLocation,
  createEvent,
  updateLocation,
  updateEvent,
  deleteLocation,
  deleteEvent
};
