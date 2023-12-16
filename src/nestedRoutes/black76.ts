import componentTypes from '@data-driven-forms/react-form-renderer/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types'

import { ModelRoute } from './types'

const black76: ModelRoute = {
  path: '/black-76',
  schema: {
    title: 'Black 76',
    description:
      'The Black model for European options on futures, bonds, and rates.',
    fields: [
      {
        name: 'isCall',
        label: 'Option Type',
        component: componentTypes.SWITCH,
        onText: 'Call',
        offText: 'Put',
        initialValue: true,
        dataType: 'boolean',
        FormFieldGridProps: { xs: 2 },
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
        label: 'Risk Free Rate',
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
  analyticImportPath: 'jetblack_options.european.black_76',
  pricePrototype: [
    'isCall',
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'volatility'
  ],
  analyticsPrototypes: {
    delta: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'volatility'
    ],
    gamma: [
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'volatility'
    ],
    theta: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'volatility'
    ],
    vega: [
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'volatility'
    ],
    rho: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'volatility'
    ]
  },
  bumpFactoryPrototype: ['isCall'],
  bumpPrototype: [
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'volatility'
  ]
}

export default black76
