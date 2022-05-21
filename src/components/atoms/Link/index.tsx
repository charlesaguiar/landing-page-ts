import React from 'react';

import { AnchorLink } from './styles';

interface IProps {
	children: string;
	variant: 'primary' | 'secondary';
	href?: string;
	target?: '_self' | '_blank' | '_parent' | '_top';
}

const Link: React.FC<IProps> = ({ children, variant, href, target = '_self' }) => {
	return (
		<AnchorLink href={href} variant={variant} target={target}>
			{children}
		</AnchorLink>
	);
};

export default Link;
