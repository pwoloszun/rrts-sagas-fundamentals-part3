import React from 'react';

// forms
import IterablesGeneratorsYield from '../../../../features/41-iterables-generators-yield';
import SagaForkModel from '../../../../features/43-saga-fork-model';

const sagasRoutes = [
  {
    path: '/iterables-generators-yield',
    label: 'Iterables, Generators, yield',
    main: () => <IterablesGeneratorsYield />
  },

  {
    path: '/saga-fork-model',
    label: 'Saga Fork Model',
    main: () => <SagaForkModel />
  },
];

export default sagasRoutes;
