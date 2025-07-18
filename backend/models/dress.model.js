import mongoose from "mongoose";

const DressSchema = new mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: true,
    //   unique: true
    // },
    category: {
      type: String,
      enum: ["JACKEN", "KLEIDER", "TOPS & BLUSEN", "HOSEN", "ACCESSORIES"],
      required: true
    },
    model: {
      type: String,
      required: false
    },
    productName: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    productNumber: {
      type: String,
      required: false
    },
    image: {
      type: [String], // Array of image URLs
      default: []
      // required: true
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "one Size"],
      required: false
    },
    measures: {
      bust: {
        type: Number,
        required: false
      },
      waist: {
        type: Number,
        required: false
      },
      hips: {
        type: Number,
        required: false
      },
      length: {
        type: Number,
        required: false
      }
    },

    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: false
    },
    unique: {
      type: Boolean,
      required: false
    },
    careInstructions: {
      type: String,
      required: true
    },
    material: {
      type: String,
      required: true
    },
    deliverytime: {
      type: String,
      required: false
    },
    deliverable: {
      type: Boolean,
      required: true
    },
    rating: {
      type: Number,
      required: false
    },
    reviews: {
      type: Number,
      required: false
    },
    likes: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: false
  }
);

const Dress = mongoose.model("Dress", DressSchema);

export default Dress;
// This code defines a Mongoose schema for a "Dresses" collection in MongoDB.
