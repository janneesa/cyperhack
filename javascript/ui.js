// How to play button
function how_to_play() {
  bottom.style.display = 'none';
  lore.style.display = 'none';
  directions.style.display = 'flex';
  how_to_play_text.value = '-Goal: hack three enemy territories successfully. ' +
      'If you fail hacking three times you lose.' +
      '\n\n-1. Choose a class. Classes have different stats that affect gameplay. ' +
      '\nSTR is your main damage stat. ' +
      '\nDEX is how well you can block and hit enemy. ' +
      '\nCON is your ability to heal and charge. ' +
      '\nINT is your ability to hack. ' +
      '\n\n-2. In game you can travel to different locations by pressing them on the screen. ' +
      '\n\n-3. When fighting you can do one of the following:' +
      '\n\nATTACK: Roll your DEX to see if you hit the enemy. On 1 you miss and on 10 or over you do double damage. ' +
      'If your DEX roll is lower than half of enemy DEX, the attack becomes weak and enemy can try to block it. Damage always comes from you STR. ' +
      '\n\nCHARGE: Pass your turn to do more damage next turn. Charge combines your STR and CON to deal damage. ' +
      '\n\nHEAL: Use your cyper enhancements to heal some of your HP. ' +
      '\n\n-4. On enemy turn if enemy\'s attack is weak you will automatically try to block. ' +
      '\n\n-5. If you win the fight you can try to hack. You roll your INT until you get three successes or three failures.';
}

// Star game button
function start_game() {
  welcome.style.display = 'none';
  directions.style.display = 'none';
  lore.style.display = 'none';
  class_selection.style.display = 'flex';

  const audio = document.querySelector('audio');
  // Check if the audio is paused or ended
  if (audio.paused || audio.ended) {
    // Play the audio
    audio.play();
  } else {
    // Pause the audio if it's already playing
    audio.pause();
  }
}

// Set background in event listener when clicked
async function set_background(place) {
  const computed_style = window.getComputedStyle(place);
  const background_style = computed_style.getPropertyValue('background');
  console.log(background_style);

  // Cleanup the URL string
  const background_settings = background_style.split(' ');
  console.log(background_settings);

  // Set the retrieved image URL as the background of background_blur
  background_blur.style.background = `${background_settings[0]}`;
  background_blur.style.backgroundPosition = 'center center';
  background_blur.style.backgroundSize = 'cover';
  background_blur.style.backgroundRepeat = 'no-repeat';
}

// Set top_bar background image
async function set_top_background(place) {
  const computed_style = window.getComputedStyle(place);
  const background_style = computed_style.getPropertyValue('background');
  console.log(background_style);

  // Cleanup the URL string
  const background_settings = background_style.split(' ');
  console.log(background_settings);

  // Set the retrieved image URL as the background of background_blur
  top_bar.style.backgroundImage = background_settings[0];
  top_bar.style.backgroundPosition = 'center center';
  top_bar.style.backgroundSize = 'cover';
  top_bar.style.backgroundRepeat = 'no-repeat';
}

async function randomize_locations() {
  let random_place = Math.floor(Math.random() * 4) + 1;
  place_1.style.background = `url("../cyperhack/images/places/club${random_place}.png")`;
  place_1.style.backgroundPosition = 'center center';
  place_1.style.backgroundSize = 'cover';
  place_1.style.backgroundRepeat = 'no-repeat';

  random_place = Math.floor(Math.random() * 4) + 1;
  place_2.style.background = `url("../cyperhack/images/places/east_slum${random_place}.png")`;
  place_2.style.backgroundPosition = 'center center';
  place_2.style.backgroundSize = 'cover';
  place_2.style.backgroundRepeat = 'no-repeat';

  random_place = Math.floor(Math.random() * 4) + 1;
  place_3.style.background = `url("../cyperhack/images/places/garden${random_place}.png")`;
  place_3.style.backgroundPosition = 'center center';
  place_3.style.backgroundSize = 'cover';
  place_3.style.backgroundRepeat = 'no-repeat';

  random_place = Math.floor(Math.random() * 4) + 1;
  place_4.style.background = `url("../cyperhack/images/places/lower_town${random_place}.png")`;
  place_4.style.backgroundPosition = 'center center';
  place_4.style.backgroundSize = 'cover';
  place_4.style.backgroundRepeat = 'no-repeat';

  random_place = Math.floor(Math.random() * 4) + 1;
  place_5.style.background = `url("../cyperhack/images/places/mall${random_place}.png")`;
  place_5.style.backgroundPosition = 'center center';
  place_5.style.backgroundSize = 'cover';
  place_5.style.backgroundRepeat = 'no-repeat';

  random_place = Math.floor(Math.random() * 4) + 1;
  place_6.style.background = `url("../cyperhack/images/places/mid_town${random_place}.png")`;
  place_6.style.backgroundPosition = 'center center';
  place_6.style.backgroundSize = 'cover';
  place_6.style.backgroundRepeat = 'no-repeat';
}

