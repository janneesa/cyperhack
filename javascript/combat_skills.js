// Show comabt skills
function show_combat_skills() {
  attack_button.style.display = 'none';
  charge_button.style.display = 'none';
  heal_button.style.display = 'none';
  skills_button.style.display = 'none';

  for (let skill_button of all_skill_buttons) {
    if (skill_button.name === player.class) {
      skill_button.style.display = 'flex';
    }
  }
  return_to_battle_menu_button.style.display = 'flex';
}

// Return button hides skills
function return_button() {
  attack_button.style.display = 'flex';
  charge_button.style.display = 'flex';
  heal_button.style.display = 'flex';
  skills_button.style.display = 'flex';
  return_to_battle_menu_button.style.display = 'none';
  for (let skill_button of all_skill_buttons) {
    skill_button.style.display = 'none';
  }
}

// ASSASSIN skill that gives guaranteed critical hit and then proceeds to enemy turn
function assassin_backstab() {

  if (player.skill < 1) {
    battle_text.value += `\n-You have 0 skill points left.`;
    battle_text.scrollTop = battle_text.scrollHeight;

    attack_button.style.display = 'flex';
    charge_button.style.display = 'flex';
    heal_button.style.display = 'flex';
    skills_button.style.display = 'flex';
    return_to_battle_menu_button.style.display = 'none';
    for (let skill_button of all_skill_buttons) {
      skill_button.style.display = 'none';
    }
  }
  else {

    player.skill -= 1

    for (let skill_button of all_skill_buttons) {
      skill_button.style.display = 'none';
    }

    return_to_battle_menu_button.style.display = 'none';

    attack_button.style.display = 'none';
    charge_button.style.display = 'none';
    heal_button.style.display = 'none';
    skills_button.style.display = 'none';
    continue_button.style.display = 'flex';

    set_buttons_off();

    dex_dice_element.innerText = `CRIT`;

    const str_roll_promise = new Promise((resolve) => {
      let str_interval = setInterval(async function() {
        dice_round += 1;
        if (dice_round > 20) {
          clearInterval(str_interval);
          dice_round = 0;
          resolve();
        }

        dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
        str_dice_element.innerText = `${dmg_roll * 2}`;
      }, 50);
    });

    str_roll_promise.then(() => {
      battle_text.value += `\n-CRITICAL HIT for ${dmg_roll * 2} dmg`;
      battle_text.scrollTop = battle_text.scrollHeight;
      random_enemy.hp -= dmg_roll * 2;
      enemy_hp_bar.value = random_enemy.hp;
      enemy_hp.innerText = random_enemy.hp;

      // Flicker enemy animation
      damage_animation(enemy_window);

      // Button colors and events on
      set_buttons_on();

      if (random_enemy.hp > 0) {

        // Enemy turn here

      } else {
        battle_text.value += `\n-You win`;
        battle_text.scrollTop = battle_text.scrollHeight;

        // Set enemy gray
        enemy_window.style.filter = 'grayscale(100%)';

        // End fight here
        // Add continue button
      }
    });
  }
}