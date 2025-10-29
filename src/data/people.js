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
    name: 'Dr. Su Deng',
    title: 'Principal Investigator',
    photo: '/images/su-deng.jpg',
    introduction: `Dr. Su Deng is an Assistant Professor in the Department of Urology at Yale School of Medicine. She is a cancer biologist whose research focuses on understanding the mechanisms of therapy resistance in advanced prostate cancer and developing strategies to overcome it.

Su received her Ph.D. in Biomedical Sciences from Weill Cornell Medicine and conducted her doctoral research at Memorial Sloan Kettering Cancer Center. She completed her postdoctoral training at UT Southwestern Medical Center in 2024 and subsequently joined Yale School of Medicine as a tenure-track faculty member. Her research program focuses on dissecting the molecular mechanisms of therapy resistance in advanced prostate cancer. The Deng Lab integrates functional genomics, organoid engineering, multi-omics profiling, and translational model systems to uncover new therapeutic strategies.

Su's work has been recognized with major awards, including the National Cancer Institute K22 Career Development Award and the PCF Young Investigator Award. Interested students and postdocs are encouraged to contact her for research opportunities.

Outside the lab, Su enjoys gardening and caring for her collection of over 60 rose varieties, fishing as a way to relax and reflect, and spending time with music and art through attending classical concerts and visiting museums. A devoted corgi lover, she shares her life with two spoiled corgis and loves taking them on road trips—they have even dipped their paws in both the Caribbean Sea and the Atlantic Ocean. `
  },
  {
    id: 'dr-luo',
    name: 'Dr. Anfeng Luo',
    title: 'Postdoctoral Associate',
    photo: '/images/anfeng-luo.jpg',
    introduction: `Anfeng Luo earned his Ph.D. in Immunology from Capital Medical University in 2024, where he studied how histone modifications and chaperones shape chromatin dynamics and cancer-related gene expression. His current research explores the mechanisms driving drug resistance in prostate cancer, aiming to develop new therapies and grow as an independent cancer biologist.

Outside the lab, Anfeng enjoys movies and often finds creative inspiration from them. He’s passionate about sports especially basketball and soccer, and loves trying new athletic activities and outdoor adventures.`
  },
  {
    id: 'Dr. Qian',
    name: 'Dr. Jiaying Qian',
    title: 'Postdoctoral Associate',
    photo: '/images/jiaying-qian.jpg',
    introduction: `Dr. Jiaying Qian is a postdoctoral associate in Deng Lab, where she focuses on prostate cancer research using organoid-based disease models and genetically engineered mouse models. She aims to uncover the molecular mechanisms underlying cancer progression and treatment resistance, with the goal of identifying new therapeutic strategies. Dr. Qian earned her M.D. degree in Surgery from Peking University, bringing a strong clinical foundation to her translational research in cancer biology.

Outside of the lab, Jiaying enjoys exploring new interests and creative pursuits. Her long-standing hobbies include traveling, crafting, singing, painting, figure skating, and spending quality time with kittens.`
  },
  {
    id: 'siyuan',
    name: 'Dr. Siyuan Cheng',
    title: 'Postdoctoral Associate (co-mentored)',
    photo: '/images/siyuan-cheng.jpg',
    introduction: `Dr. Siyuan Cheng is a postdoctoral associate in the Department of Urology at Yale University whose research centers on leveraging artificial intelligence and multi-omics integration to decode the cellular heterogeneity and progression dynamics of prostate cancer. His work combines large-scale single-cell, spatial, and epigenomic datasets with advanced computational modeling to uncover hidden regulatory networks driving lineage plasticity and therapy resistance. Dr. Cheng has developed several publicly available bioinformatics platforms—including HuPSA, ProAtlas, and PCTA—that have become widely used resources in the cancer research community. His research aims to establish data-driven frameworks to predict tumor evolution and identify therapeutically targetable states underlying prostate cancer progression.`
  },
  {
    id: 'dog',
    name: 'Acor (red and white) & Mulan (black head tri-color)',
    title: 'Title/Emotional Support Unit',
    photo: '/images/acor-mulan.jpg',
    introduction: `Acor was diagnosed with IVDD, a spinal condition that can cause paralysis in dogs. Su worked hard to make sure she had the savings ready for Acor’s surgery.

Mulan, on the other hand, has disliked most other dogs since joining the family in 2021. She’s only been to the dog park a few times, which was enough to confirm her opinion, saving Su plenty of time to work longer hours in the lab.`
  },
  {
    id: 'cat',
    name: 'Pixel (black) & Voxel (tuxedo)',
    title: 'Genotyping Pre-Disaster Control Team',
    photo: '/images/cats.jpg',
    introduction: `Recent studies in our lab suggest that petting the cat on the same day prior to genotyping significantly reduces the likelihood of being bitten by a mouse (N = 1, p = not applicable).`
  },
  {
    id: 'coco',
    name: 'Coco',
    title: 'Chief Happiness Officer (CHO)',
    photo: '/images/coco.jpeg',
    introduction: `Coco is a 5½-year-old bundle of energy who brings 120% of life wherever he goes. He joined our family four years ago and has made our days brighter—and definitely a little busier—ever since. Coco loves hiking and going on long walks with us, and he never hesitates to leap into the car for a new adventure. Beyond his playful spirit, Coco is also our loyal guardian, always watching over the family and protecting us day and night from the mysteries of nature.`
  }
];

// Helper function to get a person by ID
export const getPersonById = (id) => {
  return people.find(person => person.id === id);
};

