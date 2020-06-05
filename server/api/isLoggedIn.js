const express = require("express");
const router = express.Router();

 /*
    @name [POST]/api/isLoggedIn,
    @type Function : Boolean,
    @description : Return true or false depending on if the user is logged in or not.
 */
router.post("/api/isLoggedIn", (req, res) => {
  if(req.User.userId) {
    return res.json({isLoggedIn:true});
  } else {
    return res.json({isLoggedIn:false});
  }
});

module.exports = router;