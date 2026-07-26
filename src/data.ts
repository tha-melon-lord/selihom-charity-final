import { Initiative, Testimonial, InKindItem, TransformationStory, ValueItem, BankAccount, ProgramItem, EventItem, GalleryItem } from "./types";


// Generated and uploaded images
import selihomLogo from "./assets/images/selihom_logo.jpg";
import storyBefAft1 from "./assets/images/story_1.jpg";
import storyBefAft2 from "./assets/images/story_2.jpg";
import storyBefAft3 from "./assets/images/story_3.jpg";
import storyBefAft4 from "./assets/images/story_4.jpg";
import officialCertificate from "./assets/images/elderly_care.jpg";

// Preserved template cutout images
import mealsCutout from "./assets/images/meals_cutout.jpg";
import eduCutout from "./assets/images/edu_cutout.jpg";
import healthCutout from "./assets/images/health_cutout.jpg";
import elderlyDignityCutout from "./assets/images/elderly_dignity.jpg";
import elderlyWiseCutout from "./assets/images/elderly_wise.jpg";
import childrenCutout from "./assets/images/children_cutout.jpg";
import aboutCutout from "./assets/images/warmth_education.jpg";
import elderlyCutout from "./assets/images/elderly_care.jpg";

export const IMAGES = {
  selihomLogo,
  storyBefAft1,
  storyBefAft2,
  storyBefAft3,
  storyBefAft4,
  officialCertificate,
  mealsCutout,
  eduCutout,
  healthCutout,
  elderlyDignityCutout,
  elderlyWiseCutout,
  childrenCutout,
  aboutCutout,
  elderlyCutout
};

