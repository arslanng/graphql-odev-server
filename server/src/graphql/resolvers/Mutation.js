import { nanoid } from "nanoid";

const Mutation = {
  //User
  createUser: (_, { data }, { pubSub, db }) => {
    const user = {
      id: nanoid(),
      ...data,
    };
    db.users.push(user);

    pubSub.publish("userCreated", { userCreated: user });
    return user;
  },
  updateUser: (_, { id, data }, { db }) => {
    const user_index = users.findIndex((user) => user.id == id);
    if (user_index === -1) {
      throw new Error("User not found");
    }
    db.users[user_index] = {
      ...db.users[user_index],
      ...data,
    };

    return users[user_index];
  },
  deleteUser: (_, { id }, { db }) => {
    const user_index = db.users.findIndex((user) => user.id == id);
    if (user_index === -1) {
      throw new Error("User not found");
    }
    const delete_user = db.users[user_index];

    db.users.splice(user_index, 1);

    return delete_user;
  },
  deleteAllUsers: (_, __, { db }) => {
    const length = db.users.length;
    db.users.splice(0, length);
    return {
      count: length,
    };
  },
  //Event
  createEvent: (_, { data }, { pubSub, db }) => {
    const event = {
      id: nanoid(),
      ...data,
    };
    db.events.unshift(event);
    pubSub.publish("eventCreated", { eventCreated: event });
    pubSub.publish("eventsAll", { eventsAll: db.events });
    return event;
  },
  updateEvent: (_, { id, data }, { pubSub, db }) => {
    const event_index = db.events.findIndex((event) => event.id == id);
    if (event_index === -1) {
      throw new Error("Event not found");
    }
    db.events[event_index] = {
      ...db.events[event_index],
      ...data,
    };
    pubSub.publish("eventsAll", { eventsAll: db.events });
    return db.events[event_index];
  },
  deleteEvent: (parent, { id }, { pubSub, db }) => {
    const event_index = db.events.findIndex((event) => event.id == id);
    if (event_index === -1) {
      throw new Error("event not found");
    }
    const delete_event = db.events[event_index];

    db.events.splice(event_index, 1);
    pubSub.publish("eventsAll", { eventsAll: db.events });
    return delete_event;
  },
  deleteAllEvents: (_, __, { db }) => {
    const length = db.events.length;
    db.events.splice(0, length);
    return {
      count: length,
    };
  },
  //Location
  createLocation: (_, { data }, { db }) => {
    const location = {
      id: nanoid(),
      ...data,
    };
    db.locations.push(location);
    return location;
  },
  updateLocation: (_, { id, data }, { db }) => {
    const location_index = db.locations.findIndex((location) => location.id == id);
    if (location_index === -1) {
      throw new Error("location not found");
    }
    db.locations[location_index] = {
      ...db.locations[location_index],
      ...data,
    };

    return db.locations[location_index];
  },
  deleteLocation: (_, { id }, { db }) => {
    const location_index = db.locations.findIndex((location) => location.id == id);
    if (location_index === -1) {
      throw new Error("location not found");
    }
    const delete_location = db.locations[location_index];

    db.locations.splice(location_index, 1);

    return delete_location;
  },
  deleteAllLocations: (_, __, { db }) => {
    const length = db.locations.length;
    db.locations.splice(0, length);
    return {
      count: length,
    };
  },
  //Participant
  createParticipant: (_, { data }, { pubSub, db }) => {
    const participant = {
      id: nanoid(),
      ...data,
    };
    db.participants.push(participant);

    pubSub.publish("participantAdded", { participantAdded: participant });
    return participant;
  },
  updateParticipant: (parent, { id, data }, { db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id == id
    );
    if (participant_index === -1) {
      throw new Error("participant not found");
    }
    db.participants[participant_index] = {
      ...db.participants[participant_index],
      ...data,
    };

    return participants[participant_index];
  },
  deleteParticipant: (parent, { id }, { db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id == id
    );
    if (participant_index === -1) {
      throw new Error("participant not found");
    }
    const delete_participant = db.participants[participant_index];

    db.participants.splice(participant_index, 1);

    return delete_participant;
  },
  deleteAllParticipants: (_, __, { db }) => {
    const length = db.participants.length;
    db.participants.splice(0, length);
    return {
      count: length,
    };
  },
};

export default Mutation;
