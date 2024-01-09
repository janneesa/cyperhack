const enemy_list = [
  bot1,
  company_guard1,
  company_guard2,
  guard1,
  guard2,
  punk1,
  punk2,
  security_bot,
  thief1];

let random_enemy; // Random enemy gets uploaded to here

let dex_roll;

let dmg_roll;

let con_roll;

let enemy_dex_roll;

let enemy_dmg_roll;

let enemy_con_roll;

let dice_round = 0;

let heal_toggle = 0;

let enemy_heal_toggle = 0;

let charge_toggle = 0;

let enemy_charge_toggle = 0;

let enemy_turn_toggle = 0;

function set_buttons_off() {
  document.body.style.pointerEvents = 'none';
  battle.style.pointerEvents = 'none'
  attack_button.style.backgroundColor = 'grey';
  charge_button.style.backgroundColor = 'grey';
  heal_button.style.backgroundColor = 'grey';
  skills_button.style.backgroundColor = 'grey';
  continue_button.style.backgroundColor = 'grey';
}

function set_buttons_on() {
  document.body.style.pointerEvents = 'auto';
  battle.style.pointerEvents = 'auto'
  attack_button.style.backgroundColor = 'red';
  charge_button.style.backgroundColor = 'red';
  heal_button.style.backgroundColor = 'red';
  skills_button.style.backgroundColor = 'red';
  continue_button.style.backgroundColor = 'red';
}

function set_enemy_colors() {
  dex_dice_element.style.color = 'red';
  str_dice_element.style.color = 'red';
  con_dice_element.style.color = 'red';
  dex_dice_box.style.border = '3px solid red';
  str_dice_box.style.border = '3px solid red';
  con_dice_box.style.border = '3px solid red';
  dex_dmg_con_line.style.color = 'red';
}

function set_player_colors() {
  dex_dice_element.style.color = 'yellowgreen';
  str_dice_element.style.color = 'yellowgreen';
  con_dice_element.style.color = 'yellowgreen';
  dex_dice_box.style.border = '3px solid forestgreen';
  str_dice_box.style.border = '3px solid forestgreen';
  con_dice_box.style.border = '3px solid forestgreen';
  dex_dmg_con_line.style.color = 'yellowgreen';
}

function damage_animation(character_window) {
  let flicker_duration = 500; // 0.5 seconds
  let flicker_interval = 80; // flicker every 50 milliseconds
  let flicker_count = flicker_duration / flicker_interval;

  let intervalId = setInterval(function() {
    // Toggle opacity of the character_window
    character_window.style.opacity = (character_window.style.opacity === '0') ?
        '1' :
        '0';

    flicker_count--;

    if (flicker_count <= 0) {
      clearInterval(intervalId);
      // Reset opacity to the original state after the flickering stops
      character_window.style.opacity = '1'; // or any other value you prefer
    }
  }, flicker_interval);
}

function continue_fight() {
  if (player.hp < 1) {
    // GAME OVER
    document.body.style.pointerEvents = 'auto';
    game_over()
  } else if (random_enemy.hp < 1) {
    // You win fight
    document.body.style.pointerEvents = 'auto';
    player_window.style.filter = 'none';
    enemy_window.style.filter = 'none';
    if (random_enemy.name === 'boss') {
      // Game ending here
      last_dialogue()
    } else {
      show_hack_screen();
    }
  } else if (charge_toggle > 1) {
    enemy_turn();
  } else if (charge_toggle > 0) {
    dex_dice_element.innerText = ``;
    str_dice_element.innerText = ``;
    con_dice_element.innerText = ``;
    set_player_colors();
    charge();
  } else if (enemy_turn_toggle === 1) {
    // Continue from enemy turn
    enemy_turn_toggle = 0;
    attack_button.style.display = 'flex';
    charge_button.style.display = 'flex';
    heal_button.style.display = 'flex';
    skills_button.style.display = 'flex';
    continue_button.style.display = 'none';
    dex_dice_element.innerText = ``;
    str_dice_element.innerText = ``;
    con_dice_element.innerText = ``;
    set_player_colors();
  } else {
    enemy_turn();
  }
}

