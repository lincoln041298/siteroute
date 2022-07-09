

import { format } from 'url';

import getConfig from 'next/config';
import NextLink, { LinkProps } from 'next/link';



const { publicRuntimeConfig } = getConfig();
export const isDev = process.env.NODE_ENV !== 'production';

export { publicRuntimeConfig };

export const returnBasePath = (path) => {
	if (isDev) return format(path);

	return format(path);
	// return (publicRuntimeConfig.basePath || '') + format(path);
};

export function routerPath(path = '/') {
	return [
		path,
		isDev ? path : path,
		// `${publicRuntimeConfig.basePath || ''}${format(path)}`
		{ shallow: true }
	];
}

const Link = ({ children, ...props }) => (
	<NextLink {...props} as={isDev ? props.href : props.href}>
		{children}
	</NextLink>
);

export default Link;