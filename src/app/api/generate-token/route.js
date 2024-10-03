import { NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken";
import uuid from "uuid-random";

/**
 * Function to generate a JaaS JWT token.
 */
const generateToken = (privateKey, { id, name, email, avatar, appId, kid }) => {
  const now = new Date();
  const jwt = jsonwebtoken.sign(
    {
      aud: "jitsi",
      context: {
        user: {
          id,
          name,
          avatar,
          email,
          moderator: "true",
        },
        features: {
          livestreaming: "true",
          recording: "true",
          transcription: "true",
          "outbound-call": "true",
        },
      },
      iss: "chat", // Issuer, change if necessary
      room: "*", // Set to a specific room or use '*' for all rooms
      sub: "vpaas-magic-cookie-a03a390d39ed4fd69d3be86f23ee08d6", // Replace with your 8x8 AppID (subdomain like 'myorg.8x8.vc')
      exp: Math.round(now.setHours(now.getHours() + 3) / 1000), // Token expiry (3 hours)
      nbf: Math.round(new Date().getTime() / 1000) - 10, // Not before time
    },
    privateKey,
    { algorithm: "RS256", header: { kid } }
  );

  return jwt;
};

/**
 * API Route to generate the JWT token.
 */
export async function POST(request) {
  const body = await request.json(); // Parse request body
  const { name, email, avatar, appId, kid } = body;

  if (!name || !email || !appId || !kid) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Replace with your actual private key from 8x8 JaaS
    const privateKey = "YOUR_PRIVATE_KEY_CONTENT";

    // Generate unique user ID for this session
    const token = generateToken(privateKey, {
      id: uuid(), // Generates a unique ID for the user
      name,
      email,
      avatar,
      appId, // Your 8x8 AppID (tenant ID or subdomain)
      kid, // Your 8x8 API key
    });

    // Return the token as a JSON response
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: "Token generation failed" },
      { status: 500 }
    );
  }
}
