import { Schema, Types, model } from "mongoose";

const User = Schema(
  {
    id: Types.ObjectId,
    name: String,
    surname: String,
  },
  { timestamps: true }
);

export default model("User", User);