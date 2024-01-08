let dialogue_counter = 0

dialogue_friendly.addEventListener('click', async function() {
  if (dialogue_counter === 0) {
    welcome_dialogue_part2()
  } else if (dialogue_counter === 1){
    welcome_dialogue_part3()
  } else if (dialogue_counter === 2){
    welcome_dialogue_part4()
  } else if (dialogue_counter === 3){
    turn_on_actions()
  } else if (dialogue_counter === 4){
    first_battle()
  } else if (dialogue_counter === 5){
    first_battle_part2()
  }

});

function turn_off_actions() {
  container.style.filter = 'grayscale(100%)';
  bottom.style.pointerEvents = 'none';
  battle.style.pointerEvents = 'none';
  dialogue_friendly.style.pointerEvents = 'auto';
  dialogue_friendly.style.display = 'flex';
}

function turn_on_actions() {
  dialogue_counter++
  container.style.filter = 'none';
  bottom.style.pointerEvents = 'auto';
  battle.style.pointerEvents = 'auto';
  dialogue_friendly.style.pointerEvents = 'none';
  dialogue_friendly.style.display = 'none';
}

function welcome_dialogue() {
  turn_off_actions();
  dialogue_chat.value = `-Hello. Can you hear me...? The Company has been claiming too much territory in the city. We must fight back!`;
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function welcome_dialogue_part2() {
  dialogue_counter++
  dialogue_chat.value = `-If we dont do anything about The Company they will wipe us out. You must fight through three territories and hack them back to our control.`;
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function welcome_dialogue_part3() {
  dialogue_counter++
  dialogue_chat.value = '-Select territory you want to go by pressing it. You will most likely face resistance but i have faith in you. ' +
      "Once you have fought through you have a chance at hacking. If you manage to hack successfully we can get data of The Company's bosses location.";
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function welcome_dialogue_part4() {
  dialogue_counter++
  dialogue_chat.value = "-Your mission is to get three successful hacks so we can be sure where The Company's boss is located. " +
      "If you fail hacking three times before you get three successful hacks The Company will find is first and we lose... Good luck.";
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle() {
  dialogue_counter++
  dialogue_chat.value = "-Hah. I was right. City is full of The Company's guards and mercenaries. Looks like they have hired all kind of help to keep city under their control. " +
      "I believe you can fight through these enemies.";
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle_part2() {
  dialogue_counter++
  dialogue_chat.value = "-Use your normal attacks to hit the enemy. Thanks to your cybernetic enhancements DEX and DMG are rolled automatically. " +
      "If your DEX roll is less than half of the enemy's DEX attacks becomes weak and enemy has chance to block. Dont worry... You have the same chance to block if enemy rolls weak attack. ";
  dialogue_chat.value += `\n\n-Tap to continue >`;
}