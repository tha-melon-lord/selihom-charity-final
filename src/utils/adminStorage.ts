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
];

// Initial auto-sync from /api/db to sync server JSON storage into local state
export const syncWithServer = async (): Promise<void> => {
  try {
    const res = await fetch("/api/db");
    if (res.ok) {
      const data = await res.json();
      if (data.bookings) localStorage.setItem(BOOKINGS_KEY, JSON.stringify(data.bookings));
      if (data.pledges) localStorage.setItem(PLEDGES_KEY, JSON.stringify(data.pledges));
      if (data.volunteers) localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(data.volunteers));
      if (data.inKindNeeds) localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(data.inKindNeeds));
      if (data.adminProfile) localStorage.setItem(ADMIN_PROFILE_KEY, JSON.stringify(data.adminProfile));
    }
  } catch (err) {
    console.warn("Failed to sync with server API:", err);
  }
};

// Trigger server sync immediately on script load
if (typeof window !== "undefined") {
  syncWithServer();
}

// --- ADMIN PROFILE ---
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
  fetch("/api/admin_profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  }).catch((err) => console.error(err));
  return profile;
};

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
  fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  }).catch((err) => console.error(err));
  return updated;
};

export const updateBookingStatus = (id: string, status: Booking["status"]): Booking[] => {
  const current = getBookings();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  fetch(`/api/bookings/${encodeURIComponent(id)}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  }).catch((err) => console.error(err));
  return updated;
};

export const deleteBooking = (id: string): Booking[] => {
  const current = getBookings();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  fetch(`/api/bookings/${encodeURIComponent(id)}`, {
    method: "DELETE",
  }).catch((err) => console.error(err));
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
  fetch("/api/pledges", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pledge),
  }).catch((err) => console.error(err));
  return updated;
};

export const updatePledgeStatus = (id: string, status: DonationPledge["status"]): DonationPledge[] => {
  const current = getPledges();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(PLEDGES_KEY, JSON.stringify(updated));
  fetch(`/api/pledges/${encodeURIComponent(id)}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  }).catch((err) => console.error(err));
  return updated;
};

export const deletePledge = (id: string): DonationPledge[] => {
  const current = getPledges();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(PLEDGES_KEY, JSON.stringify(updated));
  fetch(`/api/pledges/${encodeURIComponent(id)}`, {
    method: "DELETE",
  }).catch((err) => console.error(err));
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
  fetch("/api/volunteers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(volunteer),
  }).catch((err) => console.error(err));
  return updated;
};

export const updateVolunteerStatus = (id: string, status: VolunteerApplication["status"]): VolunteerApplication[] => {
  const current = getVolunteers();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  fetch(`/api/volunteers/${encodeURIComponent(id)}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  }).catch((err) => console.error(err));
  return updated;
};

export const deleteVolunteer = (id: string): VolunteerApplication[] => {
  const current = getVolunteers();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  fetch(`/api/volunteers/${encodeURIComponent(id)}`, {
    method: "DELETE",
  }).catch((err) => console.error(err));
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
  fetch("/api/inkind_needs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).catch((err) => console.error(err));
  return updated;
};

export const deleteInKindNeed = (id: string): InKindItem[] => {
  const current = getInKindNeeds();
  const updated = current.filter((it) => it.id !== id);
  localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(updated));
  fetch(`/api/inkind_needs/${encodeURIComponent(id)}`, {
    method: "DELETE",
  }).catch((err) => console.error(err));
  return updated;
};

export const resetInKindNeeds = (): InKindItem[] => {
  localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(IN_KIND_ITEMS));
  fetch("/api/inkind_needs/reset", {
    method: "POST",
  }).catch((err) => console.error(err));
  return IN_KIND_ITEMS;
};

// Helper to export full JSON database or specific section
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

// Import complete JSON database into server & local storage
export const importDatabaseJSON = async (jsonData: any): Promise<boolean> => {
  try {
    if (jsonData.bookings) localStorage.setItem(BOOKINGS_KEY, JSON.stringify(jsonData.bookings));
    if (jsonData.pledges) localStorage.setItem(PLEDGES_KEY, JSON.stringify(jsonData.pledges));
    if (jsonData.volunteers) localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(jsonData.volunteers));
    if (jsonData.inKindNeeds) localStorage.setItem(IN_KIND_NEEDS_KEY, JSON.stringify(jsonData.inKindNeeds));
    if (jsonData.adminProfile) localStorage.setItem(ADMIN_PROFILE_KEY, JSON.stringify(jsonData.adminProfile));

    const res = await fetch("/api/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });
    return res.ok;
  } catch (err) {
    console.error("Failed to import database JSON:", err);
    return false;
  }
};
