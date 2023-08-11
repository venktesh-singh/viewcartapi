const express = require("express");
const router = express.Router();

const {
  addAttribute,
  addAllAttributes,
  getAllAttributes,
  getShowingAttributes,
  getAttributeById,
  updateAttributes,
  updateStatus,
  deleteAttribute,
  getShowingAttributesTest,
  updateChildStatus,
  deleteChildAttribute,
  addChildAttributes,
  updateChildAttributes,
  getChildAttributeById,
  updateManyAttribute,
  deleteManyAttribute,
  updateManyChildAttribute,
  deleteManyChildAttribute,
} = require('../controller/attributeController');

//add attribute
router.post('/attribute/add', addAttribute);

//add all attributes
router.post('/attribute/add/all', addAllAttributes);

// add child attribute
router.put('/attribute/add/child/:id', addChildAttributes);

//get all attribute
router.get('/attribute/', getAllAttributes);

// router.get('/show', getShowingProducts);
router.get('/attribute/show', getShowingAttributes);

router.put('/attribute/show/test', getShowingAttributesTest);

// update many attributes
router.patch('/attribute/update/many', updateManyAttribute);

//get attribute by id
router.get('/attribute/:id', getAttributeById);

// child get attributes by id
router.get('/attribute/child/:id/:ids', getChildAttributeById);

//update attribute
router.put('/attribute/:id', updateAttributes);

// update child attribute
router.patch('/attribute/update/child/many', updateManyChildAttribute);

// update child attribute
router.put('/attribute/update/child/:attributeId/:childId', updateChildAttributes);

//show/hide a attribute
router.put('/attribute/status/:id', updateStatus);

// show and hide a child status
router.put('/attribute/status/child/:id', updateChildStatus);

//delete attribute
router.delete('/attribute/:id', deleteAttribute);

// delete child attribute
router.put('/attribute/delete/child/:attributeId/:childId', deleteChildAttribute);

// delete many attribute
router.patch('/attribute/delete/many', deleteManyAttribute);

// delete many child attribute
router.patch('/attribute/delete/child/many', deleteManyChildAttribute);

module.exports = router;
