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
    } else {

        player.skill -= 1;

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
            let str_interval = setInterval(async function () {
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

// FIGHTER skill that hits two times and then proceeds to enemy turn
function fighter_double_strike() {

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
    } else {

        player.skill -= 1;

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

        dex_dice_element.innerText = `2X`;

        const str_roll_promise = new Promise((resolve) => {
            let str_interval = setInterval(async function () {
                dice_round += 1;
                if (dice_round > 30) {
                    clearInterval(str_interval);
                    dice_round = 0;
                    resolve();
                }

                dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
                str_dice_element.innerText = `${dmg_roll}`;
            }, 50);
        });

        str_roll_promise.then(() => {
            battle_text.value += `\n-First hit for ${dmg_roll} dmg`;
            battle_text.scrollTop = battle_text.scrollHeight;
            random_enemy.hp -= dmg_roll;
            enemy_hp_bar.value = random_enemy.hp;
            enemy_hp.innerText = random_enemy.hp;

            // Flicker enemy animation
            damage_animation(enemy_window);

            if (random_enemy.hp > 0) {

                const str_roll_promise = new Promise((resolve) => {
                    let str_interval = setInterval(async function () {
                        dice_round += 1;
                        if (dice_round > 30) {
                            clearInterval(str_interval);
                            dice_round = 0;
                            resolve();
                        }

                        dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
                        str_dice_element.innerText = `${dmg_roll}`;
                    }, 50);
                });

                str_roll_promise.then(() => {
                    battle_text.value += `\n-second hit for ${dmg_roll} dmg`;
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

            } else {

                // Button colors and events on
                set_buttons_on();

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

// HACKER skill that lets you slow your attack time and then proceeds to enemy turn
function hacker_time_stop() {

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
    } else {

        player.skill -= 1;

        for (let skill_button of all_skill_buttons) {
            skill_button.style.display = 'none';
        }

        return_to_battle_menu_button.style.display = 'none';

        attack_button.style.display = 'none';
        charge_button.style.display = 'none';
        heal_button.style.display = 'none';
        skills_button.style.display = 'none';
        continue_button.style.display = 'none';
        time_stop_button.style.display = 'flex';

        const dex_roll_promise = new Promise((resolve) => {
            time_stop_button.addEventListener('click', timestopper = function () {
                clearInterval(dex_interval);
                resolve();
            });
            console.log('event listener created in promise');
            let dex_interval = setInterval(async function () {
                dice_round += 1;
                if (dice_round > 20) {
                    dice_round = 0;
                    clearInterval(dex_interval);
                    resolve();
                }

                dex_roll = Math.floor(Math.random() * player.dex) + 1;
                dex_dice_element.innerText = `${dex_roll}`;
            }, 1000);
        });

        dex_roll_promise.then(() => {

                // Remove event listener and make new
                time_stop_button.removeEventListener('click', timestopper);

                if (dex_roll === 1) {
                    battle_text.value += `\n-You rolled ${dex_roll} and missed.`;
                    battle_text.scrollTop = battle_text.scrollHeight;
                    str_dice_element.innerText = `0`;

                    continue_button.style.display = 'flex';
                    time_stop_button.style.display = 'none';

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

                        continue_button.style.display = 'flex';
                        time_stop_button.style.display = 'none';

                        // Button colors and events on
                        set_buttons_on();

                        // Enemy turn here

                    } else {
                        // If enemy block fails the attack goes through
                        const str_roll_promise = new Promise((resolve) => {
                            time_stop_button.addEventListener('click',
                                timestopper = function () {
                                    clearInterval(str_interval);
                                    resolve();
                                });
                            console.log('event listener created in promise');
                            let str_interval = setInterval(async function () {
                                dice_round += 1;
                                if (dice_round > 20) {
                                    clearInterval(str_interval);
                                    dice_round = 0;
                                    resolve();
                                }

                                dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) +
                                    1;
                                str_dice_element.innerText = `${dmg_roll}`;
                            }, 1000);
                        });

                        str_roll_promise.then(() => {
                            random_enemy.hp -= dmg_roll;
                            enemy_hp_bar.value = random_enemy.hp;
                            enemy_hp.innerText = random_enemy.hp;
                            battle_text.value += `\n-${random_enemy.name} failed block`;
                            battle_text.value += `\n-You did ${dmg_roll} dmg`;
                            battle_text.scrollTop = battle_text.scrollHeight;

                            continue_button.style.display = 'flex';
                            time_stop_button.style.display = 'none';

                            // Remove event listener
                            time_stop_button.removeEventListener('click', timestopper);

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
                        time_stop_button.addEventListener('click', timestopper = function () {
                            clearInterval(str_interval);
                            resolve();
                        });
                        console.log('event listener created in promise');
                        let str_interval = setInterval(async function () {
                            dice_round += 1;
                            if (dice_round > 20) {
                                clearInterval(str_interval);
                                dice_round = 0;
                                resolve();
                            }

                            dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
                            str_dice_element.innerText = `${dmg_roll}`;
                        }, 1000);
                    });

                    str_roll_promise.then(() => {
                        battle_text.value += `\n-You hit for ${dmg_roll} dmg!`;
                        battle_text.scrollTop = battle_text.scrollHeight;
                        random_enemy.hp -= dmg_roll;
                        enemy_hp_bar.value = random_enemy.hp;
                        enemy_hp.innerText = random_enemy.hp;

                        continue_button.style.display = 'flex';
                        time_stop_button.style.display = 'none';

                        // Remove event listener
                        time_stop_button.removeEventListener('click', timestopper);

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
                        time_stop_button.addEventListener('click', timestopper = function () {
                            clearInterval(str_interval);
                            resolve();
                        });
                        console.log('event listener created in promise');
                        let str_interval = setInterval(async function () {
                            dice_round += 1;
                            if (dice_round > 20) {
                                clearInterval(str_interval);
                                dice_round = 0;
                                resolve();
                            }

                            dmg_roll = Math.floor(Math.random() * (6 + (player.str - 10))) + 1;
                            str_dice_element.innerText = `${dmg_roll * 2}`;
                        }, 1000);
                    });

                    str_roll_promise.then(() => {
                        battle_text.value += `\n-CRITICAL HIT for ${dmg_roll * 2} dmg`;
                        battle_text.scrollTop = battle_text.scrollHeight;
                        random_enemy.hp -= dmg_roll * 2;
                        enemy_hp_bar.value = random_enemy.hp;
                        enemy_hp.innerText = random_enemy.hp;

                        continue_button.style.display = 'flex';
                        time_stop_button.style.display = 'none';

                        // Remove event listener
                        time_stop_button.removeEventListener('click', timestopper);

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
}


// TANK skill that gives 10 + con roll hp and the proceeds to enemy turn
function tank_super_heal() {

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
    } else {

        player.skill -= 1;

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

        dex_dice_element.innerText = `HP`;

        const con_roll_promise = new Promise((resolve) => {
            let con_interval = setInterval(async function () {
                dice_round += 1;
                if (dice_round > 20) {
                    clearInterval(con_interval);
                    dice_round = 0;
                    resolve();
                }

                con_roll = Math.floor(Math.random() * (player.con / 2)) + 1;
                con_dice_element.innerText = `${con_roll + 8}`;
            }, 50);
        });

        con_roll_promise.then(() => {

            player.hp = player.hp + con_roll + 8;

            if (player.hp > player_hp_bar.max) {
                player.hp = player_hp_bar.max;
                player_hp_bar.value = player.hp;
                player_hp.innerText = player.hp;
                battle_text.value += `\n-You healed for ${con_roll + 8} but you cant overheal.`;
                battle_text.scrollTop = battle_text.scrollHeight;

                // Button colors and events on
                set_buttons_on();

            } else {
                player_hp_bar.value = player.hp;
                player_hp.innerText = player.hp;
                battle_text.value += `\n-You healed for ${con_roll + 8}.`;
                battle_text.scrollTop = battle_text.scrollHeight;

                // Button colors and events on
                set_buttons_on();

            }
        });
    }
}


