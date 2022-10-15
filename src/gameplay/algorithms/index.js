import { alternateAlgorithm } from "./alternate"
import { adjacentAlgorithm } from "./adjacent"
import { linearAlgorithm } from "./linear"
import { reverseLinearAlgorithm } from "./reverseLinear"
import { randomAlgorithm } from "./random"
import { doubleCheck } from "./doubleCheck"
import { frozen } from "./frozen"

export const algorithmsList = {
  adjacent: {
    value: 'adjacent',
    label: 'Adjacent',
    description: '',
    function: adjacentAlgorithm
  },
  alternate: {
    value: 'alternate',
    label: 'Alternate',
    description: '',
    function: alternateAlgorithm
  },
  random: {
    value: 'random',
    label: 'Random Teleport',
    description: '',
    function: randomAlgorithm
  },
  linear: {
    value: 'linear',
    label: 'Linear',
    description: '',
    function: linearAlgorithm
  },
  reverselinear: {
    value: 'reverselinear',
    label: 'Reverse Linear',
    description: '',
    function: reverseLinearAlgorithm
  },
  doublecheck: {
    value: 'doublecheck',
    label: 'Double Check',
    description: '',
    function: doubleCheck
  },
  frozen: {
    value: 'frozen',
    label: 'Frozen',
    description: '',
    function: frozen
  }
}