export const SELIHOM_INFO = {
  name: { am: "ሰሊሆም", en: "Selihom" },
  fullName: { am: "ሰሊሆም የአዕምሮ ህሙማን መርጃ ማህበር", en: "Selihom Mentally Ill People Support Association" },
  motto: { am: "ደግ ልቦች ከውብ ፊቶች ይበልጣሉ!", en: "Kind hearts excel beautiful faces!" },
  hero: {
    title: { am: "በመስራት ላይ ያለው", en: "Making a Difference" },
    subtitle: { am: "ተስፋ • ፍቅር • አንድነት", en: "Hope • Love • Unity" },
    description: {
      am: "የአዕምሮ ህሙማንን፣ አዛውንቶችንና ህጻናትን በመደገፍ ወደ ማህበረሰብ እንዲመለሱ ማስቻል።",
      en: "Supporting people with mental illness, vulnerable elderly people, and children by providing care, treatment, and rehabilitation so they can reintegrate into society."
    }
  },
  registration: {
    number: "1113/2019",
    date: "Feb 03, 2020",
    agency: {
      am: "የኢትዮጵያ ፌደራላዊ ዲሞክራሲያዊ ሪፐብሊክ የሲቪል ማህበረሰብ ድርጅቶች ኤጀንሲ",
      en: "Federal Democratic Republic of Ethiopia Agency for Civil Society Organizations"
    },
    certificateImage: officialCertificate
  },
  about: {
    founder: { am: "ሚኪያስ ለገሰ", en: "Mikiyas Legesse" },
    history: {
      title: { am: "አመሰራረት", en: "Our Story" },
      summary: {
        am: "ሰሊሆም ማህበር የተመሰረተው በአቶ ሚኪያስ ለገሰ አባታቸውን በአዕምሮ ህመም ምክንያት ካጡ በኋላ ነው። በዚህ ሀዘን በመነሳት፣ በጎዳና ላይ የሚኖሩ የአዕምሮ ህሙማንን ማንሳት ጀመሩ። በሺንቁር ቅዱስ ሚካኤል ቤተክርስቲያን አቅራቢያ አነስተኛ የተከራየች ቤት በመጀመር፣ እሳቸውና በጎ ፈቃደኞች ጫማ በመወልወል፣ መኪና በማጠብና እርዳታ በመሰብሰብ ገቢ ያሰባስቡ ነበር። ድርጅቱ እያደገ ሲመጣ ወደ እንጦጦ ራጉኤል ቤተክርስቲያን አቅራቢያ ተዛውሮ አሁን ላይ 200 አካባቢ ተጠቃሚዎችን የሚረዳ ሲሆን፣ ከእነዚህም ውስጥ 85% ያህሉ ከፍተኛ መሻሻል አሳይተዋል።",
        en: "Selihom was founded by Mikiyas Legesse after losing his father to mental illness. Motivated by this tragedy, he began rescuing people living on the streets with mental illness. Starting with a small rented house near St. Michael Church in Shinkur, he and volunteers raised funds by cleaning shoes, washing cars, and collecting donations. As the organization grew, it relocated near Entoto Raguel Church, where it now serves around 200 beneficiaries, with approximately 85% showing significant recovery."
      }
    },
    vision: {
      title: { am: "ራዕይ", en: "Vision" },
      content: {
        am: "ለአዕምሮ ህሙማንና ተጋላጭ አዛውንቶች የህክምና፣ የስነ-ልቦና እና የማህበራዊ ድጋፍ በመስጠት በህብረተሰቡ ውስጥ ጤናማና ክብር ያለው ህይወት እንዲኖሩ ማድረግ።",
        en: "To provide medical, psychological, and social support to people with mental illness and vulnerable elderly citizens so they can live healthy, dignified lives within society."
      }
    },
    mission: {
      title: { am: "ተልዕኮ", en: "Mission" },
      content: {
        am: "የአዕምሮ ህሙማንን ከጎዳና በማንሳት ሕክምና፣ ምክር፣ የሙያ ስልጠናና ድጋፍ መስጠት፣ እንዲሁም ተንከባካቢ የሌላቸውን አዛውንቶች መንከባከብ።",
        en: "To rescue people with mental illness from the streets, provide treatment, counseling, vocational training, and support while also caring for abandoned elderly people."
      }
    },
    objectives: {
      title: { am: "ዓላማ", en: "Objectives" },
      content: {
        am: "ያገገሙ ሰዎችን በሙያ ስልጠና፣ በትብብርና በስራ እድሎች በማብቃት በራሳቸው የሚቆሙና ለማህበረሰቡ አርአያ እንዲሆኑ ማድረግ።",
        en: "To empower recovered beneficiaries through vocational training, partnerships, and employment opportunities so they become self-sufficient and role models in society."
      }
    }
  },
  contact: {
    address: {
      am: "ከእንጦጦ ቅዱስ ራጉኤል ወኤልያስ ቤተክርስትያን ወደ ፍተሻ በሚወስደው መንገድ፣ አዲስ አበባ",
      en: "Near Entoto St. Raguel and Elias Church, on the road leading toward Fetesha, Addis Ababa, Ethiopia"
    },
    phones: [
      "+251911004903",
      "+251953905050",
      "0118195444"
    ],
    email: "selihome@gmail.com",
    social: {
      telegram: "https://t.me/Selihommentallyill",
      facebook: "https://facebook.com/SelihomSupport"
    }
  }
};

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bank: { am: "የኢትዮጵያ ንግድ ባንክ", en: "Commercial Bank of Ethiopia (CBE)" },
    accountNumber: "1000275107518",
    accountName: "ሰሊሆም የአዕምሮ ህሙማን መርጃ ማህበር"
  },
  {
    bank: { am: "አቢሲንያ ባንክ", en: "Bank of Abyssinia" },
    accountNumber: "77984852",
    accountName: "Selihom Support Association"
  },
  {
    bank: { am: "አዋሽ ባንክ", en: "Awash Bank" },
    accountNumber: "01303572131300",
    accountName: "Selihom Support Association"
  }
];

