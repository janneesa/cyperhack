let successes = 0;

let fails = 0;

let hack_roll;

let hack_victory = 0;


function win_condition_check() {
  if (total_wins > 2) {
    // VICTORY HERE
    console.log('VICTORY')

    document.getElementById('places-first-column').style.display = 'none';
    document.getElementById('places-second-column').style.display = 'none';

    document.getElementById('final-place').style.display = 'flex'

  }
  else if (total_losses > 2) {
    // GAME OVER HERE
    console.log('GAME OVER')
  }
  else {
    console.log('Hack more to win')
  }
}

function back_to_map() {
  hack.style.display = 'none';
  bottom.style.display = 'flex';

  try {

    if (hack_victory === 1) {
      if (player_location === 1) {
        place_1.style.pointerEvents = 'none';
        place_1.innerText = '01';
        place_1.style.fontSize = '8vh';
        place_1.style.filter = 'grayscale(100%)';
      } else if (player_location === 2) {
        place_2.style.pointerEvents = 'none';
        place_2.innerText = '01';
        place_2.style.fontSize = '8vh';
        place_2.style.filter = 'grayscale(100%)';
      } else if (player_location === 3) {
        place_3.style.pointerEvents = 'none';
        place_3.innerText = '01';
        place_3.style.fontSize = '8vh';
        place_3.style.filter = 'grayscale(100%)';
      } else if (player_location === 4) {
        place_4.style.pointerEvents = 'none';
        place_4.innerText = '01';
        place_4.style.fontSize = '8vh';
        place_4.style.filter = 'grayscale(100%)';
      } else if (player_location === 5) {
        place_5.style.pointerEvents = 'none';
        place_5.innerText = '01';
        place_5.style.fontSize = '8vh';
        place_5.style.filter = 'grayscale(100%)';
      } else if (player_location === 6) {
        place_6.style.pointerEvents = 'none';
        place_6.innerText = '01';
        place_6.style.fontSize = '8vh';
        place_6.style.filter = 'grayscale(100%)';
      }
    } else if (hack_victory === 0) {
      if (player_location === 1) {
        place_1.style.pointerEvents = 'none';
        place_1.innerText = '00';
        place_1.style.fontSize = '8vh';
        place_1.style.filter = 'grayscale(100%)';
      } else if (player_location === 2) {
        place_2.style.pointerEvents = 'none';
        place_2.innerText = '00';
        place_2.style.fontSize = '8vh';
        place_2.style.filter = 'grayscale(100%)';
      } else if (player_location === 3) {
        place_3.style.pointerEvents = 'none';
        place_3.innerText = '00';
        place_3.style.fontSize = '8vh';
        place_3.style.filter = 'grayscale(100%)';
      } else if (player_location === 4) {
        place_4.style.pointerEvents = 'none';
        place_4.innerText = '00';
        place_4.style.fontSize = '8vh';
        place_4.style.filter = 'grayscale(100%)';
      } else if (player_location === 5) {
        place_5.style.pointerEvents = 'none';
        place_5.innerText = '00';
        place_5.style.fontSize = '8vh';
        place_5.style.filter = 'grayscale(100%)';
      } else if (player_location === 6) {
        place_6.style.pointerEvents = 'none';
        place_6.innerText = '00';
        place_6.style.fontSize = '8vh';
        place_6.style.filter = 'grayscale(100%)';
      }
    } else {
      console.log('Error in player_location. value is not 1 or 0');
    }
  } finally {
    win_condition_check()
    console.log('win_con checked')
  }
}

function set_hack_buttons_off() {
  document.body.style.pointerEvents = 'none';
  begin_hack_button.style.backgroundColor = 'grey';
  hack_skills_button.style.backgroundColor = 'grey';
  to_map_button.style.backgroundColor = 'grey';
}

function set_hack_buttons_on() {
  document.body.style.pointerEvents = 'auto';
  begin_hack_button.style.backgroundColor = 'red';
  hack_skills_button.style.backgroundColor = 'red';
  to_map_button.style.backgroundColor = 'red';
}

