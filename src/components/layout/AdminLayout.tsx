import { Header } from 'components/common';
import { SlideBar } from 'features/dashboard';

export interface AdminLayoutProps {}
export const AdminLayout = (props: AdminLayoutProps) => {
	return (
		<>
			<Header />
			<SlideBar />
		</>
	);
};