const casino = {
  'number': 0,
  'name': 'Casino',
  'img1': 'url("../cyperhack/images/places/casino1.png")',
  'img2': 'url("../cyperhack/images/places/casino2.png")',
  'img3': 'url("../cyperhack/images/places/casino3.png")',
  'img4': 'url("../cyperhack/images/places/casino4.png")',
};

const club = {
  'number': 1,
  'name': 'Club',
  'img1': 'url("../cyperhack/images/places/club1.png")',
  'img2': 'url("../cyperhack/images/places/club2.png")',
  'img3': 'url("../cyperhack/images/places/club3.png")',
  'img4': 'url("../cyperhack/images/places/club4.png")',
};

const east_slum = {
  'number': 2,
  'name': 'East slum',
  'img1': 'url("../cyperhack/images/places/east_slum1.png")',
  'img2': 'url("../cyperhack/images/places/east_slum2.png")',
  'img3': 'url("../cyperhack/images/places/east_slum3.png")',
  'img4': 'url("../cyperhack/images/places/east_slum4.png")',
};

const garden = {
  'number': 3,
  'name': 'Garden',
  'img1': 'url("../cyperhack/images/places/garden1.png")',
  'img2': 'url("../cyperhack/images/places/garden2.png")',
  'img3': 'url("../cyperhack/images/places/garden3.png")',
  'img4': 'url("../cyperhack/images/places/garden4.png")',
};

const lower_town = {
  'number': 4,
  'name': 'Lower town',
  'img1': 'url("../cyperhack/images/places/lower_town1.png")',
  'img2': 'url("../cyperhack/images/places/lower_town2.png")',
  'img3': 'url("../cyperhack/images/places/lower_town3.png")',
  'img4': 'url("../cyperhack/images/places/lower_town4.png")',
};

const mall = {
  'number': 5,
  'name': 'Mall',
  'img1': 'url("../cyperhack/images/places/mall1.png")',
  'img2': 'url("../cyperhack/images/places/mall2.png")',
  'img3': 'url("../cyperhack/images/places/mall3.png")',
  'img4': 'url("../cyperhack/images/places/mall4.png")',
};

const mid_town = {
  'number': 6,
  'name': 'Mid town',
  'img1': 'url("../cyperhack/images/places/mid_town1.png")',
  'img2': 'url("../cyperhack/images/places/mid_town2.png")',
  'img3': 'url("../cyperhack/images/places/mid_town3.png")',
  'img4': 'url("../cyperhack/images/places/mid_town4.png")',
};

const upper_town = {
  'number': 7,
  'name': 'Upper town',
  'img1': 'url("../cyperhack/images/places/upper_town1.png")',
  'img2': 'url("../cyperhack/images/places/upper_town2.png")',
  'img3': 'url("../cyperhack/images/places/upper_town3.png")',
  'img4': 'url("../cyperhack/images/places/upper_town4.png")',
};

const all_places = [
  casino,
  club,
  east_slum,
  garden,
  lower_town,
  mall,
  mid_town,
  upper_town];

