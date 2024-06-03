const nodemailer = require("nodemailer");
const winston = require('winston');
const { combine, timestamp, json } = winston.format;


const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
});


const transporter = nodemailer.createTransport({
    host: "mail.example.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "user@example.com",
      pass: "",
    },
  });
  
module.exports.new = (req, res) => {
    logger.info("test")
    const {to, subject, body} = req.body
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"GES CRM 👻" <crm@gescons.ru>', // sender address
          to, // list of receivers
          subject, // Subject line
          text: "Hello world?", // plain text body
          html: body, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);
      
    res.status(200).json({status: "OK"})
}

module.exports.created = (req, res) => {
    res.status(200).json({status: "OK"})
}