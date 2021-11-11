const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
  try {
    const missions = await prisma.mission.findMany();
    res.json({ missions });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
