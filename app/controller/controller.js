const Tutorial = require("../models/model.js");

exports.create = (req, res) => {
  const { title, description, published } = req.body;

  Tutorial.create({
    title,
    description,
    published: published ? published : false,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Tutorial not found or request body is empty.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Tutorial with id=${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Tutorial not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Tutorial with id=${id}`,
      });
    });
};
