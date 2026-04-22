

const locations = [
  {
    name: "Central Dhaka",
    location: {
      type: "Point",
      coordinates: [90.4125, 23.8103] // [longitude, latitude]
    }
  },
  {
    name: "Gulshan",
    location: {
      type: "Point",
      coordinates: [90.3956, 23.7937]
    }
  },
  {
    name: "Dhanmondi",
    location: {
      type: "Point",
      coordinates: [90.3948, 23.7509]
    }
  },
  {
    name: "Mirpur",
    location: {
      type: "Point",
      coordinates: [90.3548, 23.8103]
    }
  },
  {
    name: "Uttara",
    location: {
      type: "Point",
      coordinates: [90.3935, 23.8608]
    }
  }
];

const users = [
  {
    email: "user1@example.com",
    firstName: "Aminul",
    lastName: "Islam",
    role: "user",
    fee: 500,
    departments: ["Cardiology"],
    location: { type: "Point", coordinates: [23.8200, 90.4150] } // Near Dhaka
  },
  {
    email: "user2@example.com",
    firstName: "Rahman",
    lastName: "Hossain",
    role: "doctor",
    fee: 700,
    departments: ["Dermatology"],
    location: { type: "Point", coordinates: [23.8050, 90.4000] } // Near Dhaka
  },
  {
    email: "user3@example.com",
    firstName: "Sadia",
    lastName: "Karim",
    role: "admin",
    fee: 0,
    departments: ["Administration"],
    location: { type: "Point", coordinates: [23.8150, 90.4200] } // Near Dhaka
  },
  {
    email: "user4@example.com",
    firstName: "Mahbub",
    lastName: "Alam",
    role: "doctor",
    fee: 600,
    departments: ["Neurology"],
    location: { type: "Point", coordinates: [23.8250, 90.4100] } // Near Dhaka
  },
  {
    email: "user5@example.com",
    firstName: "Nasrin",
    lastName: "Jahan",
    role: "user",
    fee: 550,
    departments: ["Orthopedics"],
    location: { type: "Point", coordinates: [23.8180, 90.4050] } // Near Dhaka
  },
  {
    email: "user6@example.com",
    firstName: "Kamrul",
    lastName: "Hasan",
    role: "doctor",
    fee: 800,
    departments: ["Gastroenterology"],
    location: { type: "Point", coordinates: [23.8120, 90.4250] } // Near Dhaka
  },
  {
    email: "user7@example.com",
    firstName: "Mariam",
    lastName: "Akter",
    role: "doctor",
    fee: 750,
    departments: ["Pediatrics"],
    location: { type: "Point", coordinates: [23.8190, 90.4070] } // Near Dhaka
  },
  {
    email: "user8@example.com",
    firstName: "Jamil",
    lastName: "Ahmed",
    role: "user",
    fee: 450,
    departments: ["ENT"],
    location: { type: "Point", coordinates: [23.8135, 90.4185] } // Near Dhaka
  },
  {
    email: "user9@example.com",
    firstName: "Fahim",
    lastName: "Uddin",
    role: "doctor",
    fee: 720,
    departments: ["Ophthalmology"],
    location: { type: "Point", coordinates: [23.8070, 90.4160] } // Near Dhaka
  },
  {
    email: "user10@example.com",
    firstName: "Tasnim",
    lastName: "Chowdhury",
    role: "user",
    fee: 500,
    departments: ["Gynecology"],
    location: { type: "Point", coordinates: [23.8215, 90.4080] } // Near Dhaka
  }
];


