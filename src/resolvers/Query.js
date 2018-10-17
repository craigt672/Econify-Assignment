function organization(root, args, context, info) {
  return context.db.query.organization(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}
function organizations(root, args, context, info) {
  return context.db.query.organizations({}, info);
}
function location(root, args, context, info) {
  return context.db.query.location(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}
function locations(root, args, context, info) {
  return context.db.query.locations({}, info);
}
function event(root, args, context, info) {
  return context.db.query.event(
    {
      where: {
        id: args.id
      }
    },
    info
  );
}
function events(root, args, context, info) {
  return context.db.query.events({}, info);
}

module.exports = {
  organization,
  organizations,
  location,
  locations,
  event,
  events
};
