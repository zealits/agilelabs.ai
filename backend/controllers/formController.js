const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendEmail = require("../utils/sendEmail.js");

const submitForm = async (req, res) => {
    try {
      const { name, phone, email, companyWebsite, decisionTimeline, solutionProviderName } = req.body;
  
      if (!name || !phone || !email) {
        return res.status(400).json({ message: "Name, phone, and email are required!" });
      }
  
      console.log("Form Data Received:", req.body);
  
      // HTML email template
      const htmlMessage = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 5px;
              }
              .header {
                background-color: #4a90e2;
                color: white;
                padding: 15px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: white;
                padding: 20px;
                border-radius: 0 0 5px 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #666;
              }
              .value {
                color: #333;
                margin-left: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Demo Request for ${solutionProviderName} </h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Company Website:</span>
                  <span class="value">${companyWebsite || "N/A"}</span>
                </div>
                <div class="field">
                  <span class="label">Decision Timeline:</span>
                  <span class="value">${decisionTimeline || "N/A"}</span>
                </div>
              </div>
              <div class="footer">
                <p>Please review this submission and take appropriate action.</p>
              </div>
            </div>
          </body>
        </html>
      `;
  
      // Array of recipient email addresses
      const recipients = [
        "aniketkhillare172002@gmail.com",
        // Add more email addresses here
      ];
  
      // Send email to multiple recipients
      await Promise.all(
        recipients.map(async (recipient) => {
          await sendEmail({
            email: recipient,
            subject: "New Form Submission",
            message: htmlMessage, // Changed this line - now passing HTML content in message
          });
        })
      );
  
      console.log("Emails sent successfully");
      return res.status(200).json({ message: "Form submitted successfully! Emails sent." });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Server Error!" });
    }
  };





// Controller function to handle form submission
const registerService = async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      position,
      email,
      phoneNumber,
      companyWebsite,
      aiServices,
      aiModels,
      aiProducts,
      bigCustomers,
      revenue,
      headquarters,
    } = req.body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phoneNumber) {
      return res.status(400).json({ message: "Required fields are missing!" });
    }

    console.log("Service Registration Data:", req.body);

    // Email content
    const message = `
      📢 **New AI Service Registration**
      -----------------------------------
      📌 Company Name: ${companyName}
      👤 Contact Person: ${contactPerson}
      📍 Position: ${position}
      📧 Email: ${email}
      📞 Phone Number: ${phoneNumber}
      🌐 Website: ${companyWebsite}
      🤖 AI Services: ${aiServices}
      🧠 AI Models: ${aiModels}
      🛠 AI Products: ${aiProducts}
      🏢 Big Customers: ${bigCustomers}
      💰 Revenue: ${revenue}
      🌍 Headquarters: ${headquarters}
    `;

    // Send Email
    await sendEmail({
      email: "aniketkhillare17@gmail.com", // Admin email (Recipient)
      subject: "New AI Service Registration",
      message: message,
    });

    return res.status(200).json({ message: "Service registered successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};




module.exports = { submitForm , registerService};
