// Menu
const top_bar = document.getElementById('top');
const bottom = document.getElementById('bottom');
const welcome = document.getElementById('welcome');
const class_selection = document.getElementById('class-selection');
// Textareas
const directions = document.getElementById('directions');
const how_to_play_text = document.getElementById('how_to_play_text');
const lore = document.getElementById('lore');
const lore_text = document.getElementById('lore_text');
const battle_text = document.getElementById('battle_text');
// Classes
const class_1 = document.getElementById('class-1');
const class_2 = document.getElementById('class-2');
const class_3 = document.getElementById('class-3');
const class_4 = document.getElementById('class-4');
const class_5 = document.getElementById('class-5');
const class_6 = document.getElementById('class-6');
// Game elements
const player_window = document.getElementById('player-window');
const enemy_window = document.getElementById('enemy-window');
const str = document.getElementById('strength');
const dex = document.getElementById('dexterity');
const con = document.getElementById('constitution');
const int = document.getElementById('intelligence');
const player_hp_bar = document.getElementById('player-hp');
const player_hp = document.getElementById('hp');
const player_hp_max = document.getElementById('max_hp');
const enemy_status = document.getElementById('enemy-status');
const enemy_hp_bar = document.getElementById('enemy-hp');
const enemy_hp = document.getElementById('enemy_hp');
const enemy_hp_max = document.getElementById('enemy_hp_max');
const dex_dice_element = document.getElementById('dex_dice');
const str_dice_element = document.getElementById('str_dice');
const con_dice_element = document.getElementById('con_dice');
const dex_dice_box = document.getElementById('dex-box');
const str_dice_box = document.getElementById('str-box');
const con_dice_box = document.getElementById('con-box');
const dialogue_friendly = document.getElementById('dialogue-friendly');
const dialogue_pic_friendly = document.getElementById('dialogue-pic-friendly');
const dialogue_chat = document.getElementById('chat-text');
const dialogue_pic = document.getElementById('dialogue-pic-friendly');
const upgrade_container = document.getElementById('upgrade-container');
// Battle
const battle = document.getElementById('battle');
const hack = document.getElementById('hack');
const attack_button = document.getElementById('attack');
const charge_button = document.getElementById('charge');
const heal_button = document.getElementById('heal');
const skills_button = document.getElementById('skills');
const continue_button = document.getElementById('continue');
const dex_dmg_con_line = document.getElementById('dex-dmg');
const return_to_battle_menu_button = document.getElementById('return');
const all_skill_buttons = document.querySelectorAll('.skill-button');
const time_stop_button = document.getElementById('timestop');
// Hack
const hack_screen = document.getElementById('hack');
const begin_hack_button = document.getElementById('begin-hack');
const hack_skills_button = document.getElementById('hack-skills');
const to_map_button = document.getElementById('to-map-button');
const hack_box_1 = document.getElementById('hack-box-1');
const hack_box_2 = document.getElementById('hack-box-2');
const hack_box_3 = document.getElementById('hack-box-3');
const hack_box_4 = document.getElementById('hack-box-4');
const hack_box_5 = document.getElementById('hack-box-5');
const hack_box_6 = document.getElementById('hack-box-6');
const int_dice_1 = document.getElementById('int-dice-1');
const int_dice_2 = document.getElementById('int-dice-2');
const int_dice_3 = document.getElementById('int-dice-3');
const int_dice_4 = document.getElementById('int-dice-4');
const int_dice_5 = document.getElementById('int-dice-5');
const int_dice_6 = document.getElementById('int-dice-6');
// places
const place_1 = document.getElementById('place-1');
const place_2 = document.getElementById('place-2');
const place_3 = document.getElementById('place-3');
const place_4 = document.getElementById('place-4');
const place_5 = document.getElementById('place-5');
const place_6 = document.getElementById('place-6');
const place_7 = document.getElementById('place-7');
// Background
const background_blur = document.getElementById('background');
const container = document.querySelector('.container');

// Variables
let player;

let player_location;

let total_wins = 0;

let total_losses = 0;

document.addEventListener('DOMContentLoaded', async function() {
  top_bar.style.display = 'none';
  bottom.style.display = 'none';
  directions.style.display = 'none';
  class_selection.style.display = 'none';
  battle.style.display = 'none';
  hack.style.display = 'none';
  background_blur.style.background = `url("../cyperhack/images/ui/city_street.png")`;
  background_blur.style.backgroundPosition = 'bottom center';
  background_blur.style.backgroundSize = 'cover';
  background_blur.style.backgroundRepeat = 'no-repeat';

  // Random images for places
  randomize_places();

  lore_text.value = 'The Company has been in a long battle against the resistance. Recently enemy forces have been taking too much control and the city is falling into despair. ' +
      'You have been called to help in the fight against The Company. Your mission is to fight and hack through enemy claimed territories and get intel about the enemy. Good Luck agent. ';
});

place_1.addEventListener('click', async function() {
  player_location = 1;
  await set_background(place_1);
  setup_fight();
});

place_2.addEventListener('click', async function() {
  player_location = 2;
  await set_background(place_2);
  setup_fight();
});

place_3.addEventListener('click', async function() {
  player_location = 3;
  await set_background(place_3);
  setup_fight();
});

place_4.addEventListener('click', async function() {
  player_location = 4;
  await set_background(place_4);
  setup_fight();
});

place_5.addEventListener('click', async function() {
  player_location = 5;
  await set_background(place_5);
  setup_fight();
});

place_6.addEventListener('click', async function() {
  player_location = 6;
  await set_background(place_6);
  setup_fight();
});

place_7.addEventListener('click', async function() {
  player_location = 7;
  await set_background(place_7);
  boss_dialogue();
});

function level_up() {
  player_window.innerText = 'LVL UP+';

  player_window.addEventListener('click', upgrade = function() {
    player_window.innerText = '';
    upgrade_container.style.display = 'flex';

    bottom.style.filter = 'grayscale(100%)';
    bottom.style.pointerEvents = 'none';
    battle.style.filter = 'grayscale(100%)';
    battle.style.pointerEvents = 'none';
  });
}

function stat_upgrade() {
  upgrade_container.style.display = 'none';
  player_window.removeEventListener('click', upgrade);

  bottom.style.filter = 'none';
  bottom.style.pointerEvents = 'auto';
  battle.style.filter = 'none';
  battle.style.pointerEvents = 'auto';

  player.str += 2;
  player.dex += 2;
  player.con += 2;
  player.int += 2;
  str.innerText = player.str;
  dex.innerText = player.dex;
  con.innerText = player.con;
  int.innerText = player.int;

  player.hp += 2;
  player_hp_bar.value = player.hp;
  player_hp_bar.max += 2;
  player_hp.innerText = player.hp;
  let bar_max_value = player_hp_max.innerText;
  bar_max_value = parseInt(bar_max_value);
  player_hp_max.innerText = bar_max_value + 2;
}

function skill_upgrade() {
  upgrade_container.style.display = 'none';
  player_window.removeEventListener('click', upgrade);

  bottom.style.filter = 'none';
  bottom.style.pointerEvents = 'auto';
  battle.style.filter = 'none';
  battle.style.pointerEvents = 'auto';

  player.skill++
  player.skill_max++
}
