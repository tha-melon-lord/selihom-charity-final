import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_PATH = path.join(process.cwd(), "data", "db.json");

const DEFAULT_DB = {
  bookings: [
    {
      id: "TKT-841920",
      name: "Dr. Samuel Tadesse",
      email: "samuel.tadesse@gmail.com",
      phone: "+251 911 234 567",
      date: "August 2, 2026",
      timeSlot: "09:00 AM - 11:30 AM",
      visitType: "corporate",
      visitorCount: 5,
      notes: "Group visit with medical supplies donation and shelter tour.",
      status: "approved",
      createdAt: "7/24/2026",
    },
    {
      id: "TKT-392019",
      name: "Bethlehem Worku",
      email: "bethlehem.w@yahoo.com",
      phone: "+251 922 876 543",
      date: "August 5, 2026",
      timeSlot: "02:00 PM - 04:30 PM",
      visitType: "individual",
      visitorCount: 2,
      notes: "Visiting senior care area and counseling program.",
      status: "pending",
      createdAt: "7/25/2026",
    },
  ],
  pledges: [
    {
      id: "PLG-773109",
      donorName: "Kaleb Berhanu",
      donorEmail: "kaleb.berhanu@gmail.com",
      donorPhone: "+251 912 345 678",
      type: "inkind",
      pledgedItems: [
        { itemId: "food-rice", name: "Rice (50kg bags)", quantity: 3 },
        { itemId: "med-firstaid", name: "First Aid & Hygiene Kits", quantity: 10 },
      ],
      date: "July 23, 2026",
      status: "pledged",
    },
    {
      id: "PLG-442918",
      donorName: "Helen Bekele",
      donorEmail: "helen.b@gmail.com",
      donorPhone: "+251 913 888 999",
      type: "inkind",
      pledgedItems: [
        { itemId: "edu-notebooks", name: "Exercise Books & Pens Pack", quantity: 25 },
      ],
      date: "July 21, 2026",
      status: "received",
    },
  ],
  volunteers: [
    {
      id: "VOL-102938",
      fullName: "Yonas Yilma",
      email: "yonas.yilma@gmail.com",
      phone: "+251 911 990 011",
      availability: "weekends",
      interestArea: "kitchen",
      experience: "Chef with 4 years experience in community kitchen meal preps.",
      status: "new",
      submittedAt: "7/25/2026",
    },
    {
      id: "VOL-554921",
      fullName: "Tigist Alemu",
      email: "tigist.alemu@health.gov.et",
      phone: "+251 914 223 344",
      availability: "flexible",
      interestArea: "medical",
      experience: "Registered psychiatric nurse interested in weekend consultations.",
      status: "accepted",
      submittedAt: "7/22/2026",
    },
  ],
  inKindNeeds: [
    {
      id: "ik-1",
      name: { am: "ጤፍና የእህል እቃዎች", en: "Teff & Food Grains" },
      category: "Food",
      neededQuantity: { am: "50 ጆንያ (100kg)", en: "50 Sacks (100kg each)" },
      urgency: "High",
      description: {
        am: "ለተጠቃሚዎች ዕለታዊ የምግብ ዝግጅት የሚሆን ጤፍና ጥራጥሬ",
        en: "Essential food grain supply for daily community meal preps for shelter residents.",
      },
    },
    {
      id: "ik-2",
      name: { am: "የአዕምሮ ህክምና መድሃኒቶች", en: "Psychiatric & Medical Supplies" },
      category: "Medical",
      neededQuantity: { am: "የ2 ወር መድሃኒት አቅርቦት", en: "2 Months Medicine Supply" },
      urgency: "High",
      description: {
        am: "በማዕከሉ ውስጥ ለሚገኙ ታካሚዎች የታዘዙ መድሃኒቶችና የመጀመሪያ ህክምና ቁሳቁሶች",
        en: "Prescribed psychiatric medication and basic first aid materials for patients in recovery.",
      },
    },
    {
      id: "ik-3",
      name: { am: "የንፅህና መጠበቂያ ቁሳቁሶች", en: "Personal Hygiene Kits & Soap" },
      category: "Hygiene",
      neededQuantity: { am: "100 ፓኬጅ", en: "100 Individual Packs" },
      urgency: "Medium",
      description: {
        am: "ሳሙና፣ የጥርስ ብሩሽ፣ ሻምፖ እና የሴቶች ንፅህና መጠበቂያዎች",
        en: "Body soap, toothbrushes, laundry detergent, and sanitary products for residents.",
      },
    },
    {
      id: "ik-4",
      name: { am: "የብርድ ልብስና አልጋ ልብስ", en: "Warm Blankets & Bedding Sets" },
      category: "Clothing",
      neededQuantity: { am: "30 ጥንድ", en: "30 Sets" },
      urgency: "Medium",
      description: {
        am: "ለአዲስ ገቢዎችና አዛውንቶች የሚሆኑ አዲስ ወይም ንጹህ ብርድ ልብሶች",
        en: "Warm heavy blankets and clean bedsheets for new arrivals and elderly shelter residents.",
      },
    },
  ],
  adminProfile: {
    name: "Shelter Operations Admin",
    email: "admin@selihom.org",
    role: "Lead Administrator",
    phone: "+251 911 000 111",
    username: "admin",
    passwordHash: "selihom2026",
  },
};

