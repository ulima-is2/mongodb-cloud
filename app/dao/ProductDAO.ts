import mongoose from "mongoose";

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


const uri: string = "mongodb+srv://admin:admin@cluster0-46epe.mongodb.net/test?retryWrites=true";

export interface IProduct extends mongoose.Document {
title: string;
author: Number;
}

export const ProductSchema = new mongoose.Schema({
name: { type: String, required: true },
quantity: { type: Number, required: true }
});

export const dbConnect = () => {

    mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!");
    }
    });
}

export const ProductDAO = mongoose.model<IProduct>("Product", ProductSchema);