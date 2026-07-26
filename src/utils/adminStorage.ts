import { Booking, DonationPledge, VolunteerApplication, AdminProfile, InKindItem } from "../types";
import { IN_KIND_ITEMS } from "../data";

const BOOKINGS_KEY = "selihom_bookings";
const PLEDGES_KEY = "selihom_pledges";
const VOLUNTEERS_KEY = "selihom_volunteers";
const ADMIN_PROFILE_KEY = "selihom_admin_profile";
const IN_KIND_NEEDS_KEY = "selihom_inkind_needs";

const DEFAULT_ADMIN_PROFILE: AdminProfile = {
  name: "Shelter Operations Admin",
  email: "admin@selihom.org",
  role: "Lead Administrator",
  phone: "+251 911 000 111",
  username: "admin",
  passwordHash: "selihom2026",
};

export const getAdminProfile = (): AdminProfile => {
  const data = localStorage.getItem(ADMIN_PROFILE_KEY);
  if (!data) {
    localStorage.setItem(ADMIN_PROFILE_KEY, JSON.stringify(DEFAULT_ADMIN_PROFILE));
    return DEFAULT_ADMIN_PROFILE;
  }
  try {
    return { ...DEFAULT_ADMIN_PROFILE, ...JSON.parse(data) };
  } catch {
    return DEFAULT_ADMIN_PROFILE;
  }
};

export const saveAdminProfile = (profile: AdminProfile): AdminProfile => {
  localStorage.setItem(ADMIN_PROFILE_KEY, JSON.stringify(profile));
  return profile;
};

// Seed initial records if none exist in localStorage
const SEED_BOOKINGS: Booking[] = [
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
    createdAt: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
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
    createdAt: new Date(Date.now() - 86400000).toLocaleDateString(),
  },
];

const SEED_PLEDGES: DonationPledge[] = [
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
    date: new Date(Date.now() - 86400000 * 3).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
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
    date: new Date(Date.now() - 86400000 * 5).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    status: "received",
  },
];

const SEED_VOLUNTEERS: VolunteerApplication[] = [
  {
    id: "VOL-102938",
    fullName: "Yonas Yilma",
    email: "yonas.yilma@gmail.com",
    phone: "+251 911 990 011",
    availability: "weekends",
    interestArea: "kitchen",
    experience: "Chef with 4 years experience in community kitchen meal preps.",
    status: "new",
    submittedAt: new Date(Date.now() - 86400000).toLocaleDateString(),
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
    submittedAt: new Date(Date.now() - 86400000 * 4).toLocaleDateString(),
  },
];

// --- BOOKINGS ---
export const getBookings = (): Booking[] => {
  const data = localStorage.getItem(BOOKINGS_KEY);
  if (!data) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(SEED_BOOKINGS));
    return SEED_BOOKINGS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return SEED_BOOKINGS;
  }
};

export const saveBooking = (booking: Booking): Booking[] => {
  const current = getBookings();
  const updated = [booking, ...current];
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  return updated;
};

export const updateBookingStatus = (id: string, status: Booking["status"]): Booking[] => {
  const current = getBookings();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteBooking = (id: string): Booking[] => {
  const current = getBookings();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  return updated;
};

// --- PLEDGES ---
export const getPledges = (): DonationPledge[] => {
  const data = localStorage.getItem(PLEDGES_KEY);
  if (!data) {
    localStorage.setItem(PLEDGES_KEY, JSON.stringify(SEED_PLEDGES));
    return SEED_PLEDGES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return SEED_PLEDGES;
  }
};

export const savePledge = (pledge: DonationPledge): DonationPledge[] => {
  const current = getPledges();
  const updated = [pledge, ...current];
  localStorage.setItem(PLEDGES_KEY, JSON.stringify(updated));
  return updated;
};

export const updatePledgeStatus = (id: string, status: DonationPledge["status"]): DonationPledge[] => {
  const current = getPledges();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(PLEDGES_KEY, JSON.stringify(updated));
  return updated;
};

export const deletePledge = (id: string): DonationPledge[] => {
  const current = getPledges();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(PLEDGES_KEY, JSON.stringify(updated));
  return updated;
};

// --- VOLUNTEERS ---
export const getVolunteers = (): VolunteerApplication[] => {
  const data = localStorage.getItem(VOLUNTEERS_KEY);
  if (!data) {
    localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(SEED_VOLUNTEERS));
    return SEED_VOLUNTEERS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return SEED_VOLUNTEERS;
  }
};

export const saveVolunteer = (volunteer: VolunteerApplication): VolunteerApplication[] => {
  const current = getVolunteers();
  const updated = [volunteer, ...current];
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  return updated;
};

export const updateVolunteerStatus = (id: string, status: VolunteerApplication["status"]): VolunteerApplication[] => {
  const current = getVolunteers();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteVolunteer = (id: string): VolunteerApplication[] => {
  const current = getVolunteers();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  return updated;
};

// --- IN-KIND NEEDED ITEMS ---
export const getInKindNeeds = (): InKindItem[] => {
  const data = localStorage.getItem(IN_KIND_NEEDS_KEY);
  if (!data) {
    localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(IN_KIND_ITEMS));
    return IN_KIND_ITEMS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return IN_KIND_ITEMS;
  }
};

export const saveInKindNeed = (item: InKindItem): InKindItem[] => {
  const current = getInKindNeeds();
  const index = current.findIndex((it) => it.id === item.id);
  let updated: InKindItem[];
  if (index >= 0) {
    updated = current.map((it) => (it.id === item.id ? item : it));
  } else {
    updated = [item, ...current];
  }
  localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteInKindNeed = (id: string): InKindItem[] => {
  const current = getInKindNeeds();
  const updated = current.filter((it) => it.id !== id);
  localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(updated));
  return updated;
};

export const resetInKindNeeds = (): InKindItem[] => {
  localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(IN_KIND_ITEMS));
  return IN_KIND_ITEMS;
};

// Helper to export all stored data as a JSON file download
export const exportDataAsJSON = (filename: string, data: unknown) => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
