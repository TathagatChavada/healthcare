export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
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