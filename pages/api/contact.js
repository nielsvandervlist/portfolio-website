import nodemailer from 'nodemailer';

export default function (req, res) {

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'nielsvandervlistportfolio@gmail.com',
            pass: process.env.NEXT_PUBLIC_PASSWORD
        },
        secure: true,
    });

    const mailData = {
        from: 'nielsvandervlistportfolio@gmail.com',
        to: 'niels@bespokeweb.nl',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        // html: <div>{req.body.message}</div>
    }

    transporter.sendMail(mailData)

    res.status(200)
}
