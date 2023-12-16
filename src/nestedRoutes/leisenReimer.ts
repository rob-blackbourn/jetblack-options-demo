import componentTypes from '@data-driven-forms/react-form-renderer/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types'

import { ModelRoute } from './types'

export const leisenReimer: ModelRoute = {
  path: '/leisen-reimer',
  schema: {
    title: 'Leisen-Reimer',
    description: 'Leisen-Reimer tree option pricing',
    fields: [
      {
        name: 'isEuropean',
        label: 'Option Style',
        component: componentTypes.SWITCH,
        onText: 'European',
        offText: 'American',
        initialValue: true,
        FormFieldGridProps: { xs: 6 },
      },
      {
        name: 'isCall',
        label: 'Option Type',
        component: componentTypes.SWITCH,
        onText: 'Call',
        offText: 'Put',
        initialValue: true,
        FormFieldGridProps: { xs: 6 },
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
        name: 'costOfCarry',
        label: 'Time To Expiry',
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
      },
      {
        name: 'steps',
        label: 'Steps',
        component: componentTypes.TEXT_FIELD,
        type: 'number',
        dataType: 'number',
        validate: [
          {
            type: validatorTypes.REQUIRED
          }
        ],
        initialValue: 200,
        FormFieldGridProps: { xs: 2 },
      }
    ]
  },
  analyticImportPath: 'jetblack_options.trees.leisen_reimer',
  pricePrototype: [
    'isEuropean',
    'isCall',
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'costOfCarry',
    'volatility',
    'steps'
  ],
  analyticsPrototypes: {
    delta: null,
    gamma: null,
    theta: null,
    vega: null,
    rho: null
  },
  bumpFactoryPrototype: ['isEuropean', 'isCall', 'steps'],
  bumpPrototype: [
    'assetPrice',
    'strikePrice',
    'timeToExpiry',
    'riskFreeRate',
    'costOfCarry',
    'volatility'
  ]
}

export default leisenReimer
