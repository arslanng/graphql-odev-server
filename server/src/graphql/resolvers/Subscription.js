import { filter, pipe } from "graphql-yoga";

const Subscription = {
  userCreated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("userCreated"),
  },
  eventCreated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("eventCreated"),
  },
  participantAdded: {
    subscribe: (_, args, { pubSub }) => {
      return pipe(
        pubSub.subscribe("participantAdded"),

        filter((value) =>
          args.event_id
            ? value.participantAdded.event_id === args.event_id
            : true
        )
      );
    },
  },
  eventsAll: {
    subscribe: (_, __, { pubSub, db }) => {
      setTimeout(() => {
        pubSub.publish("eventsAll", { eventsAll: db.events });
      });
      return pubSub.subscribe("eventsAll");
    },
  },
};

export default Subscription;