function get_random_enemy() {

  if (total_wins > 2) {
    random_enemy = boss;
  } else {
    const random_enemy_index = Math.floor(Math.random() * enemy_list.length);
    random_enemy = enemy_list[random_enemy_index];

    // Remove enemy using splice
    enemy_list.splice(random_enemy_index, 1);
    console.log('enemies left: ' + enemy_list.length);
  }

  return random_enemy;
}

function setup_fight() {
  // Setup fight screen
  bottom.style.display = 'none';
  enemy_status.style.display = 'flex';
  enemy_window.style.display = 'flex';
  battle.style.display = 'flex';
  dex_dice_element.innerText = ``;
  str_dice_element.innerText = ``;
  con_dice_element.innerText = ``;

  // Bring buttons back
  attack_button.style.display = 'flex';
  charge_button.style.display = 'flex';
  heal_button.style.display = 'flex';
  skills_button.style.display = 'flex';
  continue_button.style.display = 'none';

  // Make sure button colors are player colors
  set_player_colors();

  // Get random enemy and set values to html
  get_random_enemy();
  console.log('selected random enemy is: ' + random_enemy);
  enemy_window.style.backgroundImage = random_enemy.img;
  enemy_hp_bar.value = random_enemy.hp;
  enemy_hp_bar.max = random_enemy.hp;
  enemy_hp.innerText = random_enemy.hp;
  enemy_hp_max.innerText = random_enemy.hp;

  // Fight log
  battle_text.value = `-You are fighting against ${random_enemy.name}`;

  // First battle dialogue
  if (total_wins === 0 && total_losses === 0) {
    first_battle()
  }

}

function show_hack_screen() {
  enemy_status.style.display = 'none';
  enemy_window.style.display = 'none';
  battle.style.display = 'none';
  hack.style.display = 'flex';
  begin_hack_button.style.display = 'flex';
  hack_skills_button.style.display = 'flex';
  to_map_button.style.display = 'none';

  int_dice_1.style.color = 'yellowgreen';
  hack_box_1.style.border = '3px solid white';
  int_dice_1.innerText = '00';
  int_dice_2.style.color = 'yellowgreen';
  hack_box_2.style.border = '3px solid white';
  int_dice_2.innerText = '00';
  int_dice_3.style.color = 'yellowgreen';
  hack_box_3.style.border = '3px solid white';
  int_dice_3.innerText = '00';
  int_dice_4.style.color = 'yellowgreen';
  hack_box_4.style.border = '3px solid white';
  int_dice_4.innerText = '00';
  int_dice_5.style.color = 'yellowgreen';
  hack_box_5.style.border = '3px solid white';
  int_dice_5.innerText = '00';
  int_dice_6.style.color = 'yellowgreen';
  hack_box_6.style.border = '3px solid white';
  int_dice_6.innerText = '00';

  // First hack dialogue
  if (total_wins === 0 && total_losses === 0) {
    first_hack()
  }
}

