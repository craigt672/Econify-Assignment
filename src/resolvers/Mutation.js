function createOrganization(root, args, context, info) {}

function createLocation(root, args, context, info) {}
function updateLocation(root, args, context, info) {}
function deleteLocation(root, args, context, info) {}

function createEvent(root, args, context, info) {}
function updateEvent(root, args, context, info) {}
function deleteEvent(root, args, context, info) {}

module.exports = {
  createOrganization,
  createLocation,
  createEvent,
  updateLocation,
  updateEvent,
  deleteLocation,
  deleteEvent
};
