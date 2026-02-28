export type ActivityType = 'Game' | 'Sensory' | 'Craft' | 'Active' | 'Learning' | 'Creative';
export type EnergyLevel = 'tired' | 'normal' | 'active';
export type SpaceRequirement = 'small' | 'normal' | 'yard';

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  ageMin: number;
  ageMax: number;
  durationMin: number;
  durationMax: number;
  types: ActivityType[];
  tags: string[];
  energyLevel: EnergyLevel;
  space: SpaceRequirement;
  materials: string[];
  steps: string[];
  variants: string[];
  situations: string[];
}

export const activities: Activity[] = [
  {
    id: 'sound-hide-and-seek',
    title: 'Sound Hide and Seek',
    description: 'A fun game of auditory hide and seek that keeps kids engaged while you can relax on the couch.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    ageMin: 2,
    ageMax: 5,
    durationMin: 10,
    durationMax: 20,
    types: ['Game', 'Active'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['A phone or a small toy that makes noise'],
    steps: [
      'Hide the noise-making object somewhere in the room while your child covers their eyes.',
      'Turn on the sound or set a timer to ring.',
      'Tell your child to find the object by following the sound.',
      'Cheer them on as they get closer!'
    ],
    variants: ['Hide multiple objects and see how many they can find in 2 minutes.'],
    situations: ['rainy-day', 'screen-free']
  },
  {
    id: 'pillow-mountain',
    title: 'Pillow Mountain',
    description: 'Turn your living room into a soft, safe climbing adventure using every pillow and cushion you own.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    ageMin: 1,
    ageMax: 4,
    durationMin: 15,
    durationMax: 30,
    types: ['Active', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['All the pillows and cushions you can find'],
    steps: [
      'Gather all pillows, couch cushions, and soft blankets in the center of the room.',
      'Pile them up to create a giant "mountain".',
      'Let your child climb, roll, and jump on the soft mountain.',
      'You can lie at the base and be the "bridge troll" they have to pass.'
    ],
    variants: ['Hide small toys in the mountain for them to "mine".'],
    situations: ['rainy-day', 'sick-day', 'screen-free']
  },
  {
    id: 'water-painting',
    title: 'Water Painting',
    description: 'Zero-mess outdoor art! Let them paint the fence or sidewalk with plain water and watch it magically disappear as it dries.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ageMin: 1,
    ageMax: 6,
    durationMin: 15,
    durationMax: 45,
    types: ['Creative', 'Sensory'],
    tags: [],
    energyLevel: 'normal',
    space: 'yard',
    materials: ['A bucket of water', 'Large paintbrushes or sponges'],
    steps: [
      'Fill a bucket or large bowl with plain water.',
      'Give your child paintbrushes, rollers, or sponges.',
      'Let them "paint" the fence, sidewalk, or side of the house.',
      'Watch the art disappear as it dries, then start again!'
    ],
    variants: ['Add a drop of food coloring for tinted water (be careful of staining).'],
    situations: ['no-mess', 'screen-free']
  },
  {
    id: 'tape-road',
    title: 'Masking Tape Road',
    description: 'Create an entire city infrastructure on your living room floor using just masking tape and toy cars.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    ageMin: 2,
    ageMax: 6,
    durationMin: 20,
    durationMax: 60,
    types: ['Creative', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['Masking tape or painter\'s tape', 'Toy cars'],
    steps: [
      'Use tape to create a road network on the floor or carpet.',
      'Add parking lots, intersections, and dead ends.',
      'Bring out the toy cars and let your child drive around the city.',
      'You can sit back and give "traffic reports" or directions.'
    ],
    variants: ['Use blocks to build houses along the road.'],
    situations: ['rainy-day', 'no-mess', 'screen-free', 'quiet']
  },
  {
    id: 'sink-or-float',
    title: 'Sink or Float Experiment',
    description: 'A simple science experiment that keeps kids fascinated as they test which household items sink and which float.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    ageMin: 3,
    ageMax: 6,
    durationMin: 15,
    durationMax: 30,
    types: ['Learning', 'Sensory'],
    tags: [],
    energyLevel: 'normal',
    space: 'small',
    materials: ['A large bowl or plastic bin', 'Water', 'Various small household items (coin, plastic toy, leaf, rock, sponge)'],
    steps: [
      'Fill the container with water.',
      'Gather the items and place them next to the water.',
      'Before dropping each item, ask your child to guess: "Will it sink or float?"',
      'Drop the item in and observe what happens.',
      'Sort the items into a "sink" pile and a "float" pile.'
    ],
    variants: ['Try making a boat out of aluminum foil to see how many pennies it can hold before sinking.'],
    situations: ['rainy-day', 'screen-free']
  },
  {
    id: 'shadow-puppets',
    title: 'Shadow Puppets',
    description: 'Turn off the lights and use a flashlight to create magical shadow stories on the wall.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ageMin: 2,
    ageMax: 6,
    durationMin: 10,
    durationMax: 20,
    types: ['Creative', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'small',
    materials: ['A flashlight or phone light', 'A blank wall'],
    steps: [
      'Turn off the lights in the room or wait until dark.',
      'Shine the flashlight against a blank wall.',
      'Use your hands to make different shapes (dog, bird, spider) in the light beam.',
      'Encourage your child to try making their own shapes or tell a story with the shadows.'
    ],
    variants: ['Cut out shapes from cardboard and tape them to popsicle sticks for custom puppets.'],
    situations: ['quiet', 'screen-free', '5-minute']
  },
  {
    id: 'color-hunt',
    title: 'Color Hunt',
    description: 'A scavenger hunt that burns energy and teaches colors, while you sit back and give the instructions.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    ageMin: 2,
    ageMax: 5,
    durationMin: 10,
    durationMax: 20,
    types: ['Learning', 'Active'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['A basket or bag', 'Pieces of colored paper (optional)'],
    steps: [
      'Pick a color for the hunt (e.g., "Let\'s find everything red!").',
      'Give your child the basket and ask them to collect 5 items of that color.',
      'You can sit on the couch while they run around searching.',
      'Once they return, count the items together and pick a new color.'
    ],
    variants: ['Hunt for shapes instead of colors (e.g., "Find 3 things that are circles").'],
    situations: ['rainy-day', 'screen-free', '5-minute']
  },
  {
    id: 'indoor-obstacle-course',
    title: 'Indoor Obstacle Course',
    description: 'Transform your living room into a challenging obstacle course using pillows, chairs, and blankets.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    ageMin: 3,
    ageMax: 6,
    durationMin: 20,
    durationMax: 45,
    types: ['Active', 'Game'],
    tags: [],
    energyLevel: 'active',
    space: 'normal',
    materials: ['Pillows', 'Chairs', 'Blankets', 'Books'],
    steps: [
      'Set up a course using household items.',
      'Example: Crawl under the chairs, jump over the pillows, walk the tightrope (a string on the floor), and throw a sock into a laundry basket.',
      'Demonstrate the course once.',
      'Time your child as they go through, or just let them loop it for fun.'
    ],
    variants: ['Change the rules: "Now do it hopping on one foot!" or "Do it backwards!"'],
    situations: ['rainy-day', 'screen-free']
  },
  {
    id: 'sock-basketball',
    title: 'Sock Basketball',
    description: 'A safe, indoor-friendly version of basketball using rolled-up socks and a laundry basket.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ageMin: 2,
    ageMax: 6,
    durationMin: 5,
    durationMax: 15,
    types: ['Active', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'small',
    materials: ['Rolled up socks', 'A laundry basket or box'],
    steps: [
      'Roll up several pairs of clean socks into balls.',
      'Place the laundry basket a few feet away.',
      'Take turns tossing the "basketballs" into the hoop.',
      'Move the basket further away for an extra challenge.'
    ],
    variants: ['Assign different point values to different colored socks.'],
    situations: ['rainy-day', 'no-mess', 'screen-free', '5-minute']
  },
  {
    id: 'ice-rescue',
    title: 'Ice Rescue',
    description: 'Freeze their favorite small toys in a block of ice and let them use warm water and salt to rescue them.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    ageMin: 2,
    ageMax: 5,
    durationMin: 15,
    durationMax: 30,
    types: ['Sensory', 'Learning'],
    tags: [],
    energyLevel: 'normal',
    space: 'small',
    materials: ['Small plastic toys', 'An ice cube tray or small container', 'Water', 'Warm water or salt (for rescuing)'],
    steps: [
      'Prep (requires advance time): Place small toys in a container, fill with water, and freeze overnight.',
      'Pop the ice block out into a large bowl or baking dish.',
      'Give your child tools to "rescue" the toys: a spoon, a dropper with warm water, or a little salt.',
      'Let them work at melting the ice to free their toys.'
    ],
    variants: ['Freeze multiple layers with different food coloring for a rainbow effect.'],
    situations: ['sick-day', 'screen-free']
  },
  {
    id: 'cardboard-box-fort',
    title: 'Cardboard Box Fort',
    description: 'The classic childhood activity. Give them a big box, some markers, and let their imagination run wild.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    ageMin: 1,
    ageMax: 6,
    durationMin: 30,
    durationMax: 120,
    types: ['Creative', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['A large cardboard box', 'Markers or crayons', 'Blankets (optional)'],
    steps: [
      'Give your child a large empty cardboard box.',
      'Provide markers or crayons and let them decorate the inside and outside.',
      'Cut a door or windows if you have scissors handy.',
      'Add a blanket and a pillow to make it a cozy reading nook.'
    ],
    variants: ['Connect multiple boxes to make a tunnel system.'],
    situations: ['rainy-day', 'quiet', 'screen-free']
  },
  {
    id: 'kitchen-band',
    title: 'Kitchen Band',
    description: 'Turn pots, pans, and wooden spoons into a full drum set. It\'s loud, but they love it!',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ageMin: 1,
    ageMax: 4,
    durationMin: 10,
    durationMax: 20,
    types: ['Creative', 'Sensory'],
    tags: [],
    energyLevel: 'active',
    space: 'small',
    materials: ['Pots and pans', 'Wooden spoons', 'Plastic containers'],
    steps: [
      'Lay out a selection of pots, pans, and plastic containers upside down.',
      'Give your child a couple of wooden spoons.',
      'Let them drum away and explore the different sounds each item makes.',
      'Put on some music and jam along!'
    ],
    variants: ['Fill plastic containers with dry beans or rice to make shakers.'],
    situations: ['rainy-day', 'screen-free']
  },
  {
    id: 'cotton-ball-race',
    title: 'Cotton Ball Race',
    description: 'A silly, low-mess race where kids blow cotton balls across the floor using straws.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    ageMin: 3,
    ageMax: 6,
    durationMin: 10,
    durationMax: 20,
    types: ['Game', 'Active'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'small',
    materials: ['Cotton balls', 'Straws', 'Tape (optional, for finish line)'],
    steps: [
      'Place a cotton ball on the floor or a table for each player.',
      'Set a start and finish line.',
      'Give each player a straw.',
      'Blow through the straw to move the cotton ball across the finish line first!'
    ],
    variants: ['Create an obstacle course for the cotton balls to navigate around.'],
    situations: ['rainy-day', 'no-mess', 'screen-free', '5-minute']
  },
  {
    id: 'sticker-sorting',
    title: 'Sticker Sorting',
    description: 'A quiet, focused activity that helps develop fine motor skills and color/shape recognition.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    ageMin: 1,
    ageMax: 3,
    durationMin: 15,
    durationMax: 30,
    types: ['Learning', 'Craft'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'small',
    materials: ['A sheet of stickers', 'Paper', 'Markers'],
    steps: [
      'Draw large shapes (circle, square, triangle) or different colored zones on a piece of paper.',
      'Give your child a sheet of stickers.',
      'Ask them to place specific stickers in specific zones (e.g., "Put all the animal stickers in the circle").',
      'Or just let them peel and stick freely to practice fine motor skills.'
    ],
    variants: ['Draw a simple scene (like a tree or a road) and have them decorate it with stickers.'],
    situations: ['quiet', 'sick-day', 'no-mess', 'screen-free']
  },
  {
    id: 'balloon-keep-up',
    title: 'Balloon Keep-Up',
    description: 'The simplest game ever: don\'t let the balloon touch the floor. Surprisingly exhausting for them, easy for you.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    ageMin: 2,
    ageMax: 6,
    durationMin: 10,
    durationMax: 30,
    types: ['Active', 'Game'],
    tags: ['Tired-friendly'],
    energyLevel: 'tired',
    space: 'normal',
    materials: ['A balloon'],
    steps: [
      'Blow up a balloon and tie it off.',
      'Toss it in the air and tell your child: "Don\'t let it touch the ground!"',
      'You can sit on the couch and occasionally tap it back up if it comes near you.',
      'Count how many times they can hit it before it falls.'
    ],
    variants: ['Use a paper plate taped to a popsicle stick as a "tennis racket".'],
    situations: ['rainy-day', 'no-mess', 'screen-free']
  }
];
