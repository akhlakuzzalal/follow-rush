import useStateLocal from './context/useStateLocal';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  const { current, setCurrent } = useStateLocal();
  return (
    <div>
      <Navbar current={current} setCurrent={setCurrent} />
      {props.children}
      <Footer current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Layout;
