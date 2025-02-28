const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user, status: true, msg: "Profile found successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}
// exports.deleteProfile = async (req, res) => {
// try {
//   if (!validateObjectId(req.params.userid)) {
//     return res.status(400).json({ status: false, msg: "Task id not valid" });
//   }

//   let task = await Task.findById(req.params.userid);
//   if (!task) {
//     return res.status(400).json({ status: false, msg: "Task with given id not found" });
//   }

//   if (task.user != req.user.id) {
//     return res.status(403).json({ status: false, msg: "You can't delete task of another user" });
//   }

//   await Task.findByIdAndDelete(req.params.taskId);
//   res.status(200).json({ status: true, msg: "Task deleted successfully.." });
// }
// catch (err) {
//   console.error(err);
//   return res.status(500).json({ status: false, msg: "Internal Server Error" });
// }
// }