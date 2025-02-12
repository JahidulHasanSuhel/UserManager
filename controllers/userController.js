import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  console.log("result", result);
  return res.status(201).json({ msg: "success" });
};

export const getAllUsers = async (req, res) => {
  const alldbUsers = await User.find({});
  const html = `
    <ul>
      ${alldbUsers
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")}
    </ul>
  `;
  res.send(html);
};

export const getAllUsersJSON = async (req, res) => {
  const alldbUsers = await User.find({});
  return res.json(alldbUsers);
};

export const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "muhammad" });
  return res.json({ status: "success" });
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
};
