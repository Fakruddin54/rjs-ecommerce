import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Processing",
      enum: [
        "Processing",
        "Packaging",
        "Shipped",
        "delivered",
        "Canceled - Not Available",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
