import Joi from 'joi'

const getAssesmentApplicationFormatSchema = Joi.object({
  success: Joi.boolean(),
  message: Joi.string(),
  data: Joi.array().items(
    Joi.object({
      id: Joi.string().guid().required(),
      name: Joi.string().required(),
      description: Joi.string().required()
    })
  )
})

export { getAssesmentApplicationFormatSchema }