const { Match } = require('../models');
const catchAsync = require('../utils/catchAsync');

exports.getMatchStats = catchAsync(async (req, res) => {
  const matches = await Match.findAll({ order: [['date', 'DESC']] });
  if (matches.length === 0) {
    return res.status(200).json({
      success: true,
      data: { totalMatches: 0, totalWins: 0, totalLosses: 0, winrate: 0, winStreak: 0 }
    });
  }

  const totalMatches = matches.length;
  const totalWins = matches.filter(m => m.result === 'Victoire').length;
  const totalLosses = totalMatches - totalWins;
  const winrate = Math.round((totalWins / totalMatches) * 100);

  let winStreak = 0;
  for (const match of matches) {
    if (match.result === 'Victoire') winStreak++;
    else break;
  }

  res.status(200).json({
    success: true,
    data: { totalMatches, totalWins, totalLosses, winrate, winStreak }
  });
});