export const VALUES: ValueItem[] = [
  { id: "val-1", title: { am: "ግልጽነት", en: "Transparency" }, description: { am: "ሁሉንም ሀብቶችና እርዳታዎች በግልጽነት ለህዝብ ማሳወቅ።", en: "Complete public accountability and clear reporting of all donations." } },
  { id: "val-2", title: { am: "ቅንነት", en: "Integrity" }, description: { am: "በፍቅርና በታማኝነት ማህበረሰቡን ማገልገል።", en: "Serving with genuine love, truthfulness, and unwavering dedication." } },
  { id: "val-3", title: { am: "ቤተሰባዊነት", en: "Family Spirit" }, description: { am: "ሁሉንም ተጠቃሚዎች እንደ አንድ ቤተሰብ መንከባከብ።", en: "Caring for every beneficiary as our beloved family member." } },
  { id: "val-4", title: { am: "የላቀ አገልግሎት", en: "Excellence in Service" }, description: { am: "ከፍተኛ ጥራት ያለው ሕክምናና ድጋፍ መስጠት።", en: "Providing top-quality medical, psychiatric, and social care." } },
  { id: "val-5", title: { am: "ያለ አድሎ ድጋፍ", en: "Non-discriminatory Support" }, description: { am: "ማንኛውንም ሰው ያለ አድሎ በእኩልነት መርዳት።", en: "Serving all human beings regardless of ethnicity or background." } },
  { id: "val-6", title: { am: "በእውቀትና በእምነት መመራት", en: "Guided by Knowledge and Faith" }, description: { am: "በሙያዊ እውቀትና በእምነት ማህበረሰቡን መምራት።", en: "Combining professional mental healthcare with compassionate faith." } }
];

