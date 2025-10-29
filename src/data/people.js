// People data for the Lab People section
// To add or edit people, update this file with:
// - id: unique identifier (use lowercase, no spaces, e.g., "dr-deng")
// - name: person's name
// - title: their role/title
// - photo: path to their photo (put images in public/images/)
// - introduction: full bio/introduction text (shown on detail page)

export const people = [
  {
    id: 'dr-deng',
    name: 'Dr. Deng',
    title: 'Principal Investigator',
    photo: '/images/with logo.jpeg',
    introduction: 'Leading research in cancer metabolism and therapeutic development. [Replace this with the full introduction text for Dr. Deng]'
  }
  // To add more people, copy the format above and add a new object:
  // {
  //   id: 'person-name',
  //   name: 'Person Name',
  //   title: 'Their Title',
  //   photo: '/images/person-photo.jpg',
  //   introduction: 'Their full introduction text here...'
  // },
];

// Helper function to get a person by ID
export const getPersonById = (id) => {
  return people.find(person => person.id === id);
};

