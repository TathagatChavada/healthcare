export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "male" as Gender,
  selectHospitals: "",
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};



export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Vadodara City Hospital - 45 Shubhanpura Road, Subhanpura, Vadodara, Gujarat 390023",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Sardar Patel Medical Center - 102 Race Course Circle, Alkapuri, Vadodara, Gujarat 390007",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Shree Krishna Healthcare - 22 Gotri Road, Gotri, Vadodara, Gujarat 390021",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Sunshine Multispeciality Hospital -  78 Waghodia Road, Karelibaug, Vadodara, Gujarat 390019",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Lotus Care Hospital - 14 Fatehgunj Main Road, Fatehgunj, Vadodara, Gujarat 390002",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Narmada Hospital -  88 Harni Road, Harni, Vadodara, Gujarat 390006",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Ayushman Hospital & Trauma Center -  67 Manjalpur Main Road, Manjalpur, Vadodara, Gujarat 390011",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Heritage General Hospital -  29 R.C. Dutt Road, Alkapuri, Vadodara, Gujarat 390020",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Samvedna Medical Institute - 53 Akota Road, Akota, Vadodara, Gujarat 390020",
  },
];


export const doctorsList = [
  {
    image: "/assets/images/dr-sharma.png",
    name: "Sanjay Singh",
  },

  {
    image: "/assets/images/dr-cameron.png",
    name: "Pooja Desai",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Ravi Shankar",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Arjun Nair",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Anjali Mehta",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Vikram Patel",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Ritu Verma",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Sneha Kapoor",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];
export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
