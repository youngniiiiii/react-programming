import HeaderBar from "./HeaderBar";
import FooterBar from './FooterBar';

function RootLayout(props) {
  console.log(props);
  return (
    <div>
      <HeaderBar />
      <main></main>
      <FooterBar />
    </div>
  );
}

export default RootLayout;