function enemy_turn() {
  dex_dice_element.innerText = ``;
  str_dice_element.innerText = ``;
  con_dice_element.innerText = ``;

  enemy_turn_toggle = 1;

  set_buttons_off();

  set_enemy_colors();

  if (charge_toggle > 1) {
    charge_toggle -= 1;
    attack_button.style.display = 'none';
    charge_button.style.display = 'none';
    heal_button.style.display = 'none';
    skills_button.style.display = 'none';
    continue_button.style.display = 'flex';
  }

  if (charge_toggle === 0) {
    attack_button.style.display = 'none';
    charge_button.style.display = 'none';
    heal_button.style.display = 'none';
    skills_button.style.display = 'none';
    continue_button.style.display = 'flex';
  }

  if (enemy_charge_toggle === 1) {
    // Reset charge
    enemy_charge_toggle = 0;

    // Charge damage
    const con_roll_promise = new Promise((resolve) => {
      let con_interval = setInterval(async function() {
        dice_round += 1;
        if (dice_round > 20) {
          dice_round = 0;
          clearInterval(con_interval);
          resolve();
        }

        enemy_con_roll = Math.floor(Math.random() * random_enemy.con / 2) + 1;
        con_dice_element.innerText = `${enemy_con_roll}`;
      }, 50);
    });

    con_roll_promise.then(() => {
      battle_text.value += `\n-CON roll for ${enemy_con_roll} DMG.`;
      battle_text.scrollTop = battle_text.scrollHeight;
    });

    const str_roll_promise = new Promise((resolve) => {
      let str_interval = setInterval(async function() {
        dice_round += 1;
        if (dice_round > 20) {
          clearInterval(str_interval);
          dice_round = 0;
          resolve();
        }

        enemy_dmg_roll = Math.floor(
            Math.random() * (6 + (random_enemy.str - 10))) + 1;
        str_dice_element.innerText = `${enemy_dmg_roll}`;
      }, 50);
    });

    str_roll_promise.then(() => {
      battle_text.value += `\n-STR roll for ${enemy_dmg_roll} DMG.`;
      battle_text.value += `\n-${random_enemy.name} did ${enemy_con_roll +
      enemy_dmg_roll} charge damage to you.`;
      battle_text.scrollTop = battle_text.scrollHeight;

      // reduce damage from player hp
      player.hp -= (enemy_con_roll + enemy_dmg_roll);
      player_hp_bar.value = player.hp;
      player_hp.innerText = player.hp;

      // Flicker player animation
      damage_animation(player_window);

      // Button colors and events on
      set_buttons_on();

      // Check if player dies
      if (player.hp < 1) {
        battle_text.value += `\n-You died`;
        battle_text.scrollTop = battle_text.scrollHeight;
        continue_button.innerText = 'RELOAD';

        player_window.style.filter = 'grayscale(100%)';

        // End fight here
        // Add continue button
      }
    });

  }
  // Enemy tries to heal if hp is less than 5
  else if (random_enemy.hp < 5 && enemy_heal_toggle < 1) {
    // Set heal toggle on so enemy won't spam heal
    enemy_heal_toggle = 3;
    // Roll heal

    battle_text.value += `\n-${random_enemy.name} is healing`;
    battle_text.scrollTop = battle_text.scrollHeight;

    const con_roll_promise = new Promise((resolve) => {
      let con_interval = setInterval(async function() {
        dice_round += 1;
        if (dice_round > 20) {
          dice_round = 0;
          clearInterval(con_interval);
          resolve();
        }

        enemy_con_roll = Math.floor(Math.random() * random_enemy.con / 2) + 1;
        con_dice_element.innerText = `${enemy_con_roll}`;
      }, 50);
    });

    con_roll_promise.then(() => {
      battle_text.value += `\n-${random_enemy.name} healed itself for ${enemy_con_roll} HP.`;
      battle_text.scrollTop = battle_text.scrollHeight;

      random_enemy.hp += enemy_con_roll;

      // Set values to html
      enemy_hp_bar.value = random_enemy.hp;
      enemy_hp.innerText = random_enemy.hp;

      // Button colors and events on
      set_buttons_on();
    });

  }

      // Enemy normal attack if he is not charging or healing
  // 1 in 10 change enemy starts charge during normal attack
  else {
    // Roll for chance to charge
    const charge_chance = Math.floor(Math.random() * 10) + 1;
    // If charge
    if (charge_chance === 10) {
      // Set charge on so next turn enemy hits charge
      enemy_charge_toggle = 1;
      battle_text.value += `\n-${random_enemy.name} has started charge and will hit next turn.`;
      battle_text.value += `\n-Your turn!`;
      battle_text.scrollTop = battle_text.scrollHeight;

      dex_dice_element.innerText = `C`;
      str_dice_element.innerText = `C`;
      con_dice_element.innerText = `C`;

      // Button colors and events on
      set_buttons_on();

    }
    // If no charge or heal then enemy tries normal attack
    else {
      // Enemy dex roll
      const dex_roll_promise = new Promise((resolve) => {
        let dex_interval = setInterval(async function() {
          dice_round += 1;
          if (dice_round > 20) {
            dice_round = 0;
            clearInterval(dex_interval);
            resolve();
          }

          enemy_dex_roll = Math.floor(Math.random() * random_enemy.dex) + 1;
          dex_dice_element.innerText = `${enemy_dex_roll}`;
        }, 50);
      });

      dex_roll_promise.then(() => {

        // Check if player can block
        if (enemy_dex_roll < player.dex / 2) {
          battle_text.value += `\n-${random_enemy.name} rolled weak attack against you.`;
          battle_text.value += `\n-You will try to block automatically.`;
          battle_text.scrollTop = battle_text.scrollHeight;

          dex_dice_element.innerText = ``;
          str_dice_element.innerText = ``;
          con_dice_element.innerText = ``;
          set_player_colors();

          // player block here
          const dex_roll_promise = new Promise((resolve) => {
            let dex_interval = setInterval(async function() {
              dice_round += 1;
              if (dice_round > 40) {
                dice_round = 0;
                clearInterval(dex_interval);
                resolve();
              }

              dex_roll = Math.floor(Math.random() * player.dex / 2) + 1;
              dex_dice_element.innerText = `${dex_roll}`;
            }, 50);
          });

          dex_roll_promise.then(() => {

            if (dex_roll > enemy_dex_roll) {
              battle_text.value += `\n-You blocked successfully!`;
              battle_text.scrollTop = battle_text.scrollHeight;

              // Button colors and events on
              set_buttons_on();
            } else {

              // Bring back enemy color if players block fails
              dex_dice_element.innerText = `${enemy_dex_roll}`;
              str_dice_element.innerText = ``;
              con_dice_element.innerText = ``;
              set_enemy_colors();

              // Roll enemy damage
              const str_roll_promise = new Promise((resolve) => {
                let str_interval = setInterval(async function() {
                  dice_round += 1;
                  if (dice_round > 20) {
                    clearInterval(str_interval);
                    dice_round = 0;
                    resolve();
                  }

                  enemy_dmg_roll = Math.floor(
                      Math.random() * (6 + (random_enemy.str - 10))) + 1;
                  str_dice_element.innerText = `${enemy_dmg_roll}`;
                }, 50);
              });

              str_roll_promise.then(() => {
                battle_text.value += `\n-Block failed and ${random_enemy.name} did ${enemy_dmg_roll} dmg!`;
                battle_text.scrollTop = battle_text.scrollHeight;

                // reduce damage from player hp
                player.hp -= enemy_dmg_roll;
                player_hp_bar.value = player.hp;
                player_hp.innerText = player.hp;

                // Flicker player animation
                damage_animation(player_window);

                // Button colors and events on
                set_buttons_on();

                // Check if player dies
                if (player.hp < 1) {
                  battle_text.value += `\n-You died`;
                  battle_text.scrollTop = battle_text.scrollHeight;
                  continue_button.innerText = 'RELOAD';

                  player_window.style.filter = 'grayscale(100%)';

                  // End fight here
                  // Add continue button
                }
              });
            }
          });
        }
        // If player cant block
        else if (enemy_dex_roll < 10) {
          // Roll enemy damage
          const str_roll_promise = new Promise((resolve) => {
            let str_interval = setInterval(async function() {
              dice_round += 1;
              if (dice_round > 20) {
                clearInterval(str_interval);
                dice_round = 0;
                resolve();
              }

              enemy_dmg_roll = Math.floor(
                  Math.random() * (6 + (random_enemy.str - 10))) + 1;
              str_dice_element.innerText = `${enemy_dmg_roll}`;
            }, 50);
          });

          str_roll_promise.then(() => {
            battle_text.value += `\n-${random_enemy.name} did ${enemy_dmg_roll} dmg!`;
            battle_text.scrollTop = battle_text.scrollHeight;

            // reduce damage from player hp
            player.hp -= enemy_dmg_roll;
            player_hp_bar.value = player.hp;
            player_hp.innerText = player.hp;

            // Flicker player animation
            damage_animation(player_window);

            // Button colors and events on
            set_buttons_on();

            // Check if player dies
            if (player.hp < 1) {
              battle_text.value += `\n-You died`;
              battle_text.scrollTop = battle_text.scrollHeight;
              continue_button.innerText = 'RELOAD';

              player_window.style.filter = 'grayscale(100%)';

              // End fight here
              // Add continue button
            }
          });
        }
        // Enemy critical hit
        else {
          const str_roll_promise = new Promise((resolve) => {
            let str_interval = setInterval(async function() {
              dice_round += 1;
              if (dice_round > 20) {
                clearInterval(str_interval);
                dice_round = 0;
                resolve();
              }

              enemy_dmg_roll = Math.floor(
                  Math.random() * (6 + (random_enemy.str - 10))) + 1;
              str_dice_element.innerText = `${enemy_dmg_roll * 2}`;
            }, 50);
          });

          str_roll_promise.then(() => {
            battle_text.value += `\n-${random_enemy.name} rolled critical hit for ${enemy_dmg_roll *
            2} dmg`;
            battle_text.scrollTop = battle_text.scrollHeight;
            player.hp -= enemy_dmg_roll * 2;
            player_hp_bar.value = player.hp;
            player_hp.innerText = player.hp;

            // Flicker player animation
            damage_animation(player_window);

            // Button colors and events on
            set_buttons_on();

            // Check if player dies
            if (player.hp < 1) {
              battle_text.value += `\n-You died`;
              battle_text.scrollTop = battle_text.scrollHeight;
              continue_button.innerText = 'RELOAD';

              player_window.style.filter = 'grayscale(100%)';

              // End fight here
              // Add continue button
            } else {
              battle_text.value += `\n-Your turn!`;
              battle_text.scrollTop = battle_text.scrollHeight;
            }
          });
        }
      });
    }
  }
}

