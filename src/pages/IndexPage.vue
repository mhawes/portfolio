<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-lg bg-grey-2: dark">
      <q-card-section class="text-center" >
        <q-avatar size="160px">
          <img src="me.jpg" style="width: 160px; height: 160px;"/>
        </q-avatar>
        <div class="text-h3 text-weight-thin">Martin Hawes</div>
        <a href="mailto:hawesmartin@googlemail.com">hawesmartin@googlemail.com</a>
      </q-card-section>
      <q-card-section class="q-pa-md text-weight-light text-justify">
        <p>
        A highly skilled and versatile software developer with over a decade of experience in the industry.
        </p>
        <p>
        I excel in delivering robust and scalable solutions, with a strong ability to communicate effectively and adapt to various project requirements.
        </p>
        <p>
        My extensive background includes requirements analysis, software and interface design, implementation, integration, and testing for complex systems.
        </p>
        <p>
        I have successfully collaborated in multi-disciplinary teams, utilizing agile (Scrum) and waterfall methodologies to meet stringent design, implementation, and delivery standards across diverse technologies.
        </p>
        <p>
        I hold a BSc in Computer Science from the University of Hertfordshire, where I graduated with first-class honors.
        </p>
        <p>
        I am currently seeking contracting opportunities where I can leverage my expertise to deliver high-quality software solutions.
        </p>
      </q-card-section>
    </q-card>

    <div class="q-pa-md" />

    <q-card class="q-pa-lg bg-grey-2: dark" flat>
      <q-card-section class="text-center">
      <div class="text-h5 text-weight-bold">Skills</div>
      <div class="text-weight-light">I have experience with the following skills and technologies: (select to filter my experience)</div>
      <q-separator spaced />
      <q-chip
        v-for="skill in displayedSkills"
        clickable
        @click="toggleFilteredSkill(skill)"
        :key="skill"
        size="md"
        :color="filteredSkills.includes(skill) ? 'accent' : 'grey-3'"
        :text-color="filteredSkills.includes(skill) ? 'white' : 'primary'">
        {{ skill }}
      </q-chip>
      <q-btn flat rounded size="sm" color="positive" @click="toggleSkills">
        {{ showAllSkills ? 'Show Less' : 'Show All...' }}
      </q-btn>
      <q-btn v-if="filteredSkills.length > 0" flat rounded size="sm" color="negative" icon="delete" @click="filteredSkills = []">
        Clear
      </q-btn>
      </q-card-section>
    </q-card>

    <q-timeline layout="dense">
      <q-timeline-entry heading>Employment</q-timeline-entry>
      <div v-if="displayedEmploymentHistory.length === 0" class="text-weight-light text-center">No employment history found for selected skills</div>
      <q-timeline-entry
        v-for="job in displayedEmploymentHistory"
        icon="work"
        :key="job.id"
        color="accent"
        :title="job.company"
        :subtitle="job.title + ' - ' + job.period"
        :side="job.id % 2 === 0 ? 'right' : 'left'">
        <template v-slot:default>
          <q-list dense>
              <q-item v-for="(desc, index) in job.description" :key="index">
              <q-item-section class="text-weight-light">{{ desc }}</q-item-section>
              </q-item>
          </q-list>
          <div class="text-bold">Skills:</div>
          <q-chip
            v-for="skill in job.skills"
            :key="skill"
            size="md"
            color="grey-3"
            text-color="primary">
            {{ skill }}
          </q-chip>
        </template>
      </q-timeline-entry>
    </q-timeline>

    <q-separator spaced />

    <q-timeline layout="dense">
      <q-timeline-entry heading>Education</q-timeline-entry>
      <div v-if="displayedEducationHistory.length === 0" class="text-weight-light text-center">No education history found for selected skills</div>
      <q-timeline-entry
        v-for="education in displayedEducationHistory"
        icon="school"
        color="secondary"
        :key="education.id"
        :title="education.institution"
        :subtitle="education.period"
        side="right">
        <template v-slot:default>
          <q-list dense>
            <q-item v-for="(desc, index) in education.description" :key="index">
              <q-item-section class="text-weight-light">{{ desc }}</q-item-section>
            </q-item>
          </q-list>
          <div class="text-bold">Skills:</div>
          <q-chip
            v-for="skill in education.skills"
            :key="skill"
            size="md"
            color="grey-3"
            text-color="secondary">
            {{ skill }}
          </q-chip>
        </template>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Job {
  id: number;
  title: string;
  company: string;
  description: string[];
  skills: string[];
  period: string;
}

