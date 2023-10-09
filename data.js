let data = [
  {
    type: 'apex',
    source: 'jaguar',
    description:
      'A jaguar is a large, powerful cat native to the Americas, known for its golden coat with dark rosettes. It’s the third-largest big cat globally and is found in various habitats, including rainforests and swamps. Jaguars are solitary, skilled hunters, and swimmers.',
    target: [
      'peccary',
      'capybara',
      'paca',
      'agouti',
      'deer',
      'opossum',
      'rabbit',
      'armadillo',
      'caiman',
      'turtle',
      'livestock',
      'various reptiles',
      'birds',
      'fish species'
    ],
    img: 'https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg'
  },
  {
    type: 'apex',
    source: 'harpy-eagle',
    description:
      'The harpy eagle is a massive bird of prey found in the tropical rainforests of Central and South America. It is known for its striking appearance, with a crown of feathers on its head and robust talons. Harpy eagles primarily prey on tree-dwelling mammals like sloths, monkeys, and opossums.',
    target: ['sloth', 'monkey', 'opossum'],
    img: 'https://animals.sandiegozoo.org/sites/default/files/2016-10/harpy_eagle_01.jpg'
  },
  {
    type: 'meso',
    source: 'ocelot',
    description:
      'The ocelot is a medium-sized wild cat found in various regions of the Americas. It has a beautifully patterned coat and is known for its agility and hunting skills. Ocelots prey on a variety of animals, including small rodents, birds, snakes, iguanas, and even young deer and rabbits.',
    target: [
      'sloth',
      'small rodent (mostly)',
      'bird (e.g. quail)',
      'snake',
      'iguana',
      'other lizard',
      'baby peccary',
      'young deer',
      'rabbit',
      'fish',
      'crab'
    ],
    img: 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/ocelot-square-1-400x400.jpg.optimal.jpg'
  },
  {
    type: 'meso',
    source: 'opossum',
    description:
      'The opossum is a marsupial found in the Americas. It is known for its unique adaptations, such as playing dead when threatened. Opossums have a diverse diet, including insects, worms, carrion, reptiles, amphibians, birds and their eggs, crustaceans, berries, fruits, and small mammals.',
    target: [
      'insect',
      'worm',
      'carrion',
      'reptile',
      'amphibian',
      'bird and their egg',
      'crustacean',
      'berry',
      'fruit',
      'small mammal'
    ],
    img: 'https://cdn.theatlantic.com/thumbor/ih84AIMf_7XUZiLAdFNSL1dCafg=/630x0:3330x2700/1080x1080/media/img/mt/2022/07/opposum_/original.jpg'
  },
  {
    type: 'mostly prey',
    source: 'sloth',
    description:
      'The two-toed sloth is a slow-moving, tree-dwelling mammal found in Central and South America. It primarily feeds on a diet of leaves, making it mostly vegetarian. However, it may occasionally consume eggs and lizards.',
    target: ['mostly vegetarian', 'egg', 'lizard'],
    img: 'https://i.natgeofe.com/n/ba31e95a-4a88-4cd4-bf5c-e636f93fae2a/hoffmans-two-toed-sloth_thumb_2x3.JPG'
  },
  {
    source: 'spectacled-owl',
    description:
      'The spectacled owl is a large, tropical owl with distinctive facial markings resembling glasses or spectacles. It preys on a variety of animals, including sloths, mice (and other small rodents), bats, skunks, and possums.',
    img: 'https://cdn.britannica.com/66/21766-050-3C7C9E15/owl-American-tropics.jpg'
  },
  {
    type: 'invasive species! Prey',
    source: 'quail',
    description:
      'Quail are small birds often hunted for sport. They primarily have a vegetarian diet, feeding on seeds, grains, and plants.',
    img: 'https://i.natgeofe.com/k/377f7909-0138-4b7a-b5e6-61f73484c903/CALIFORNIA-QUAIL-1_2x3.jpg'
  },
  {
    type: 'a rodent, Prey',
    source: 'guinea-pig',
    description:
      'The guinea pig is a small rodent known for its gentle nature. It is primarily herbivorous, consuming a diet of vegetation, including various plants and greens.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/800px-George_the_amazing_guinea_pig.jpg'
  },
  {
    type: 'a big rodent! Prey',
    source: 'capybara',
    description:
      'The capybara is the largest rodent in the world, native to South America. Capybaras are herbivorous animals that primarily feed on aquatic plants and vegetation, making them a target for predators due to their size.',
    img: 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg'
  },
  {
    type: 'lizard, Prey',
    source: 'iguana',
    description:
      'Iguanas are a group of large lizards found in various parts of the world. They are primarily herbivorous, feeding on leaves, fruits, and plants, but they may also be preyed upon by other animals.',
    img: 'https://i.natgeofe.com/n/34b9d763-a5ef-434b-8d13-48f4919ca078/green-iguana_thumb_2x3.jpg'
  }
];
