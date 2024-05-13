import Joi from 'joi'

const getModelSchema = Joi.object({
  success: Joi.boolean().required(),
  message: Joi.string().required(),
  data: Joi.object({
    items: Joi.array().items(
      Joi.object({
        id: Joi.string().guid().required(),
        name: Joi.string().required(),
        totalQuestions: Joi.number().required(),
        classificationArea: Joi.boolean().required(),
        dissertation: Joi.boolean().required(),
        correctionTypes: Joi.array().items(
          Joi.object({
            id: Joi.string().guid().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
          })
        ).required(),
        entry: Joi.array().items(
          Joi.object({
            id: Joi.string().guid().required(),
            name: Joi.string().required(),
            foreignLanguage: Joi.boolean().required(),
            questionsQty: Joi.number().required(),
            questionsForeignLanguageQty: Joi.number().required(),
            duration: Joi.number().required(),
            order: Joi.number().required(),
            questionTypes: Joi.array().items(
              Joi.object({
                id: Joi.string().guid().required(),
                name: Joi.string().required(),
                description: Joi.string().required(),
                questionsQty: Joi.number().required(),
              })
            ).required(),
          })
        ).required(),
      })
    ).required(),
    pageNumber: Joi.number().required(),
    pageCount: Joi.number().required(),
    totalRows: Joi.number().required(),
  }).required(),
});

export { getModelSchema }
