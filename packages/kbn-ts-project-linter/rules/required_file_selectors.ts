/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Rule } from '../lib/rule';

export const requiredFileSelectors = Rule.create('requiredFileSelectors', {
  check(project) {
    if (!project.config.include || project.config.files) {
      return {
        msg: 'every ts project must use the "include" key (and not the "files" key) to select the files for that project',
      };
    }
  },
});