export const INITIATIVES: Initiative[] = [
  {
    id: "mental-health",
    title: { am: "ጎዳና የወደቁትን ማንሳት", en: "Helping People with Mental Illness" },
    description: {
      am: "የአዕምሮ ህሙማንን ከጎዳና በማንሳት እስከሚያገግሙ ድረስ ሕክምና፣ ምግብና ማህበራዊ ድጋፍ ማድረግ።",
      en: "Rescuing people with mental illness from the streets, providing medical care, rehabilitation, and continuous support until they recover and can return to society."
    },
    goal: 5000000,
    raised: 3850000,
    image: healthCutout,
    tags: {
      am: ["ሕክምና", "የአዕምሮ ጤና", "ማቋቋም"],
      en: ["Medical Care", "Mental Health", "Rehabilitation"]
    },
    icon: "HeartPulse"
  },
  {
    id: "elderly-support",
    title: { am: "አዛውንቶችን መርዳት", en: "Supporting the Elderly" },
    description: {
      am: "ተንከባካቢና ቤተሰብ የሌላቸውን አዛውንቶች መጠለያ፣ ምግብ፣ ሕክምናና ፍቅር መስጠት።",
      en: "Providing shelter, care, nutrition, medical support, and family warmth to elderly people who have no family or caregivers."
    },
    goal: 3500000,
    raised: 2900000,
    image: elderlyDignityCutout,
    tags: {
      am: ["አዛውንቶች", "መጠለያ", "እንክብካቤ"],
      en: ["Elderly Care", "Shelter", "Dignity"]
    },
    icon: "HeartHandshake"
  },
  {
    id: "children-support",
    title: { am: "ህጻናትን መርዳት", en: "Helping Children" },
    description: {
      am: "ቤተሰብ የሌላቸውንና ተጋላጭ የሆኑ ህጻናት ሕክምና፣ ትምህርትና አጠቃላይ ድጋፍ ማድረግ።",
      en: "Providing medical care, education, and holistic support for vulnerable children without proper family care."
    },
    goal: 2500000,
    raised: 1800000,
    image: childrenCutout,
    tags: {
      am: ["ህጻናት", "ትምህርት", "ህክምና"],
      en: ["Children", "Education", "Healthcare"]
    },
    icon: "BookOpen"
  },
  {
    id: "skills-training",
    title: { am: "ስልጠናዎችን መስጠት", en: "Skills & Vocational Training" },
    description: {
      am: "ከህክምና በኋላ ተጠቃሚዎች የሙያ ስልጠና አግኝተው በራሳቸው እንዲቆሙና ወደ ማህበረሰብ እንዲቀላቀሉ ማስቻል።",
      en: "Providing vocational and life-skills training to recovered beneficiaries so they can become self-sufficient and successfully reintegrate into society."
    },
    goal: 3000000,
    raised: 2100000,
    image: eduCutout,
    tags: {
      am: ["የሙያ ስልጠና", "ስራ እድል", "ራስን መቻል"],
      en: ["Vocational Training", "Employment", "Self-Sufficiency"]
    },
    icon: "UtensilsCrossed"
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: "story-1",
    name: { am: "እህት አስቴር", en: "Sister Aster" },
    status: { am: "ሙሉ በሙሉ ያገገመች", en: "Fully Recovered & Restored" },
    storyBefore: {
      am: "በጎዳና ላይ ተጥላ ያለ ተንከባካቢና ህክምና በከፍተኛ ችግር ውስጥ ትኖር የነበረች።",
      en: "Living on street pavements with untreated illness and no shelter or support."
    },
    storyAfter: {
      am: "በሰሊሆም ማህበር ሙሉ የህክምና፣ የምግብና የስነ-ልቦና ድጋፍ አግኝታ አሁን በደስታና በሰላም ትኖራለች።",
      en: "Provided psychiatric treatment, warm clothing, and holistic care at Selihom. Now peaceful and healthy."
    },
    image: storyBefAft1
  },
  {
    id: "story-2",
    name: { am: "እህት ወርቅነሽ", en: "Sister Worknesh" },
    status: { am: "ያገገመችና በደስታ የምትኖር", en: "Rehabilitated & Thriving" },
    storyBefore: {
      am: "በጎዳና ላይ በከፍተኛ ተስፋ መቁረጥ፣ ህመም እና ጭንቀት ውስጥ ተጥላ የነበረች።",
      en: "Found in severe distress and vulnerability living on open street corners."
    },
    storyAfter: {
      am: "የአዕምሮ ህክምናና ፍቅር አግኝታ ሙሉ በሙሉ በመዳኗ አሁን በንጹህ ባህላዊ አልባሳት አጊጣ በደስታ ትኖራለች።",
      en: "Received full psychiatric care and family warmth. Now beautifully dressed in traditional Habesha attire with a joyful smile."
    },
    image: storyBefAft2
  },
  {
    id: "story-3",
    name: { am: "ወንድም አበበ", en: "Brother Abebe" },
    status: { am: "ያገገመና የተቋቋመ", en: "Recovered & Reintegrated" },
    storyBefore: {
      am: "ሲነሳ (ከለውጥ በፊት)፦ በአዕምሮ ህመም ምክንያት በጎዳና ላይ ተጥሎ ይኖር የነበረ።",
      en: "When Rescued (Before): Lived on street curbs struggling with severe untreated illness."
    },
    storyAfter: {
      am: "አሁን ላይ (ከለውጥ በኋላ)፦ በሰሊሆም ሙሉ ህክምና አግኝቶ ጤንነቱ ተመልሶ በክብር የሚኖር።",
      en: "Present Day (After): Restored to complete health, clean-shaven, well-dressed, and living with dignity."
    },
    image: storyBefAft3
  },
  {
    id: "story-4",
    name: { am: "ወንድም ወርቁ", en: "Brother Worku" },
    status: { am: "ሙሉ በሙሉ ያገገመና በስራ ላይ ያለ", en: "Fully Recovered & Working" },
    storyBefore: {
      am: "በጎዳና ላይ በቆሻሻ ቦታዎች ተጥሎ በከፍተኛ ህመም ውስጥ ይኖር የነበረ።",
      en: "Suffered on city streets without shelter, proper food, or medical attention."
    },
    storyAfter: {
      am: "በማህበሩ የህክምናና ተሃድሶ ድጋፍ አግኝቶ አሁን ሙሉ በሙሉ አግግሞ በሱፍ ልብስ አጊጦ የሚኖር።",
      en: "Rehabilitated and fully healed. Now neatly groomed, wearing a blue formal suit, and filled with hope."
    },
    image: storyBefAft4
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Abebe Wale",
    role: { am: "ያገገመ ተጠቃሚና በጎ ፈቃደኛ", en: "Recovered Beneficiary & Volunteer" },
    quote: {
      am: "ሰሊሆም ከጎዳና አንስቶ ህይወቴን መልሶልኛል። አሁን እኔም ሌሎችን ለመርዳት በጎ ፈቃደኛ ሆኛለሁ።",
      en: "Selihom rescued me from the street and gave me my life back. Now I volunteer to help others heal."
    },
    avatar: elderlyWiseCutout
  },
  {
    id: "test-2",
    name: "Almaz Tesfaye",
    role: { am: "የማህበረሰብ በጎ ፈቃደኛ", en: "Regular Community Volunteer, Addis Ababa" },
    quote: {
      am: "በየሳምንቱ ሰሊሆም ሲመጡ የአዕምሮ ህሙማን ሲድኑና ወደ ሰብአዊ ክብራቸው ሲመለሱ ማየት ትልቅ ደስታ ነው።",
      en: "Seeing people with mental illness heal and regain their human dignity every week brings unspeakable joy."
    },
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Dr. Semere Kebede",
    role: { am: "የህክምና በጎ ፈቃደኛ አማካሪ", en: "Volunteer Medical Consultant" },
    quote: {
      am: "የሰሊሆም ግልጽነትና ቁርጠኝነት ልዩ ነው። የሚደረገው እያንዳንዱ እርዳታ በቀጥታ ለህሙማኑ ሕክምና ይውላል።",
      en: "Selihom's transparency and dedication are exceptional. Every single donation goes directly to beneficiary medical care."
    },
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  }
];