const termsAndConditions = [
  {
    section: 1,
    title: 'General Terms',
    content:
      'By accessing and using Tasnim Tutors, you agree to comply with these Terms and Conditions. Tasnim Tutors is a platform that connects students with tutors for home and online learning sessions. We may update these terms at any time, and continued use of the platform means you accept those changes.'
  },
  {
    section: 2,
    title: 'Service Description',
    content:
      'Tasnim Tutors facilitates communication between students and tutors. Class details, schedule, location (home or online), and fees are agreed directly between student and tutor through the platform. We do not guarantee instant availability of tutors.'
  },
  {
    section: 3,
    title: 'Educational Disclaimer',
    content:
      'Tasnim Tutors does not provide educational certification or guarantee academic results. All teaching services are provided independently by tutors. Students and guardians are responsible for evaluating tutor suitability.'
  },
  {
    section: 4,
    title: 'User Accounts',
    content:
      'Users may need to create an account to access features. You are responsible for keeping your login details secure. We may suspend or remove accounts that violate our rules or misuse the platform.'
  },
  {
    section: 5,
    title: 'Classes & Responsibilities',
    content:
      'Students and tutors are responsible for agreeing on schedules, subjects, and locations. Users must provide accurate information. Tasnim Tutors is not responsible for missed classes, delays, or cancellations from either side.'
  },
  {
    section: 6,
    title: 'Payments',
    content:
      'Payments may be handled through the platform or directly between student and tutor depending on the service type. Users must ensure correct payment details. Refunds depend on individual cases and agreed policies.'
  },
  {
    section: 7,
    title: 'Privacy and Data Protection',
    content:
      'We value your privacy. Your data is collected and used according to our Privacy Policy. By using Tasnim Tutors, you agree to the collection and use of your information for providing services.'
  },
  {
    section: 8,
    title: 'Prohibited Activities',
    content:
      'Users must not misuse the platform, including fraud, impersonation, harassment, or sharing false information. Any attempt to exploit students, parents, or tutors may result in account suspension.'
  },
  {
    section: 9,
    title: 'Third-Party Responsibility',
    content:
      'Tutors are independent individuals. Tasnim Tutors does not control or guarantee the teaching quality, results, or performance of any tutor.'
  },
  {
    section: 10,
    title: 'Limitation of Liability',
    content:
      'Tasnim Tutors is not responsible for any direct or indirect issues arising from tutoring sessions, including academic performance, delays, or disputes between users. The platform is provided "as is" without guarantees.'
  },
  {
    section: 11,
    title: 'Contact Us',
    content:
      'For any questions regarding these Terms and Conditions, contact us at support@tasnimtutors.com.'
  }
];

const privacyPolicy = [
  {
    section: 1,
    title: 'Introduction',
    content:
      'Tasnim Tutors is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform to connect students and tutors.'
  },
  {
    section: 2,
    title: 'Information We Collect',
    content:
      'We collect personal information such as name, phone number, email, location, academic level, and subject preferences. We may also collect device and usage data to improve our services.'
  },
  {
    section: 3,
    title: 'How We Use Your Information',
    content:
      'Your information is used to connect students with tutors, manage class scheduling, enable communication, process payments, and improve user experience. We may also send notifications about bookings or updates.'
  },
  {
    section: 4,
    title: 'Sharing of Information',
    content:
      'Your information may be shared with tutors to facilitate learning sessions. We do not sell personal data. Data may be shared with trusted service providers such as payment systems or when required by law.'
  },
  {
    section: 5,
    title: 'Student-Tutor Communication',
    content:
      'Messages and communication between students and tutors may be stored to improve service quality and resolve disputes. However, learning content remains private between both parties.'
  },
  {
    section: 6,
    title: 'Data Security',
    content:
      'We use security measures to protect your data. However, no system is fully secure, so users should also take care when sharing sensitive information.'
  },
  {
    section: 7,
    title: 'Cookies and Tracking',
    content:
      'We use cookies to improve user experience, analyze traffic, and personalize content. You can manage cookies through your browser settings.'
  },
  {
    section: 8,
    title: 'User Rights',
    content:
      'You can access, update, or request deletion of your data. You may also opt out of non-essential notifications at any time.'
  },
  {
    section: 9,
    title: 'Data Retention',
    content:
      'We keep your data only as long as needed to provide services or meet legal requirements. After that, it is securely deleted or anonymized.'
  },
  {
    section: 10,
    title: 'Children’s Privacy',
    content:
      'Tasnim Tutors does not knowingly collect data from children under 13 without parental consent. If such data is found, it will be removed.'
  },
  {
    section: 11,
    title: 'Updates to Policy',
    content:
      'We may update this Privacy Policy from time to time. Updates will be posted on this page, and continued use means acceptance.'
  },
  {
    section: 12,
    title: 'Contact Us',
    content:
      'If you have any questions about this Privacy Policy, contact us at privacy@tasnimtutors.com.'
  }
];

export default users;









export { termsAndConditions, privacyPolicy, users }
