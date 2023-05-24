import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="https://alldoq.com">
      <Icon name="adqWhite" className="header-logo-text" />
    </a >
  );
}

export default OHIFLogo;
