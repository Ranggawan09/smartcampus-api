const admin = require("firebase-admin");

// Pastikan environment variable terdefinisi
if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error(
    "FIREBASE_SERVICE_ACCOUNT environment variable is not defined"
  );
}

// Parse JSON dari environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Fungsi handler untuk API
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Contoh autentikasi sederhana
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email dan password harus disediakan" });
    }

    // Lakukan operasi autentikasi atau logika lainnya
    return res
      .status(200)
      .json({ message: "Firebase Admin SDK initialized successfully" });
  }

  // Jika metode HTTP tidak diizinkan
  res.status(405).json({ error: "Method not allowed" });
}
