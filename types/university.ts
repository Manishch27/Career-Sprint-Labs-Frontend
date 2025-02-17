export interface University {
  id: string;
  name: string;
  logo: string;
  image: string;
  mode: 'Online' | 'Distance' | 'Regular';
  accreditation: {
    grade: string;
    body: string;
  };
  courses: {
    program: string;
    degree: string;
    duration: string;
    feesPerSemester: number;
    brochure: string;
  }[];
  location: {
    city: string;
    state: string;
  };
  approvals: {
    name: string;
    image: string;
    description: string;
  }[];
  about: string;
  keyHighlights: string[];
  emiOptions: string;
  whyChoose: string[];
  benefitsOfStudying: string[];
  examConduct: string;
  accreditationsApprovals: string[];
  academicApproach: string;
  quantitativeMetrics: {
    placementRate: string;
    corporateTieups: string;
    students: string;
    experience: string;
  };
  placements: {
    sectors: string[];
    images: string[];
  };
  moreThanDegree: {
    description: string;
    sampleDegree: {
      name: string;
      description: string;
      image: string;
    };
  };
  admissionProcess: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  UniBrochure: {
    file: string;
  };
}