function attack() {

  attack_button.style.display = 'none';
  charge_button.style.display = 'none';
  heal_button.style.display = 'none';
  skills_button.style.display = 'none';
  continue_button.style.display = 'flex';

  set_buttons_off();

  const dex_roll_promise = new Promise((resolve) => {
    let dex_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 20) {
        dice_round = 0;
        clearInterval(dex_interval);
        resolve();
      }

      dex_roll = Math.floor(Math.random() * player.dex) + 1;
      dex_dice_element.innerText = `${dex_roll}`;
    }, 50);
  });

  dex_roll_promise.then(() => {

        if (dex_roll === 1) {
          battle_text.value += `\n-You rolled ${dex_roll} and missed.`;
          battle_text.scrollTop = battle_text.scrollHeight;
          str_dice_element.innerText = `0`;

          // Button colors and events on
          set_buttons_on();

          // Enemy turn here

          // Weak attack
        } else if (dex_roll < random_enemy.dex / 2) {
          battle_text.value += `\n-You rolled ${dex_roll} and attack was weak.`;
          battle_text.scrollTop = battle_text.scrollHeight;

          // Enemy block here
          enemy_block = Math.floor(Math.random() * (random_enemy.dex / 2)) + 1;
          if (dex_roll < enemy_block) {
            battle_text.value += `\n-${random_enemy.name} rolled ${enemy_block} and blocked your attack.`;
            battle_text.scrollTop = battle_text.scrollHeight;
            str_dice_element.innerText = `0`;

            // Button colors and events on
            set_buttons_on();

            // Enemy turn here

          } else {
            // If enemy block fails the attack goes through
            const str_roll_promise = new Promise((resolve) => {
              let str_interval = setInterval(async function() {
                dice_round += 1;
                if (dice_round > 20) {
                  clearInterval(str_interval);
                  dice_round = 0;
                  resolve();
                }

                dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) +
                    1;
                str_dice_element.innerText = `${dmg_roll}`;
              }, 50);
            });

            str_roll_promise.then(() => {
              random_enemy.hp -= dmg_roll;
              enemy_hp_bar.value = random_enemy.hp;
              enemy_hp.innerText = random_enemy.hp;
              battle_text.value += `\n-${random_enemy.name} failed block`;
              battle_text.value += `\n-You did ${dmg_roll} dmg`;
              battle_text.scrollTop = battle_text.scrollHeight;

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

        // Normal attack
        else if (dex_roll < 10) {

          const str_roll_promise = new Promise((resolve) => {
            let str_interval = setInterval(async function() {
              dice_round += 1;
              if (dice_round > 20) {
                clearInterval(str_interval);
                dice_round = 0;
                resolve();
              }

              dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
              str_dice_element.innerText = `${dmg_roll}`;
            }, 50);
          });

          str_roll_promise.then(() => {
            battle_text.value += `\n-You hit for ${dmg_roll} dmg!`;
            battle_text.scrollTop = battle_text.scrollHeight;
            random_enemy.hp -= dmg_roll;
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

          // Critical hit
        } else {

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
      },
  )
  ;
}

function begin_charge() {

  attack_button.style.display = 'none';
  charge_button.style.display = 'none';
  heal_button.style.display = 'none';
  skills_button.style.display = 'none';
  continue_button.style.display = 'flex';

  dex_dice_element.innerText = `C`;
  str_dice_element.innerText = `C`;
  con_dice_element.innerText = `C`;

  // Skip turn for charge
  battle_text.value += `\n-You begin to charge and will hit next turn`;
  battle_text.scrollTop = battle_text.scrollHeight;

  charge_toggle = 2;

  // Enemy turn
}

function charge() {

  enemy_turn_toggle = 0;

  set_buttons_off();

  // If player survives
  charge_toggle = 0;

  // roll damages
  const con_roll_promise = new Promise((resolve) => {
    let con_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 20) {
        dice_round = 0;
        clearInterval(con_interval);
        resolve();
      }

      con_roll = Math.floor(Math.random() * player.con / 2) + 1;
      con_dice_element.innerText = `${con_roll}`;
    }, 50);
  });

  con_roll_promise.then(() => {
    battle_text.value += `\n-CON roll for ${con_roll} DMG.`;
    battle_text.scrollTop = battle_text.scrollHeight;
  });

  const str_roll_promise = new Promise((resolve) => {
    let str_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 20) {
        clearInterval(str_interval);
        dice_round = 0;
        resolve();
      }

      dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
      str_dice_element.innerText = `${dmg_roll}`;
    }, 50);
  });

  str_roll_promise.then(() => {
    battle_text.value += `\n-STR roll for ${con_roll} DMG.`;
    battle_text.value += `\n-CHARGE did ${con_roll + dmg_roll} DMG!`;
    battle_text.scrollTop = battle_text.scrollHeight;
    random_enemy.hp -= dmg_roll + con_roll;
    enemy_hp_bar.value = random_enemy.hp;
    enemy_hp.innerText = random_enemy.hp;

    // Flicker enemy animation
    damage_animation(enemy_window);

    // Button colors and events on
    set_buttons_on();

    if (random_enemy.hp > 0) {
      charge_toggle = 0;

      // Enemy turn here

    } else {
      charge_toggle = 0;
      battle_text.value += `\n-You win`;
      battle_text.scrollTop = battle_text.scrollHeight;

      // Set enemy gray
      enemy_window.style.filter = 'grayscale(100%)';

      // End fight here
      // Add continue button
    }
  });
}

