const User = require("../models/user");
const List = require("../models/list");

//CREATE LIST
exports.addTask = async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      await list.save();
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (err) {
    console.log(err);
  }
};

//UPDATE LIST
exports.updateTask = async (req, res) => {
  try {
    const { title, body } = req.body;
    console.log(title, body)
    console.log(req.params.id)
    const list = await List.findByIdAndUpdate(req.params.id, { title, body });
    list.save().then(() => res.status(200).json({ message: "tast updated" }));
  } catch (err) {
    console.log(err);
  }
};

//DELETE LIST
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(
      { _id: id },
      { $pull: { list: req.params.id } },
      { new: true }
    );
    if (existingUser) {
      const list = await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "task deleted" })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

// FEATCHING THE TASKS
exports.fetchingTask = async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).json({ list: list });
    return;
  } else {
    res.status(200).json({ message: "No Task" });
    return;
  }
  res.status(200).json({ list });
};
