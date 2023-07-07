const Participant = {
  username: (parent, __, { db }) =>
    db.users.find((user) => user.id == parent.user_id).username,
};

export default Participant;
