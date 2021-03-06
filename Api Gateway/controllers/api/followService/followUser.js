const router = require("express").Router();
const { sendToFollowUserQueue } = require("../../../queue/sendQueueMessage");

router.post("/:followerid", (req, res) => {
  const user1 = req.params.followerid;
  const user2 = req.headers.authorization;
  if ((user1) && (user1 !== user2)) {
    sendToFollowUserQueue(res, { user1, user2 });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
 