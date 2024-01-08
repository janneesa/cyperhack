const assassin = {
  'name': 'assassin',
  'class': 'assassin',
  'hp': 999,
  'skill': 1,
  'skill_max': 1,
  'str': 10,
  'dex': 14,
  'con': 10,
  'int': 12,
  'img': 'url("../cyperhack/images/characters/assassin.png")',
};

const fighter = {
  'name': 'fighter',
  'class': 'fighter',
  'hp': 22,
  'skill': 1,
  'skill_max': 1,
  'str': 12,
  'dex': 14,
  'con': 12,
  'int': 8,
  'img': 'url("../cyperhack/images/characters/fighter.png")',
};

const hacker = {
  'name': 'hacker',
  'class': 'hacker',
  'hp': 20,
  'skill': 1,
  'skill_max': 1,
  'str': 10,
  'dex': 12,
  'con': 10,
  'int': 16,
  'img': 'url("../cyperhack/images/characters/hacker.png")',
};

const tank = {
  'name': 'tank',
  'class': 'tank',
  'hp': 24,
  'skill': 1,
  'skill_max': 1,
  'str': 14,
  'dex': 10,
  'con': 14,
  'int': 8,
  'img': 'url("../cyperhack/images/characters/tank.png")',
};

// When player clicks class, event listener sets stats right.
class_1.addEventListener('click', async function() {
  player = assassin;
  console.log(player);
  class_selection.style.display = 'none';
  enemy_status.style.display = 'none';
  enemy_window.style.display = 'none';
  top_bar.style.display = 'flex';
  bottom.style.display = 'flex';
  player_window.style.backgroundImage = player.img;
  player_hp_bar.value = player.hp;
  player_hp_bar.max = player.hp;
  player_hp.innerText = player.hp;
  player_hp_max.innerText = player.hp;
  str.innerText = player.str;
  dex.innerText = player.dex;
  con.innerText = player.con;
  int.innerText = player.int;
  welcome_dialogue();
});

class_2.addEventListener('click', async function() {
  player = fighter;
  console.log(player);
  class_selection.style.display = 'none';
  enemy_status.style.display = 'none';
  enemy_window.style.display = 'none';
  top_bar.style.display = 'flex';
  bottom.style.display = 'flex';
  player_window.style.backgroundImage = player.img;
  player_hp_bar.value = player.hp;
  player_hp_bar.max = player.hp;
  player_hp.innerText = player.hp;
  player_hp_max.innerText = player.hp;
  str.innerText = player.str;
  dex.innerText = player.dex;
  con.innerText = player.con;
  int.innerText = player.int;
  welcome_dialogue();
});

class_3.addEventListener('click', async function() {
  player = hacker;
  console.log(player);
  class_selection.style.display = 'none';
  enemy_status.style.display = 'none';
  enemy_window.style.display = 'none';
  top_bar.style.display = 'flex';
  bottom.style.display = 'flex';
  player_window.style.backgroundImage = player.img;
  player_hp_bar.value = player.hp;
  player_hp_bar.max = player.hp;
  player_hp.innerText = player.hp;
  player_hp_max.innerText = player.hp;
  str.innerText = player.str;
  dex.innerText = player.dex;
  con.innerText = player.con;
  int.innerText = player.int;
  welcome_dialogue();
});

class_4.addEventListener('click', async function() {
  player = tank;
  console.log(player);
  class_selection.style.display = 'none';
  enemy_status.style.display = 'none';
  enemy_window.style.display = 'none';
  top_bar.style.display = 'flex';
  bottom.style.display = 'flex';
  player_window.style.backgroundImage = player.img;
  player_hp_bar.value = player.hp;
  player_hp_bar.max = player.hp;
  player_hp.innerText = player.hp;
  player_hp_max.innerText = player.hp;
  str.innerText = player.str;
  dex.innerText = player.dex;
  con.innerText = player.con;
  int.innerText = player.int;
  welcome_dialogue();
});