const showAllSkills = ref(false);
const displayedSkills = computed(() => {
  return showAllSkills.value ? getSkillsSet() : getSkillsSet().slice(0, 10);
});
const filteredSkills = ref<string[]>([]);
const displayedEmploymentHistory = computed(() => {
  if (filteredSkills.value.length === 0) {
    return employmentHistory.value;
  }
  return employmentHistory.value.filter(job => job.skills.some(skill => filteredSkills.value.includes(skill)));
});

const displayedEducationHistory = computed(() => {
  if (filteredSkills.value.length === 0) {
    return educationHistory.value;
  }
  return educationHistory.value.filter(education => education.skills.some(skill => filteredSkills.value.includes(skill)));
});

function toggleFilteredSkill(skill: string) {
  if (filteredSkills.value.includes(skill)) {
    filteredSkills.value = filteredSkills.value.filter(s => s !== skill);
  } else {
    filteredSkills.value = [...filteredSkills.value, skill];
  }
}

function getSkillsSet(): string[] {
  const skillsSet = new Set<string>();

  employmentHistory.value.forEach(job => {
    job.skills.forEach(skill => skillsSet.add(skill));
  });

  educationHistory.value.forEach(education => {
    education.skills.forEach(skill => skillsSet.add(skill));
  });

  return Array.from(skillsSet).sort();
}

function toggleSkills() {
  showAllSkills.value = !showAllSkills.value;
}

const employmentHistory = ref<Job[]>([
  {
    id: 4,
    title: 'Software Engineer',
    company: 'Build Test Solutions',
    description: [
      'Development of azure cloud based C# backend, ensuring high performance and scalability',
      'Design and development of Vue.js based frontend for Raspberry Pi based test equipment, providing a user-friendly interface for data visualization and control',
      'Integration of Azure AI search to enhance data retrieval capabilities, improving the efficiency of search operations',
      'Development of C++ based test equipment firmware, ensuring reliable and accurate data collection and processing',
      'Collaboration with cross-functional teams to define project requirements and deliver solutions that meet business objectives',
      'Continuous monitoring and optimization of system performance to meet evolving project needs'
    ],
    skills: ['C#', '.NET', 'Azure', 'Vue.js', 'Javascript', 'Cosmos DB', 'Continuous Integration/Delivery', 'Software Architecture', 'Test-Driven Development (TDD)', 'Azure AI Search', 'C++', 'Ruby', 'Embedded Systems', 'Linux', 'Raspberry Pi'],
    period: 'Sep 2023 - Present'
  },
  {
    id: 5,
    title: 'Senior Software Engineer',
    company: 'Royal Society for the Protection of Birds (RSPB)',
    description: [
      'Development of azure cloud angular website, ensuring high performance and scalability',
      'Design and development of microservice C# backend, implementing RESTful APIs and integrations',
      'Development and integration with Magnolia CMS, customizing templates and components to meet business requirements',
      'Mentoring and support for junior developers, conducting code reviews, and providing guidance on best practices and design patterns'
    ],
    skills: ['C#', '.NET', 'Azure', 'Angular', 'Javascript', 'Scrum', 'Test-Driven Development (TDD)', 'Software Architecture', 'Docker', 'Magnolia CMS'],
    period: 'Sep 2021 - July 2023'
  },
  {
    id: 6,
    title: 'Software Engineer',
    company: 'Immense Simulations',
    description: [
      'Cloud based traffic simulation stack. Primarily focused on API integration and dataset processing',
      'Implementation and maintenance of suite of automated tests'
    ],
    skills: ['Java', 'AWS', 'MongoDB', 'Scrum', 'REST API Design', 'Automated Testing', 'Test-Driven Development (TDD)'],
    period: 'Feb 2021 - August 2021'
  },
  {
    id: 7,
    title: 'Software Developer',
    company: 'Rightmove',
    description: [
      'Design and development of micro-service and React / Angular based applications within the internal systems team to meet a variety of business requirements.',
      'Integration of Sugar CRM with existing estate.',
      'Design and implementation of real time data synchronisation service to keep half a million records up to date using Kafka queues.',
      'Implementation of API gateway platform (Kong)'
    ],
    skills: ['Java', 'React', 'Angular', 'Javascript', 'Python', 'PHP', 'Continuous Integration/Delivery', 'Scrum', 'Oracle', 'Customer relationship management (CRM)', 'REST API Design', 'Microservices', 'Kafka', 'Test-Driven Development (TDD)'],
    period: 'May 2017 - Feb 2021'
  },
  {
    id: 8,
    title: 'Senior Software Engineer',
    company: 'Novacroft',
    description: [
      'Development of Oyster card application processing software including customer facing website and internal administration tools as part of a Scrum team.',
      'Maintenance of legacy software',
      'Deployment of software to on premise production servers and liaison with clients to ensure successful delivery.'
    ],
    skills: ['Java', 'Javascript', 'Oracle', 'Interface Design', 'Software Architecture', 'Scrum', 'Software Delivery'],
    period: 'Dec 2015 - May 2017'
  },
  {
    id: 9,
    title: 'Software Engineer',
    company: 'Lockheed Martin UK',
    description: [
      'Developed software interfaces and integrated third-party sensor systems.',
      'Collaborated with suppliers and multi-disciplinary team members to ensure timely and cost-effective project success from requirements gathering to completion.',
      'Designed and implemented distributed task resilience management software as part of an agile team.',
      'Developed and integrated embedded, real-time communication stack software using MISRA C++.'
    ],
    skills: ['Embedded Systems', 'C++', 'UML Design', 'Real-Time Systems', 'Agile', 'Software Testing'],
    period: 'November 2013 - December 2015'
  }
]);

