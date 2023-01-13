import { Schema, model } from "mongoose";

const UserSchema = new Schema(
   {
      id: {
         type: Number,
         required: true,
         unique: true,
      },
      title: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: false,
      versionKey: false,
   }
);

const Movie = model("Movie", UserSchema);

export default Movie;
