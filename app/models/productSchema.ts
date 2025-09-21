import mongoose, { Schema, Document, model } from "mongoose";

export enum STATUS {
  IN_STOCK = "in stock",
  OUT_OF_STOCK = "out of stock",
}

// export interface IProduct {
//   title: string;
//   description: string;
//   price: number;
//   reviews?: mongoose.Types.ObjectId[];
//   image: string[];
//   size?: string[];
//   color?: string[];
//   discount?: number;
//   stock: number;
//   status: STATUS;
// }

// export interface DocProduct extends IProduct, Document {}

// const ProductSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true , min:0 },
//     reviews:[
//         {
//             type:Schema.Types.ObjectId,
//             ref:"Review"
//         }
//     ],
//     image: [{ type: String, required: true }],
//     size: [{ type: String }],
//     color: [{ type: String }],
//     discount: { type: Number, default: 0 , min: 0, max: 100},
//     stock: { type: Number, default: 0 ,min:0},
//     status: {
//       type: String,
//       enum: Object.values(STATUS),
//       default: STATUS.IN_STOCK,
//     },
//   },
//   { timestamps: true }
// );

// // Auto-update status
// ProductSchema.pre("save", function (next) {
//   this.status = this.stock > 0 ? STATUS.IN_STOCK : STATUS.OUT_OF_STOCK;
//   next();
// });

// const Product =
//   mongoose.models.Product || model<DocProduct>("Product", ProductSchema);
// export default Product;
