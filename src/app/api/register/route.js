import { connectDB } from "@/src/lib/mongodb";
import User from "@/src/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();

  await connectDB();

  const exist = await User.findOne({ email });
  if (exist) {
    return Response.json({ success: false, message: "User exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hash });

  return Response.json({ success: true });
}