function randomize_places() {
  let random_image;
  let random_place;

  // Place 1
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_1.style.background = all_places[random_place].img1;
      place_1.style.backgroundPosition = 'center center';
      place_1.style.backgroundSize = 'cover';
      place_1.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_1.style.background = all_places[random_place].img2;
      place_1.style.backgroundPosition = 'center center';
      place_1.style.backgroundSize = 'cover';
      place_1.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_1.style.background = all_places[random_place].img3;
      place_1.style.backgroundPosition = 'center center';
      place_1.style.backgroundSize = 'cover';
      place_1.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_1.style.background = all_places[random_place].img4;
      place_1.style.backgroundPosition = 'center center';
      place_1.style.backgroundSize = 'cover';
      place_1.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_1.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

  // Place 2
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_2.style.background = all_places[random_place].img1;
      place_2.style.backgroundPosition = 'center center';
      place_2.style.backgroundSize = 'cover';
      place_2.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_2.style.background = all_places[random_place].img2;
      place_2.style.backgroundPosition = 'center center';
      place_2.style.backgroundSize = 'cover';
      place_2.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_2.style.background = all_places[random_place].img3;
      place_2.style.backgroundPosition = 'center center';
      place_2.style.backgroundSize = 'cover';
      place_2.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_2.style.background = all_places[random_place].img4;
      place_2.style.backgroundPosition = 'center center';
      place_2.style.backgroundSize = 'cover';
      place_2.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_2.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

  // Place 3
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_3.style.background = all_places[random_place].img1;
      place_3.style.backgroundPosition = 'center center';
      place_3.style.backgroundSize = 'cover';
      place_3.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_3.style.background = all_places[random_place].img2;
      place_3.style.backgroundPosition = 'center center';
      place_3.style.backgroundSize = 'cover';
      place_3.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_3.style.background = all_places[random_place].img3;
      place_3.style.backgroundPosition = 'center center';
      place_3.style.backgroundSize = 'cover';
      place_3.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_3.style.background = all_places[random_place].img4;
      place_3.style.backgroundPosition = 'center center';
      place_3.style.backgroundSize = 'cover';
      place_3.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_3.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

  // Place 4
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_4.style.background = all_places[random_place].img1;
      place_4.style.backgroundPosition = 'center center';
      place_4.style.backgroundSize = 'cover';
      place_4.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_4.style.background = all_places[random_place].img2;
      place_4.style.backgroundPosition = 'center center';
      place_4.style.backgroundSize = 'cover';
      place_4.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_4.style.background = all_places[random_place].img3;
      place_4.style.backgroundPosition = 'center center';
      place_4.style.backgroundSize = 'cover';
      place_4.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_4.style.background = all_places[random_place].img4;
      place_4.style.backgroundPosition = 'center center';
      place_4.style.backgroundSize = 'cover';
      place_4.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_4.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

  // Place 5
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_5.style.background = all_places[random_place].img1;
      place_5.style.backgroundPosition = 'center center';
      place_5.style.backgroundSize = 'cover';
      place_5.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_5.style.background = all_places[random_place].img2;
      place_5.style.backgroundPosition = 'center center';
      place_5.style.backgroundSize = 'cover';
      place_5.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_5.style.background = all_places[random_place].img3;
      place_5.style.backgroundPosition = 'center center';
      place_5.style.backgroundSize = 'cover';
      place_5.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_5.style.background = all_places[random_place].img4;
      place_5.style.backgroundPosition = 'center center';
      place_5.style.backgroundSize = 'cover';
      place_5.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_5.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

  // Place 6
  try {
    random_place = Math.floor(Math.random() * all_places.length);
    random_image = Math.floor(Math.random() * 4) + 1;

    if (random_image === 1) {
      place_6.style.background = all_places[random_place].img1;
      place_6.style.backgroundPosition = 'center center';
      place_6.style.backgroundSize = 'cover';
      place_6.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 2) {
      place_6.style.background = all_places[random_place].img2;
      place_6.style.backgroundPosition = 'center center';
      place_6.style.backgroundSize = 'cover';
      place_6.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 3) {
      place_6.style.background = all_places[random_place].img3;
      place_6.style.backgroundPosition = 'center center';
      place_6.style.backgroundSize = 'cover';
      place_6.style.backgroundRepeat = 'no-repeat';
    } else if (random_image === 4) {
      place_6.style.background = all_places[random_place].img4;
      place_6.style.backgroundPosition = 'center center';
      place_6.style.backgroundSize = 'cover';
      place_6.style.backgroundRepeat = 'no-repeat';
    }
  } finally {
    place_6.innerText = all_places[random_place].name;
    all_places.splice(random_place, 1);
    console.log(all_places.length);
  }

}