function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const dir = path.dirname(DB_PATH);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_DB, null, 2), "utf-8");
      return DEFAULT_DB;
    }
    const content = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading db.json:", err);
    return DEFAULT_DB;
  }
}

function writeDB(data: any) {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing db.json:", err);
    return false;
  }
}

// --- API ENDPOINTS ---

// Full Database
app.get("/api/db", (req, res) => {
  const db = readDB();
  res.json(db);
});

app.post("/api/db", (req, res) => {
  const newDb = req.body;
  if (!newDb || typeof newDb !== "object") {
    return res.status(400).json({ error: "Invalid JSON database format" });
  }
  const current = readDB();
  const merged = { ...current, ...newDb };
  writeDB(merged);
  res.json(merged);
});

// Bookings
app.get("/api/bookings", (req, res) => {
  const db = readDB();
  res.json(db.bookings || []);
});

app.post("/api/bookings", (req, res) => {
  const db = readDB();
  const newBooking = req.body;
  const current = db.bookings || [];
  const index = current.findIndex((b: any) => b.id === newBooking.id);
  let updated;
  if (index >= 0) {
    updated = current.map((b: any) => (b.id === newBooking.id ? newBooking : b));
  } else {
    updated = [newBooking, ...current];
  }
  db.bookings = updated;
  writeDB(db);
  res.json(updated);
});

app.put("/api/bookings/:id/status", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  const { status } = req.body;
  db.bookings = (db.bookings || []).map((b: any) =>
    b.id === id ? { ...b, status } : b
  );
  writeDB(db);
  res.json(db.bookings);
});

app.delete("/api/bookings/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  db.bookings = (db.bookings || []).filter((b: any) => b.id !== id);
  writeDB(db);
  res.json(db.bookings);
});

// Pledges
app.get("/api/pledges", (req, res) => {
  const db = readDB();
  res.json(db.pledges || []);
});

app.post("/api/pledges", (req, res) => {
  const db = readDB();
  const newPledge = req.body;
  const current = db.pledges || [];
  const index = current.findIndex((p: any) => p.id === newPledge.id);
  let updated;
  if (index >= 0) {
    updated = current.map((p: any) => (p.id === newPledge.id ? newPledge : p));
  } else {
    updated = [newPledge, ...current];
  }
  db.pledges = updated;
  writeDB(db);
  res.json(updated);
});

app.put("/api/pledges/:id/status", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  const { status } = req.body;
  db.pledges = (db.pledges || []).map((p: any) =>
    p.id === id ? { ...p, status } : p
  );
  writeDB(db);
  res.json(db.pledges);
});

app.delete("/api/pledges/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  db.pledges = (db.pledges || []).filter((p: any) => p.id !== id);
  writeDB(db);
  res.json(db.pledges);
});

// Volunteers
app.get("/api/volunteers", (req, res) => {
  const db = readDB();
  res.json(db.volunteers || []);
});

app.post("/api/volunteers", (req, res) => {
  const db = readDB();
  const newVol = req.body;
  const current = db.volunteers || [];
  const index = current.findIndex((v: any) => v.id === newVol.id);
  let updated;
  if (index >= 0) {
    updated = current.map((v: any) => (v.id === newVol.id ? newVol : v));
  } else {
    updated = [newVol, ...current];
  }
  db.volunteers = updated;
  writeDB(db);
  res.json(updated);
});

app.put("/api/volunteers/:id/status", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  const { status } = req.body;
  db.volunteers = (db.volunteers || []).map((v: any) =>
    v.id === id ? { ...v, status } : v
  );
  writeDB(db);
  res.json(db.volunteers);
});

app.delete("/api/volunteers/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  db.volunteers = (db.volunteers || []).filter((v: any) => v.id !== id);
  writeDB(db);
  res.json(db.volunteers);
});

// In-Kind Needs
app.get("/api/inkind_needs", (req, res) => {
  const db = readDB();
  res.json(db.inKindNeeds || []);
});

app.post("/api/inkind_needs", (req, res) => {
  const db = readDB();
  const newItem = req.body;
  const current = db.inKindNeeds || [];
  const index = current.findIndex((it: any) => it.id === newItem.id);
  let updated;
  if (index >= 0) {
    updated = current.map((it: any) => (it.id === newItem.id ? newItem : it));
  } else {
    updated = [newItem, ...current];
  }
  db.inKindNeeds = updated;
  writeDB(db);
  res.json(updated);
});

app.delete("/api/inkind_needs/:id", (req, res) => {
  const db = readDB();
  const { id } = req.params;
  db.inKindNeeds = (db.inKindNeeds || []).filter((it: any) => it.id !== id);
  writeDB(db);
  res.json(db.inKindNeeds);
});

app.post("/api/inkind_needs/reset", (req, res) => {
  const db = readDB();
  db.inKindNeeds = DEFAULT_DB.inKindNeeds;
  writeDB(db);
  res.json(db.inKindNeeds);
});

// Admin Profile
app.get("/api/admin_profile", (req, res) => {
  const db = readDB();
  res.json(db.adminProfile || DEFAULT_DB.adminProfile);
});

app.post("/api/admin_profile", (req, res) => {
  const db = readDB();
  db.adminProfile = req.body;
  writeDB(db);
  res.json(db.adminProfile);
});

// --- VITE / STATIC SERVING ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