export const IN_KIND_ITEMS: InKindItem[] = [
  {
    id: "ik-1",
    name: { am: "ጤፍና የእህል እቃዎች", en: "Teff & Food Grains (Sacks)" },
    category: "Food",
    neededQuantity: { am: "50 ጆንያ ጤፍ", en: "50 Sacks of Teff" },
    urgency: "High",
    description: {
      am: "ለ200 ተጠቃሚዎች ዕለታዊ ምግብ ለማዘጋጀት የሚሆን ጤፍ፣ ምስር፣ ስንዴና ዘይት።",
      en: "Teff grain, lentils, split peas, wheat flour, and cooking oil to feed 200 beneficiaries daily."
    }
  },
  {
    id: "ik-2",
    name: { am: "የህክምናና መድሃኒት አቅርቦት", en: "Psychiatric & Medical Supplies" },
    category: "Medical",
    neededQuantity: { am: "ለ100 ሰዎች ህክምና", en: "Monthly Medical Care Kits" },
    urgency: "High",
    description: {
      am: "ለአዕምሮ ህሙማን አስፈላጊ የሆኑ መድሃኒቶች፣ የቁስል ማከሚያዎችና የመጀመሪያ እርዳታ እቃዎች።",
      en: "Essential psychiatric medications, wound care supplies, vitamins, and first aid kits."
    }
  },
  {
    id: "ik-3",
    name: { am: "የአልባሳትና ብርድልብስ ድጋፍ", en: "Warm Clothing & Blankets" },
    category: "Clothing",
    neededQuantity: { am: "150 ብርድልብሶችና ልብሶች", en: "150 Blankets & Sweaters" },
    urgency: "High",
    description: {
      am: "ለአዛውንቶችና ለህሙማን የሚሆኑ ሞቅ ያሉ ብርድልብሶች፣ ጃኬቶችና ንጹህ ልብሶች።",
      en: "Warm blankets, jackets, coats, and clean clothes for elderly and rescued beneficiaries."
    }
  },
  {
    id: "ik-4",
    name: { am: "የንፅህና መጠበቂያ እቃዎች", en: "Hygiene & Sanitation Kits" },
    category: "Hygiene",
    neededQuantity: { am: "200 የንፅህና ስብስቦች", en: "200 Personal Hygiene Sets" },
    urgency: "Medium",
    description: {
      am: "ሳሙና፣ ሻምፖ፣ የጥርስ ብሩሽ፣ ፎጣዎችና የፅዳት እቃዎች።",
      en: "Body soaps, shampoos, toothbrushes, toothpaste, towels, and laundry detergents."
    }
  }
];

export const TIME_SLOTS = [
  "09:00 AM - 10:30 AM",
  "11:00 AM - 12:30 PM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM"
];

export const VISIT_TYPES = [
  { value: "individual", label: { am: "የግል / የቤተሰብ ጉብኝት", en: "Individual / Family Visit" }, icon: "User" },
  { value: "group", label: { am: "የጓደኞችና ቡድን ጉብኝት", en: "Friends & Small Group" }, icon: "Users" },
  { value: "corporate", label: { am: "የድርጅት / የማህበር ጉብኝት", en: "Corporate / NGO Team Day" }, icon: "Briefcase" },
  { value: "school", label: { am: "የትምህርት ቤት ጉብኝት", en: "School / Youth Tour" }, icon: "GraduationCap" },
  { value: "volunteer", label: { am: "የበጎ ፈቃደኝነት አገልግሎት", en: "Hands-on Volunteering Shift" }, icon: "Heart" },
];

