import BaseLayout from "../components/shared/BaseLayout";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <BaseLayout children={page} />);

  return getLayout(<Component {...pageProps} />);
}
