import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// UPDATE PRODUCT
export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Product.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      product: updated,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// DELETE PRODUCT
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Product.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
