import mongoose from "mongoose";

export let Schema = mongoose.Schema
export let ObjectId = mongoose.Schema.Types.ObjectId
export let Mixed = mongoose.Schema.Types.Mixed

export interface IProduct extends mongoose.Document {
    name: string,
    quantity: Number
}

export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

export const ProductDAO = mongoose.model<IProduct>("Product", ProductSchema)