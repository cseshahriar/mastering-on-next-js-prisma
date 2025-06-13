import nodemailer from "nodemailer";

// export async function GET(request) {
//   const { searchParams } = request.nextUrl;

//   const to = searchParams.get("to");
//   const subject = searchParams.get("subject");
//   const message = searchParams.get("message");

//   if (!to || !subject || !message) {
//     return new Response(JSON.stringify({ error: "Missing required parameters" }), {
//       status: 400,
//     });
//   }

//   // Create the transporter
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "maddison53@ethereal.email",
//       pass: "jn7jnAPss4f63QBp6D",
//     },
//   });

//   try {
//     const info = await transporter.sendMail({
//       from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
//       to,
//       subject,
//       text: message,
//       html: `<p>${message}</p>`,
//     });

//     return new Response(
//       JSON.stringify({ message: "Email sent", messageId: info.messageId }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const to = searchParams.get("to");
    const subject = searchParams.get("subject");
    const message = searchParams.get("message");

    if (!to || !subject || !message) {
      return Response.json({ msg: "Bad request: Missing parameters" }, { status: 400 });
    }

    // ✅ Mailtrap SMTP setup
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "bcb074c18102bb",
        pass: "a550d019935305", // Replace with actual password from Mailtrap
      },
    });

    const info = await transporter.sendMail({
      from: '"Your App" <no-reply@yourapp.com>',
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return Response.json({ message: "Email sent", messageId: info.messageId });
  } catch (err) {
    return Response.json({ message: "Internal server error", error: err.message }, { status: 500 });
  }
}


// http://localhost:3000/api/send-email?to=someone@example.com&subject=Hi&message=Hello+from+Mailtrap
