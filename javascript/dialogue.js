let dialogue_counter = 0;

dialogue_friendly.addEventListener('click', async function() {
  if (dialogue_counter === 0) {
    welcome_dialogue_part2();
  } else if (dialogue_counter === 1) {
    welcome_dialogue_part3();
  } else if (dialogue_counter === 2) {
    welcome_dialogue_part4();
  } else if (dialogue_counter === 3) {
    turn_on_actions();
  } else if (dialogue_counter === 4) {
    first_battle_part2();
  } else if (dialogue_counter === 5) {
    first_battle_part3();
  } else if (dialogue_counter === 6) {
    first_battle_part4();
  } else if (dialogue_counter === 7) {
    first_battle_part5();
  } else if (dialogue_counter === 8) {
    turn_on_actions();
  } else if (dialogue_counter === 9) {
    first_hack_part2();
  } else if (dialogue_counter === 10) {
    level_up_dialogue();
  } else if (dialogue_counter === 11) {
    turn_on_actions();
  } else if (dialogue_counter === 50) {
    dialogue_pic.style.background = `url("../cyperhack/images/ui/leader.png)`;
    dialogue_pic.style.backgroundSize = 'contain';
    dialogue_pic.style.backgroundRepeat = 'no-repeat';
    dialogue_pic.style.backgroundPosition = 'center';
    turn_on_actions();
    setup_fight();
  } else if (dialogue_counter === 99) {
    location.reload();
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
  dialogue_counter++;
  dialogue_chat.value = `-If we dont do anything about The Company they will wipe us out. You must fight through three territories and hack them back to our control.`;
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function welcome_dialogue_part3() {
  dialogue_counter++;
  dialogue_chat.value = '-Select territory you want to go by pressing it. You will most likely face resistance but i have faith in you. ' +
      'Once you have fought through you have a chance at hacking. If you manage to hack successfully we can get data of The Company\'s bosses location.';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function welcome_dialogue_part4() {
  dialogue_counter++;
  dialogue_chat.value = '-Your mission is to get three successful hacks so we can be sure where The Company\'s boss is located. ' +
      'If you fail hacking three times before you get three successful hacks The Company will find us first and we lose... Good luck.';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle() {
  turn_off_actions();

  dialogue_counter = 4;
  dialogue_chat.value = '-Hah. I was right. City is full of The Company\'s guards and mercenaries. Looks like they have hired all kind of help to keep city under their control. ' +
      'I believe you can fight through these enemies.';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle_part2() {
  dialogue_counter++;
  dialogue_chat.value = '-Use your normal attacks to hit the enemy. Thanks to your cybernetic enhancements DEX and DMG are rolled automatically. ' +
      'If your DEX roll is less than half of the enemy\'s DEX stat, attack becomes weak and enemy has chance to block. Dont worry... You have the same chance to block if enemy rolls weak attack. ';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle_part3() {
  dialogue_counter++;
  dialogue_chat.value = '-When you use charge you will skip turn to do more damage on the next round. ' +
      'Charge can not be blocked so you will always hit it. ';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle_part4() {
  dialogue_counter++;
  dialogue_chat.value = '-If you get low on health you can try to heal. ' +
      '\nYou also have some special skills you can use. You have one skill point to spend per battle and it only recharges if you successfully hack the location after the fight.';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_battle_part5() {
  dialogue_counter++;
  dialogue_chat.value = '-Now show this idiot who\'s the king! ';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_hack() {
  turn_off_actions();

  dialogue_counter = 9;
  dialogue_chat.value = '-I knew that villain had no chance against you! ' +
      '\nNow you need to hack this place so we can get some intel about The Company boss.';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function first_hack_part2() {
  dialogue_counter = 11;
  dialogue_chat.value = '-When hacking your cyber enhancements take over and try to hack automatically. ' +
      'You need three green lights for the hack to be successful. If you get 10 or more the box turns green. If you get less than 10 it turns red. Three red boxes before getting three green ones means you fail the hack. ' +
      'If you fail you can not harvest then energy from the location servers and you dont get health or skill point recharge. ';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function after_hack_win() {
  turn_off_actions();

  dialogue_counter = 10;
  dialogue_chat.value = '-Good job! after successful hack you get full health and your skill point recharges. ' +
      '\nI will mark successful hacks with 01 and failed ones with 00. Now go get some more intel!';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function after_hack_lost() {
  turn_off_actions();

  dialogue_counter = 10;
  dialogue_chat.value = '-Oh no. Looks like you didnt manage to hack that territory. ' +
      '\nI will mark successful hacks with 01 and failed ones with 00. Now go try again!';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function level_up_dialogue() {
  dialogue_counter = 11;
  dialogue_chat.value = '-No matter if you win or lose, you still gain experience from completed territory. ' +
      '\nTap your image to choose upgrade for yourself. You can choose to boost your stats or get one more skill point. ';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function win_condition_true() {
  turn_off_actions();

  dialogue_counter = 11;
  dialogue_chat.value = '-Amazing! You managed to hack three places without The Company finding us. ' +
      '\nFrom the  intel you gathered we know that The Company\'s boss is inside this tower. Go finish him and claim the control of the city back!';
  dialogue_chat.value += `\n\n-Tap to continue >`;
}

function game_over() {
  turn_off_actions();

  dialogue_counter = 99;
  dialogue_chat.value = '-Looks like the mission was too much for you. ' +
      '\nDont worry, we will upload your mind to the next agent so you can try again.';
  dialogue_chat.value += `\n\n-Tap to start new game >`;
}

function lost_three_hacks() {
  turn_off_actions();

  dialogue_counter = 99;
  dialogue_chat.value = '-Looks like the mission was too much for you. ' +
      '\nYou lost too many hacks before we could find The Company\'s boss. ';
  dialogue_chat.value += `\n\n-Tap to start new game >`;
}

function boss_dialogue() {
  turn_off_actions();

  dialogue_pic.style.background = `url("../cyperhack/images/enemies/boss.png")`;
  dialogue_pic.style.backgroundSize = 'contain';
  dialogue_pic.style.backgroundRepeat = 'no-repeat';
  dialogue_pic.style.backgroundPosition = 'center';

  dialogue_counter = 50;
  dialogue_chat.value = '-So you are the one who has been fucking up my plans. ' +
      '\nI think it\'s about time to I get rid of you. ';
  dialogue_chat.value += `\n\n-Tap to fight the Boss >`;
}

function last_dialogue() {
  turn_off_actions();

  dialogue_pic.style.background = `url("../cyperhack/images/ui/leader.png")`;
  dialogue_pic.style.backgroundSize = 'contain';
  dialogue_pic.style.backgroundRepeat = 'no-repeat';
  dialogue_pic.style.backgroundPosition = 'center';

  dialogue_counter = 99;
  dialogue_chat.value = '-You did it! ' +
      '\nI never doubted you. The city will be forever grateful to you. ';
  dialogue_chat.value += `\n\n-Tap for main menu >`;
}