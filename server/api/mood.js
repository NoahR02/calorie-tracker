const express = require("express");
const router = express.Router();
const db = require("../db");

router.route("/mood")

router.post("/mood", (req, res) => {
  const firstName = req.User.firstName;
  const gender = req.User.gender;
  return res.json({firstName, gender});
});


router.post("/mood/date/:date", (req, res) => {
  const {date} = req.params;
  const {userId} = req.User;
  const {mood} = req.body;

  db.connect( async (err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }

    const {rows} = await client.query("select date from mood where date = to_date($1,'YYYYMMDD') and mood.userId = $2;", [date, userId] );
    
    
    if(rows.length > 0) { await client.query("delete from mood where date = to_date($1,'YYYYMMDD') and mood.userId = $2;", [date, userId] ); }
 
    await client.query("insert into mood(userId, mood, date) values ($1, $2, to_date($3,'YYYYMMDD') );",  [userId, mood, date]);
    release();
    return res.redirect("/mood");
  });
  
  return res.redirect("/mood");
});

module.exports = router;