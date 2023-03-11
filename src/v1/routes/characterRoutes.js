const express = require("express");
const router = express.Router();
const characterController = require("../../controllers/characterController")


/**7
 * @openapi
 * /api/v1/characters:
 *   get:
 *     summary: Retrieve a list of all characters from the database
 *     tags:
 *       - Characters
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by character name
 *       - in: query
 *         name: occupation
 *         schema:
 *           type: string
 *         description: Filter by character occupation
 *       - in: query
 *         name: religion
 *         schema:
 *           type: string
 *         description: Filter by character religion
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Character"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 message:
 *                   type: string
 *                   example: Error fetching characters from database
 */
router.get('/', characterController.getAllCharacters);
/**
 * @openapi
 * /api/v1/characters/{id}:
 *   get:
 *     summary: Retrieve a single character by ID
 *     tags:
 *       - Characters
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: The ID of the character to retrieve
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: "#/components/schemas/Character"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: NOT_FOUND
 *                 message:
 *                   type: string
 *                   example: Character not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 message:
 *                   type: string
 *                   example: Error fetching character from database
 */

router.get('/:id', characterController.getOneCharacter);

/**
 * @openapi
 * /api/v1/characters:
 *   post:
 *     tags:
 *       - Characters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Character"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Character"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.post('/', characterController.createNewCharacter);
/**
 * @openapi
 * /api/v1/characters/{id}:
 *   patch:
 *     tags:
 *       - Characters
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the character to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Character"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Character"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.patch('/:id', characterController.updateOneCharacter);
/**
 * @openapi
 * /api/v1/characters/{id}:
 *   delete:
 *     tags:
 *       - Characters
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the character to delete
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.delete('/:id', characterController.deleteOneCharacter);

module.exports = router;