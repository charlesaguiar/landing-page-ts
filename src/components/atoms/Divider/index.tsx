import React from 'react';

import { DividerElement } from './styles';

interface IProps {
	width: string | number;
}

const Divider: React.FC<IProps> = ({ width }) => {
	return <DividerElement width={width} />;
};

export default Divider;