export const FAQS = [
  {
    question: {
      am: "ሰሊሆም ማህበር ህጋዊ ፍቃድ ያለው ድርጅት ነው?",
      en: "Is Selihom an officially registered organization?"
    },
    answer: {
      am: "አዎ! ሰሊሆም ማህበር በኢትዮጵያ ፌደራላዊ ዲሞክራሲያዊ ሪፐብሊክ የሲቪል ማህበረሰብ ድርጅቶች ኤጀንሲ በምዝገባ ቁጥር 1113/2019 (የመዝገብ ቁጥር 6131) በህግ የተመዘገበና ፍቃድ ያለው በጎ አድራጎት ድርጅት ነው።",
      en: "Yes! Selihom is officially registered under Registration No. 1113/2019 (Code 6131) with the Federal Democratic Republic of Ethiopia Civil Society Organizations Agency."
    }
  },
  {
    question: {
      am: "ድርጅቱ ከየት ነው የተመሰረተው?",
      en: "Where and how was the organization founded?"
    },
    answer: {
      am: "ድርጅቱ የተመሰረተው በአቶ ሚኪያስ ለገሰ አባታቸውን በአዕምሮ ህመም ምክንያት ካጡ በኋላ በወሰዱት ቁርጠኝነት ነው። በሽቁር ቅዱስ ሚካኤል አቅራቢያ አነስተኛ ቤት ተከራይተው ጫማ በመወልወልና መኪና በማጠብ ነበር ስራውን የጀመሩት።",
      en: "It was founded by Mikiyas Legesse after losing his father to mental illness. He started with a small rented room near St. Michael Church in Shinkur, raising funds through shoe-shining and car washing."
    }
  },
  {
    question: {
      am: "እርዳታዎችን ወይም የገንዘብ ድጋፍን እንዴት መስጠት እችላለሁ?",
      en: "How can I make a financial or in-kind donation?"
    },
    answer: {
      am: "በኢትዮጵያ ንግድ ባንክ (1000275107518)፣ በአቢሲንያ ባንክ (77984852) ወይም በአዋሽ ባንክ (01303572131300) የባንክ ሂሳብ ቁጥሮቻችን ድጋፍ ማድረግ ይችላሉ። እንዲሁም ምግብ፣ አልባሳትና መድሃኒት በዓይነት መስጠት ይቻላል።",
      en: "You can transfer directly to our official bank accounts: Commercial Bank of Ethiopia (1000275107518), Abyssinia Bank (77984852), or Awash Bank (01303572131300), or deliver in-kind items to our shelter."
    }
  },
  {
    question: {
      am: "ማህበሩን በአካል ጎብኝቼ ማየት እችላለሁ?",
      en: "Can I schedule a visit to the Selihom shelter?"
    },
    answer: {
      am: "አዎ! በማንኛውም ጊዜ ከእንጦጦ ቅዱስ ራጉኤል ቤተክርስቲያን አቅራቢያ የሚገኘውን ማዕከላችንን መጎብኘት ይችላሉ። በድረ-ገጻችን ላይ ባለው የጉብኝት ቅጽ በመጠቀም ቀድመው ቀጠሮ መያዝ ይችላሉ።",
      en: "Absolutely! You are welcome to visit our shelter near Entoto St. Raguel Church. You can use our online booking form on this website to schedule a visit in advance."
    }
  }
];

