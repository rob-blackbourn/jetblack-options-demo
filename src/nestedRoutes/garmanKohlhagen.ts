import componentTypes from '@data-driven-forms/react-form-renderer/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types'

import { ModelRoute } from './types'

export const garmanKohlhagen: ModelRoute = {
  path: '/garman-kohlhagen',
  schema: {
    title: 'Garman Kohlhagen',
    description:
      'The Garman Kohlhagen model is used to price European FX options.',
    fields: [
      {
        name: 'isCall',
        label: 'Option Type',
        component: componentTypes.SWITCH,
        onText: 'Call',
        offText: 'Put',
        initialValue: true,
        dataType: 'boolean',
        FormFieldGridProps: { xs: 12 },
      },
      {
        name: 'assetPrice',
        label: 'Asset Price',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 100,
        FormFieldGridProps: { xs: 2 },
      },
      {
        name: 'strikePrice',
        label: 'Strike Price',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 100,
        FormFieldGridProps: { xs: 2 },
      },
      {
        name: 'timeToExpiry',
        label: 'Time To Expiry',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 0.5,
        FormFieldGridProps: { xs: 2 },
      },
      {
        name: 'riskFreeRate',
        label: 'Base Yield',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 0.005,
        FormFieldGridProps: { xs: 2 },
      },
      {
        name: 'quoteRiskFreeRate',
        label: 'Quote Yield',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 0.005,
        FormFieldGridProps: { xs: 2 },
      },
      {
        name: 'volatility',
        label: 'Volatility',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 0.25,
        FormFieldGridProps: { xs: 2 },
      }
    ]
  },
  analyticImportPath: 'jetblack_options.european.garman_kolhagen',
  pricePrototype: [
    'isCall',
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'quoteRiskFreeRate',
    'volatility'
  ],
  analyticsPrototypes: {
    delta: null,
    gamma: null,
    theta: null,
    vega: null,
    rho: null
  },
  bumpFactoryPrototype: ['isCall'],
  bumpPrototype: [
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'quoteRiskFreeRate',
    'volatility'
  ]
}

export default garmanKohlhagen
