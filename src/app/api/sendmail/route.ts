import { NextRequest, NextResponse } from "next/server";
import { SendMail } from "@/app/utils/nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, mail, msg } = await req.json();

    if (!mail || !msg) {
      return NextResponse.json(
        { success: false, msg: "Params are missing" },
        { status: 400 }
      );
    }

    console.log("Incoming:", name, mail, msg);

    // send mail
    const info = await SendMail(name, mail, msg);

    console.log("Mail Info:", info);

    return NextResponse.json({
      success: true,
      msg: "Mail sent successfully",
    });

  } catch (error: any) {
    console.log("error", error);

    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
