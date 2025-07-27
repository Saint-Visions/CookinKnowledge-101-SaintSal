import express from "express";
import twilio from "twilio";

const router = express.Router();

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER || "+19499972097";

// 🎤 INITIATE VOICE CALL TO SAINTSAL SUPPORT
router.post("/initiate-call", async (req, res) => {
  try {
    const { userEmail, userTier, callType, userPhone } = req.body;

    console.log("🎤 Voice call request:", { userEmail, userTier, callType });

    // For demo purposes, we'll create a call that connects user to support
    // In production, you'd have a support team phone number
    const supportNumber = "+19499972097"; // Your support line

    if (!userPhone) {
      // If no user phone provided, send SMS with callback number
      const smsMessage = await twilioClient.messages.create({
        body: `SaintSal™ Voice Support: Hi ${userEmail}! Please call ${TWILIO_PHONE} for immediate assistance with your ${userTier} plan. Reference: ${callType}`,
        from: TWILIO_PHONE,
        to: supportNumber, // Send to support team for now
      });

      res.json({
        success: true,
        type: "sms_sent",
        messageSid: smsMessage.sid,
        message: "Support team notified via SMS",
      });
      return;
    }

    // Create outbound call to user
    const call = await twilioClient.calls.create({
      url: `${process.env.FRONTEND_URL}/api/voice/twiml-response`, // TwiML response
      to: userPhone,
      from: TWILIO_PHONE,
      timeout: 30,
      record: true, // Record for quality purposes
    });

    console.log("✅ Voice call initiated:", call.sid);

    // Send notification to support team
    await twilioClient.messages.create({
      body: `🎤 VOICE CALL ACTIVE: ${userEmail} (${userTier}) - Call SID: ${call.sid}`,
      from: TWILIO_PHONE,
      to: supportNumber,
    });

    res.json({
      success: true,
      callSid: call.sid,
      status: call.status,
      type: "call_initiated",
    });
  } catch (error) {
    console.error("❌ Voice call error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// 📞 TWIML RESPONSE FOR VOICE CALLS
router.post("/twiml-response", (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  // Greet the user
  twiml.say(
    {
      voice: "alice",
      language: "en-US",
    },
    "Hello! You've reached SaintSal AI support. Please hold while we connect you to a team member.",
  );

  // Add hold music or connect to support
  twiml.play("https://saintvision.ai/hold-music.mp3");

  // In production, you'd dial your support team
  twiml.dial(
    {
      timeout: 30,
      record: "record-from-answer",
    },
    "+19499972097",
  ); // Your support number

  res.type("text/xml");
  res.send(twiml.toString());
});

// 📱 SEND SMS NOTIFICATION
router.post("/send-sms", async (req, res) => {
  try {
    const { userEmail, message, userTier } = req.body;

    const smsBody = `SaintSal™ (${userTier}): ${message}`;

    const sms = await twilioClient.messages.create({
      body: smsBody,
      from: TWILIO_PHONE,
      to: "+19499972097", // Send to support for now
    });

    console.log("📱 SMS sent:", sms.sid);

    res.json({
      success: true,
      messageSid: sms.sid,
      status: sms.status,
    });
  } catch (error) {
    console.error("❌ SMS error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// 🔔 WEBHOOK FOR CALL STATUS UPDATES
router.post("/call-status", (req, res) => {
  const { CallSid, CallStatus, From, To } = req.body;

  console.log(`📞 Call ${CallSid} status: ${CallStatus} (${From} -> ${To})`);

  // You could update database, send notifications, etc.

  res.status(200).send("OK");
});

export default router;