export const STATS = [
  {
    number: "75%",
    label: { am: "የአዕምሮ ህሙማን", en: "Psychiatric Patients" },
    description: { am: "የአዕምሮ ህክምና፣ የመድሃኒትና የተሃድሶ ድጋፍ የሚያገኙ ተጠቃሚዎች", en: "Beneficiaries receiving psychiatric care, medication, and rehabilitation" },
    icon: "Stethoscope"
  },
  {
    number: "17%",
    label: { am: "አዛውንቶች", en: "Elderly Citizens" },
    description: { am: "መጠለያ፣ ምግብና የእንክብካቤ ድጋፍ የሚያገኙ ተጋላጭ አዛውንቶች", en: "Vulnerable senior citizens receiving housing, nutrition, and dignity care" },
    icon: "Home"
  },
  {
    number: "8%",
    label: { am: "ሕጻናት", en: "Children" },
    description: { am: "በትምህርት፣ በምግብና በማህበራዊ ድጋፍ የሚረዱ ህጻናት", en: "Orphaned and vulnerable children supported with education and meals" },
    icon: "GraduationCap"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "evt-1",
    title: { am: "የማዕከል ማስፋፊያና የመድሃኒት ማሰባሰቢያ ገቢ ማሰባሰቢያ", en: "Shelter Expansion & Psychiatric Medication Drive" },
    category: "fundraising",
    date: { am: "ነሐሴ 15, 2018", en: "August 21, 2026" },
    time: { am: "ከሰዓት 8:00 - 11:00", en: "02:00 PM - 05:00 PM" },
    location: { am: "እንጦጦ ራጉኤል ሰሊሆም ማዕከል", en: "Entoto Raguel Selihom Shelter" },
    description: {
      am: "ለተጨማሪ 50 ህሙማን አልጋዎችን፣ የንፅህና መስጫዎችንና የ3 ወር አጠቃላይ መድሃኒቶችን ለማሟላት የተዘጋጀ ገቢ ማሰባሰቢያ።",
      en: "Special fundraising effort to furnish 50 new recovery beds, expand sanitation facilities, and secure 3 months of psychiatric medication supplies."
    },
    goalAmount: 2000000,
    raisedAmount: 1250000,
    image: healthCutout
  },
  {
    id: "evt-2",
    title: { am: "የአዲስ ዓመት ማህበረሰባዊ የምግብና የፍቅር ድግስ", en: "New Year Holiday Community Feast Drive" },
    category: "fundraising",
    date: { am: "ጳጉሜ 5, 2018", en: "September 10, 2026" },
    time: { am: "ከጠዋቱ 3:00 - 11:00", en: "09:00 AM - 05:00 PM" },
    location: { am: "ሰሊሆም ማዕከል, አዲስ አበባ", en: "Selihom Center, Addis Ababa" },
    description: {
      am: "ለ200+ ተጠቃሚዎችና አዛውንቶች የበዓል መብራት፣ የአልባሳት ድጋፍና የበግ/የበሬ እርድ ድግስ ማዘጋጀት።",
      en: "Providing warm holiday meals, new traditional Habesha attire, and festive celebration for all 200+ beneficiaries and street elders."
    },
    goalAmount: 800000,
    raisedAmount: 510000,
    image: mealsCutout
  },
  {
    id: "evt-3",
    title: { am: "የበጎ ፈቃደኞች መርሐግብርና የልምድ ልውውጥ", en: "Monthly Volunteer Orientation & Open House" },
    category: "upcoming",
    date: { am: "መስከረም 10, 2019", en: "September 20, 2026" },
    time: { am: "ከጠዋቱ 4:00 - 7:00", en: "10:00 AM - 01:00 PM" },
    location: { am: "ሰሊሆም እንጦጦ ማዕከል", en: "Selihom Entoto Center" },
    description: {
      am: "አዳዲስ በጎ ፈቃደኞችን መቀበል፣ የማዕከሉን ስራዎች ማስጎብኘትና ተጠቃሚዎችን በምግብ ዝግጅትና እንክብካቤ ማገዝ።",
      en: "Welcoming new volunteers, guided tour of shelter facilities, and hands-on participation in lunch service and elder companionship."
    },
    image: aboutCutout
  },
  {
    id: "evt-4",
    title: { am: "የአዕምሮ ጤና ግንዛቤ ማስጨበጫ ሰልፍና ጉብኝት", en: "Mental Health Awareness & Stigma Reduction Walk" },
    category: "upcoming",
    date: { am: "ጥቅምት 1, 2019", en: "October 10, 2026" },
    time: { am: "ከጠዋቱ 2:00 - 6:00", en: "08:00 AM - 12:00 PM" },
    location: { am: "ከአራት ኪሎ እስከ እንጦጦ ራጉኤል", en: "Arat Kilo to Entoto Raguel" },
    description: {
      am: "በአዕምሮ ህመም ላይ ያለውን የተሳሳተ አመለካከት ለመቀየርና ህሙማንን ለማቀፍ የተዘጋጀ ሰላማዊ የእግር ጉዞ።",
      en: "Community awareness walk to dismantle mental health stigma and raise public support for street rehabilitation programs."
    },
    image: storyBefAft4
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    type: "image",
    title: { am: "የወንድም አበበ የህክምናና የተሃድሶ ስኬት", en: "Abebe's Rehabilitation Transformation" },
    category: "mental-health",
    url: storyBefAft3,
    description: { am: "ከጎዳና ህይወት ወጥቶ በሰሊሆም ሙሉ በሙሉ ያገገመው ወንድም አበበ።", en: "Brother Abebe after complete psychiatric recovery and grooming at Selihom." }
  },
  {
    id: "gal-2",
    type: "image",
    title: { am: "የአዛውንቶች እንክብካቤና ፍቅር", en: "Elderly Dignity & Care Package" },
    category: "elderly",
    url: elderlyDignityCutout,
    description: { am: "ለአዛውንቶች የሚደረግ የቤት ውስጥ ህክምናና የምግብ ድጋፍ።", en: "In-home nutritional care and healthcare visit for housebound senior." }
  },
  {
    id: "gal-3",
    type: "image",
    title: { am: "የህጻናት ትምህርትና ማጠናከሪያ ክፍል", en: "Children's Learning & Education Center" },
    category: "children",
    url: childrenCutout,
    description: { am: "ለተጋላጭ ህጻናት የሚደረግ የትምህርትና የመጻሕፍት ድጋፍ።", en: "Educational study groups and textbook distribution for vulnerable children." }
  },
  {
    id: "gal-4",
    type: "image",
    title: { am: "የዕለታዊ ማዕድ ዝግጅት በሰሊሆም", en: "Daily Warm Kitchen Meal Distribution" },
    category: "kitchen",
    url: mealsCutout,
    description: { am: "በየቀኑ ለ200+ ተጠቃሚዎች የሚዘጋጅ ንፁህና የተመጣጠነ ምግብ።", en: "Freshly prepared balanced meals served twice daily at Entoto shelter." }
  },
  {
    id: "gal-5",
    type: "image",
    title: { am: "የእህት ወርቅነሽ የማገገም ጉዞ", en: "Sister Worknesh's Journey to Joy" },
    category: "mental-health",
    url: storyBefAft2,
    description: { am: "በማህበሩ ህክምናና ፍቅር አግኝታ በሰላም የምትኖረው እህት ወርቅነሽ።", en: "Worknesh celebrating her recovery in clean Habesha traditional dress." }
  },
  {
    id: "gal-6",
    type: "image",
    title: { am: "የበጎ ፈቃደኞች አገልግሎትና ማዕድ ማደል", en: "Volunteers Serving Lunch to Beneficiaries" },
    category: "volunteers",
    url: aboutCutout,
    description: { am: "ወጣቶችና በጎ ፈቃደኞች ተጠቃሚዎችን ሲያገለግሉ።", en: "Youth volunteers actively serving meals and tutoring beneficiaries." }
  },
  {
    id: "gal-7",
    type: "image",
    title: { am: "የሰሊሆም መስራች አቶ ሚኪያስ ለገሰ ቃለ-መጠይቅ", en: "Mikiyas Legesse - Founder Interview & Story" },
    category: "mental-health",
    url: storyBefAft4,
    description: { am: "ሰሊሆም ማህበር እንዴት እንደተመሰረተና ያለፈበትን የጽናት መንገድ የሚያሳይ ምስል።", en: "Special documentary story covering the founding journey from shoe shining to Entoto shelter." }
  },
  {
    id: "gal-8",
    type: "image",
    title: { am: "የማዕከሉ ዕለታዊ አገልግሎትና የህክምና ሂደት", en: "Inside Selihom: Daily Healthcare & Kitchen Tour" },
    category: "kitchen",
    url: healthCutout,
    description: { am: "የአዕምሮ ህክምና፣ የምግብ አዘጋጀትና የአዛውንቶች እንክብካቤ ምስሎች።", en: "A full view of the kitchen, nursing station, and sleeping quarters." }
  }
];


