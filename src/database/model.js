const mongoose = require('mongoose');

/**
 * @openapi
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         age:
 *           type: integer
 *           format: int32
 *           example: 30
 *         sex:
 *           type: string
 *           example: Male
 *         hair_color:
 *           type: string
 *           example: Brown
 *         occupation:
 *           type: string
 *           example: Engineer
 *         grade:
 *           type: integer
 *           format: int32
 *           example: 8
 *         religion:
 *           type: string
 *           example: None
 */

const characterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    hair_color: String,
    occupation: String,
    grade: Number,
    religion: String,
});

module.exports = mongoose.model('Character', characterSchema);