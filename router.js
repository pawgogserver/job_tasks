const express = require('express');
const router = express.Router();

const { column } = require('./schema');

router.route('/column').get((req, res, next) => {
  column.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route('/column').post((req, res, next) => {
  column.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route('/column/:id').put((req, res, next) => {
  column.updateMany(
    { prod_id: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

router.route('/column/:id').delete((req, res, next) => {
  column.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

router.route('/column/:id').delete((req, res, next) => {
  column.deleteMany({ prod_id: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