interface Education {
  id: number;
  institution: string;
  period: string;
  description: string[];
  skills: string[];
}

const educationHistory = ref<Education[]>([
  {
    id: 1,
    institution: 'University of Hertfordshire, Hatfield',
    period: 'Sep 2010 - May 2013',
    description: [
      'Achieved outstanding 1st class honours. Awarded University Prize for outstanding achievement.',
      'Further Object Oriented Design (OOP Design in Java, UML)',
      'Real Time Systems (Small Embedded Systems, Concurrent Programming)',
      'Programming Language Design and Implementation (Lexical Analyser/Parser Implementation, Type Systems, Language Design)',
      'Computer Architecture (MIPS Instruction Set, Multiprocessor Architectures)'
    ],
    skills: ['Java', 'UML', 'Embedded Systems', 'Concurrent Programming', 'Lexical Analysis', 'Parser Implementation', 'Type Systems', 'Language Design', 'MIPS', 'Multiprocessor Architectures']
  },
  {
    id: 2,
    institution: 'Denbigh School, Milton Keynes',
    period: '2004 - 2010',
    description: [
      'A-Level: Computer Studies, Music Technology, Music.',
      'GCSE: Mathematics, English Literature, English Language, Science (Double Award)'
    ],
    skills: ['Computer Studies', 'Music Technology', 'Music', 'Mathematics', 'English Literature', 'English Language', 'Science']
  },
  {
    id: 3,
    institution: 'Langley Therapy and Training - Certificate in Counselling Skills',
    period: 'Sep 2023 - Present',
    description: [
      'Active listening skills',
      'Feedback skills and techniques',
      'Understanding and managing emotions',
      'Building rapport and trust',
      'Empathy, compassion, and ethical considerations in therapy',
    ],
    skills: ['Active Listening', 'Feedback', 'Emotional Intelligence', 'Communication', 'Conflict Resolution', 'Rapport Building', 'Empathy', 'Ethics']
  }
]);
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
