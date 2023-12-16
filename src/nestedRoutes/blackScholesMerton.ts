import componentTypes from '@data-driven-forms/react-form-renderer/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types'

import { ModelRoute } from './types'

export const blackScholesMerton: ModelRoute = {
  path: '/black-scholes-merton',
  schema: {
    title: 'Black-Scholes-Merton',
    description:
      'The Black-Scholes-Merton Model for European options on dividend paying stock.',
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
        name: 'dividendYield',
        label: 'Dividend Yield',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 0.003,
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
  analyticImportPath: 'jetblack_options.european.black_scholes_merton',
  pricePrototype: [
    'isCall',
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'dividendYield',
    'volatility'
  ],
  analyticsPrototypes: {
    delta: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'dividendYield',
      'volatility'
    ],
    gamma: [
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'dividendYield',
      'volatility'
    ],
    theta: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'dividendYield',
      'volatility'
    ],
    vega: [
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'dividendYield',
      'volatility'
    ],
    rho: [
      'isCall',
      'assetPrice',
      'strikePrice',
      'timeToExpiry',
      'riskFreeRate',
      'dividendYield',
      'volatility'
    ]
  },
  bumpFactoryPrototype: ['isCall'],
  bumpPrototype: [
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'dividendYield',
    'volatility'
  ]
}

export default blackScholesMerton
