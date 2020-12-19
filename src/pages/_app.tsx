/* loading styles */
import 'antd/dist/antd.css';
import 'assets/fonts/dana/fontiran.css';
import 'assets/styles/global.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'dayjs/locale/fa';
import 'swiper/swiper.scss';
/* wrapping services */
import { RecoilService } from 'services/recoil/recoilService';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import relativeTime from 'dayjs/plugin/relativeTime';
import dayJs from 'dayjs';
import { Container } from 'components/Container';

dayJs.extend(relativeTime);
dayJs.locale('fa');

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <RecoilService>
            <ConfigProvider direction="rtl">
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </Hydrate>
                </QueryClientProvider>
            </ConfigProvider>
        </RecoilService>
    );
}

export default MyApp;
