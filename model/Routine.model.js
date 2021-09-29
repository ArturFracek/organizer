const Joi = require("joi");
const uuid = require("uuid").v4;

module.exports = class Routine {
  constructor(data = {}) {
    const schema = Joi.object({
      id: Joi.string().default(() => uuid()),
      routineName: Joi.string().required(),
      routineDescription: Joi.string().optional(),
      routinePriority: Joi.number().optional(),
      createdAt: Joi.number().default(Date.now),
    });

    const validated = Joi.attempt(data, schema);

    Object.assign(this, validated);
  }
};