function heal() {

  set_buttons_off();

  attack_button.style.display = 'none';
  charge_button.style.display = 'none';
  heal_button.style.display = 'none';
  skills_button.style.display = 'none';
  continue_button.style.display = 'flex';

  const con_roll_promise = new Promise((resolve) => {
    let con_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 20) {
        clearInterval(con_interval);
        dice_round = 0;
        resolve();
      }

      con_roll = Math.floor(Math.random() * (player.con / 2)) + 1;
      con_dice_element.innerText = `${con_roll}`;
    }, 50);
  });

  con_roll_promise.then(() => {

    player.hp = player.hp + con_roll;

    if (player.hp > player_hp_bar.max) {
      player.hp = player_hp_bar.max;
      player_hp_bar.value = player.hp;
      player_hp.innerText = player.hp;
      battle_text.value += `\n-You healed for ${con_roll} but you cant overheal.`;
      battle_text.scrollTop = battle_text.scrollHeight;

      // Button colors and events on
      set_buttons_on();

    } else {
      player_hp_bar.value = player.hp;
      player_hp.innerText = player.hp;
      battle_text.value += `\n-You healed for ${con_roll}.`;
      battle_text.scrollTop = battle_text.scrollHeight;

      // Button colors and events on
      set_buttons_on();

    }
  });
}