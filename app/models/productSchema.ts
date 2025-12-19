
import mongoose, { Schema, Document, model, Types } from "mongoose";

export enum STATUS {
  IN_STOCK = "in stock",
  OUT_OF_STOCK = "out of stock",
}

// TypeScript interface for Product
export interface IProduct {
  title: string;
  description: string;
  price: number;
  reviews?: Types.ObjectId[];
  images: string[]; // renamed to plural for clarity
  color?: string[];
  discount?: number;
  stock: number;
  status: STATUS;
}

export interface IProductDocument extends IProduct, Document {}

// Product Schema
const ProductSchema = new Schema<IProductDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    images: [{ type: String, required: true }],
    color: [{ type: String }],
    discount: { type: Number, default: 0, min: 0, max: 100 },
    stock: { type: Number, default: 0, min: 0 },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.IN_STOCK,
    },
  },
  { timestamps: true }
);

// Auto-update status before saving
ProductSchema.pre("save", function (next) {
  this.status = this.stock > 0 ? STATUS.IN_STOCK : STATUS.OUT_OF_STOCK;
  next();
});

// Export the model
export const Product =
  mongoose.models.Product || model<IProductDocument>("Product", ProductSchema);