function lose_hack() {
  int_dice_1.style.color = 'red';
  hack_box_1.style.border = '3px solid red';
  int_dice_2.style.color = 'red';
  hack_box_2.style.border = '3px solid red';
  int_dice_3.style.color = 'red';
  hack_box_3.style.border = '3px solid red';
  int_dice_4.style.color = 'red';
  hack_box_4.style.border = '3px solid red';
  int_dice_5.style.color = 'red';
  hack_box_5.style.border = '3px solid red';
  int_dice_6.style.color = 'red';
  hack_box_6.style.border = '3px solid red';
  begin_hack_button.style.display = 'none';
  hack_skills_button.style.display = 'none';
  to_map_button.style.display = 'flex';
  hack_victory = 0;
  total_losses += 1
}

function win_hack() {
  int_dice_1.style.color = 'yellowgreen';
  hack_box_1.style.border = '3px solid forestgreen';
  int_dice_2.style.color = 'yellowgreen';
  hack_box_2.style.border = '3px solid forestgreen';
  int_dice_3.style.color = 'yellowgreen';
  hack_box_3.style.border = '3px solid forestgreen';
  int_dice_4.style.color = 'yellowgreen';
  hack_box_4.style.border = '3px solid forestgreen';
  int_dice_5.style.color = 'yellowgreen';
  hack_box_5.style.border = '3px solid forestgreen';
  int_dice_6.style.color = 'yellowgreen';
  hack_box_6.style.border = '3px solid forestgreen';
  begin_hack_button.style.display = 'none';
  hack_skills_button.style.display = 'none';
  to_map_button.style.display = 'flex';
  hack_victory = 1;
  total_wins += 1

  player.hp = player_hp_bar.max;
  player_hp_bar.value = player.hp;
  player_hp.innerText = player.hp;

  player.skill = player.skill_max
}

function run_hack() {

  successes = 0;
  fails = 0;
  hack_victory = 0;

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_1.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_1.style.color = 'red';
      hack_box_1.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack2();
      }
    } else {
      successes++;
      int_dice_1.style.color = 'yellowgreen';
      hack_box_1.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack2();
      }
    }
  });
}

function run_hack2() {

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_2.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_2.style.color = 'red';
      hack_box_2.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack3();
      }
    } else {
      successes++;
      int_dice_2.style.color = 'yellowgreen';
      hack_box_2.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack3();
      }
    }
  });
}

function run_hack3() {

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_3.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_3.style.color = 'red';
      hack_box_3.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack4();
      }
    } else {
      successes++;
      int_dice_3.style.color = 'yellowgreen';
      hack_box_3.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack4();
      }
    }
  });
}

function run_hack4() {

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_4.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_4.style.color = 'red';
      hack_box_4.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack5();
      }
    } else {
      successes++;
      int_dice_4.style.color = 'yellowgreen';
      hack_box_4.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack5();
      }
    }
  });
}

function run_hack5() {

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_5.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_5.style.color = 'red';
      hack_box_5.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack6();
      }
    } else {
      successes++;
      int_dice_5.style.color = 'yellowgreen';
      hack_box_5.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // Run second hack if no victory or fail
        run_hack6();
      }
    }
  });
}

function run_hack6() {

  set_hack_buttons_off();

  const int_roll_promise = new Promise((resolve) => {
    let int_interval = setInterval(async function() {
      dice_round += 1;
      if (dice_round > 40) {
        clearInterval(int_interval);
        dice_round = 0;
        resolve();
      }

      hack_roll = Math.floor(
          Math.random() * (20 + (player.int - 10))) + 1;
      int_dice_6.innerText = `${hack_roll}`;
    }, 50);
  });

  int_roll_promise.then(() => {

    set_hack_buttons_on();

    // If hack fails
    if (hack_roll < 10) {
      fails++;
      int_dice_6.style.color = 'red';
      hack_box_6.style.border = '3px solid red';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // No hacks left
      }
    } else {
      successes++;
      int_dice_6.style.color = 'yellowgreen';
      hack_box_6.style.border = '3px solid forestgreen';
      if (fails > 2) {
        // LOSE HACK
        lose_hack();
      } else if (successes > 2) {
        // WIN HACK
        win_hack();
      } else {
        // No hacks left
      }
    }
  });
}