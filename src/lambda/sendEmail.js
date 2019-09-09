require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const pdfKit = require("pdfkit/js/pdfkit.standalone.js");
const pdf = new pdfKit();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};
// Declaring variables to be used outside try catch scope.
let transporter = false;

exports.handler = function(event, context, callback) {
  // Rejecting request is its not a post.
  if (event.httpMethod !== "POST") {
    callback(null, {
      statusCode: 200,
      headers,
      body: "Only POST method allowed!"
    });
  }

  const data = JSON.parse(event.body);

  // Making sure we have all required data. Otherwise, return error.
  if (!data.name || !data.email || !data.base64Image) {
    console.error(message);
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: "Required information is missing!"
      })
    });
  }

  try {
    // Setting OAuth Client.
    const oauth2Client = new OAuth2(
      process.env.OAUTH_CLIENT_ID, // ClientID
      process.env.OAUTH_CLIENT_SECRET, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    // Setting OAuth Credentials.
    oauth2Client.setCredentials({
      refresh_token: process.env.OAUTH_REFRESH_TOKEN
    });

    // Getting new access token.
    const accessToken = oauth2Client.getAccessToken();

    // Setting mailing transporter with OAuth Credentials and accessToken gotten from OAuth API.
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "gfsd3v@gmail.com",
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken
      }
    });
  } catch (e) {
    console.error(message);
    callback(null, {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: e.message
      })
    });
  }

  // Setting mail optiions.
  const mailOptions = {
    from: "gfsd3v@gmail.com",
    to: "gfsd3v@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
  };

  try {
    // Declaring array that will be populate with a node buffer
    // eslint-disable-next-line prefer-const
    let buffers = [];
    // Callback function, when the pdf is written save the buffer in the buffers array
    pdf.on("data", buffers.push.bind(buffers));

    // Write base64 image to pdf file
    pdf.image(data.base64Image);

    // Called when the image is written to the pdf file
    pdf.on("end", () => {
      // New buffer with all data written to the PDF
      // eslint-disable-next-line prefer-const
      let pdfData = Buffer.concat(buffers);

      // Adding PDF Buffer to mail attachments
      mailOptions.attachments = [
        {
          filename: "attachment.pdf",
          content: pdfData
        }
      ];

      // Sending email.
      transporter.sendMail(mailOptions).then(() => {
        callback(null, {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            status: "succeeded",
            message: "Email successfully sent!"
          })
        });
      });
    });
    pdf.end();
  } catch (e) {
    console.error(message);
    callback(null, {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: e.message
      })
    });
  }
};
