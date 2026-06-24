let win = 56;
let lose = 5;
let mmr = CalculaMMR(win, lose);
let rankFinal = calculaRank(mmr);

function CalculaMMR(win, lose) {
  let saldo = win - lose;
  console.log(`O saldo de vitórias é ${saldo}`);
  return saldo;
}

function calculaRank(mmr) {
  let rank = '';

  if (mmr <= 10) {
    rank = 'Ferro';
  } else if (mmr >= 11 && mmr <= 20) {
    rank = 'Bronze';
  } else if (mmr >= 21 && mmr <= 50) {
    rank = 'Prata';
  } else if (mmr >= 51 && mmr <= 80) {
    rank = 'Ouro';
  } else if (mmr >= 81 && mmr <= 90) {
    rank = 'Diamante';
  } else if (mmr >= 91 && mmr <= 100) {
    rank = 'Lendário';
  } else {
    rank = 'Imortal';
  }

  return rank;
}

console.log(`O Herói tem de saldo de ${mmr}  está no nível de ${rankFinal}`);
