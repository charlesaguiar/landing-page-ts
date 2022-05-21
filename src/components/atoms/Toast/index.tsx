import { useCallback, useEffect, useMemo } from 'react';

import useToastStore from '@/stores/toastStore';
import ReactDOM from 'react-dom';

import { BsCheckCircleFill, BsInfoCircleFill } from 'react-icons/bs';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';

import { Container, Message, Title } from './styles';
import colors from '@/design/styles/colors';

const Toast: React.FC = () => {
	const visible = useToastStore(useCallback((s) => s.visible, []));
	const title = useToastStore(useCallback((s) => s.title, []));
	const message = useToastStore(useCallback((s) => s.message, []));
	const severity = useToastStore(useCallback((s) => s.severity, []));
	const duration = useToastStore(useCallback((s) => s.duration, []));
	const onDismiss = useToastStore(useCallback((s) => s.onDismiss, []));
	const hide = useToastStore(useCallback((s) => s.hide, []));

	useEffect(() => {
		const timer = setTimeout(() => {
			dismiss();
		}, duration);

		return () => clearTimeout(timer);
	});

	const dismiss = useCallback(() => {
		hide();
		onDismiss?.();
	}, [hide, onDismiss]);

	const Icon = useMemo(() => {
		switch (severity) {
			case 'success':
				return <BsCheckCircleFill color={colors.success} size={28} />;
			case 'info':
				return <BsInfoCircleFill color={colors.info} size={28} />;
			case 'error':
				return <MdCancel color={colors.error} size={28} />;
			case 'warning':
				return <RiErrorWarningFill color={colors.warning} size={28} />;
		}
	}, [severity]);

	if (!visible) {
		return null;
	}

	return ReactDOM.createPortal(
		<Container severity={severity}>
			<Title>
				{title}
				<IoIosClose onClick={dismiss} style={{ cursor: 'pointer' }} size={24} />
			</Title>
			<Message>
				{Icon}
				{message}
			</Message>
		</Container>,
		document.getElementById('toast-portal')!,
	);
};

export default Toast;
